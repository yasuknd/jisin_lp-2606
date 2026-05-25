import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('src/assets/images');

/** @typedef {{ maxSize: number; jpegQuality: number; pngQuality: number; pngCompressionLevel?: number }} ImageRule */

/** @type {Array<{ test: RegExp; rule: ImageRule }>} */
const RULES = [
  {
    test: /hero\/hero-mook-/,
    rule: { maxSize: 800, jpegQuality: 78, pngQuality: 80 },
  },
  {
    test: /hero\/hero-cover-/,
    rule: { maxSize: 960, jpegQuality: 80, pngQuality: 82 },
  },
  {
    test: /hero\//,
    rule: { maxSize: 960, jpegQuality: 80, pngQuality: 82 },
  },
  {
    test: /benefits\/digital-content-\d+-/,
    rule: { maxSize: 480, jpegQuality: 76, pngQuality: 78, pngCompressionLevel: 9 },
  },
  {
    test: /benefits\//,
    rule: { maxSize: 1000, jpegQuality: 80, pngQuality: 80, pngCompressionLevel: 9 },
  },
  {
    test: /entry\//,
    rule: { maxSize: 640, jpegQuality: 72, pngQuality: 78, pngCompressionLevel: 9 },
  },
  {
    test: /gifts\//,
    rule: { maxSize: 900, jpegQuality: 80, pngQuality: 80, pngCompressionLevel: 9 },
  },
  {
    test: /events\//,
    rule: { maxSize: 1400, jpegQuality: 82, pngQuality: 82, pngCompressionLevel: 9 },
  },
  {
    test: /brand\//,
    rule: { maxSize: 512, jpegQuality: 85, pngQuality: 85, pngCompressionLevel: 9 },
  },
];

const DEFAULT_RULE = { maxSize: 1200, jpegQuality: 80, pngQuality: 80, pngCompressionLevel: 9 };

/**
 * @param {string} relativePath
 * @returns {ImageRule}
 */
function getRule(relativePath) {
  return RULES.find(({ test }) => test.test(relativePath))?.rule ?? DEFAULT_RULE;
}

/**
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return collectImages(fullPath);
      }
      if (/\.(jpe?g|png)$/i.test(entry.name)) {
        return [fullPath];
      }
      return [];
    }),
  );

  return files.flat();
}

/**
 * @param {string} filePath
 */
async function optimizeImage(filePath) {
  const relativePath = path.relative(ROOT, filePath);
  const rule = getRule(relativePath);
  const before = (await stat(filePath)).size;
  const meta = await sharp(filePath).metadata();
  const isJpeg = meta.format === 'jpeg' || /\.jpe?g$/i.test(filePath);
  const isPng = meta.format === 'png' || /\.png$/i.test(filePath);

  let pipeline = sharp(filePath).rotate();

  if ((meta.width ?? 0) > rule.maxSize || (meta.height ?? 0) > rule.maxSize) {
    pipeline = pipeline.resize({
      width: rule.maxSize,
      height: rule.maxSize,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  if (isJpeg) {
    pipeline = pipeline.jpeg({ quality: rule.jpegQuality, mozjpeg: true });
  } else if (isPng) {
    pipeline = pipeline.png({
      quality: rule.pngQuality,
      compressionLevel: rule.pngCompressionLevel ?? 9,
      effort: 10,
    });
  } else {
    return { relativePath, before, after: before, saved: 0, skipped: 'unsupported-format' };
  }

  const output = await pipeline.toBuffer();

  if (output.length >= before) {
    return { relativePath, before, after: before, saved: 0, skipped: 'no-gain' };
  }

  await writeFile(filePath, output);

  return {
    relativePath,
    before,
    after: output.length,
    saved: before - output.length,
  };
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  }
  if (bytes >= 1024) {
    return `${Math.round(bytes / 1024)}KB`;
  }
  return `${bytes}B`;
}

async function main() {
  const files = await collectImages(ROOT);
  let totalBefore = 0;
  let totalAfter = 0;
  let optimizedCount = 0;

  for (const filePath of files) {
    const result = await optimizeImage(filePath);
    totalBefore += result.before;
    totalAfter += result.after;

    if (result.saved > 0) {
      optimizedCount += 1;
      console.log(
        `${result.relativePath}: ${formatBytes(result.before)} -> ${formatBytes(result.after)} (-${formatBytes(result.saved)})`,
      );
    }
  }

  console.log('');
  console.log(`Optimized ${optimizedCount}/${files.length} files`);
  console.log(`Total: ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} (-${formatBytes(totalBefore - totalAfter)})`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
