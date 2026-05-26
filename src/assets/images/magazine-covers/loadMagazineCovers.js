const jpgModules = import.meta.glob('./*.jpg', { eager: true, import: 'default' });
const pngModules = import.meta.glob('./*.png', { eager: true, import: 'default' });

const coverPattern = /magazine-cover-(\d+)\.(jpg|png)$/;

function extractCoverNumber(path) {
  return Number(path.match(coverPattern)?.[1] ?? 0);
}

export function loadMagazineCoverImages() {
  return Object.entries({ ...jpgModules, ...pngModules })
    .filter(([path]) => coverPattern.test(path))
    .sort(([pathA], [pathB]) => extractCoverNumber(pathA) - extractCoverNumber(pathB))
    .map(([, src]) => src);
}

export const magazineCoverImages = loadMagazineCoverImages();
