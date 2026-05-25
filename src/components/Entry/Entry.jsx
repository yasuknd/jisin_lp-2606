import { useEffect, useRef, useState } from 'react';
import { LINKS, SUBSCRIPTION_LINK_PROPS } from '../../constants/links.js';
import './Entry.scss';

const ENTRY_MOSAIC_ROWS_PC = 3;
const ENTRY_MOSAIC_COLS_PC = 8;
const ENTRY_MOSAIC_ROWS_SP = 6;
const ENTRY_MOSAIC_COLS_SP = 4;
const ENTRY_MOSAIC_IMAGE_COUNT = ENTRY_MOSAIC_COLS_PC * ENTRY_MOSAIC_ROWS_PC;
const ENTRY_MOSAIC_STAGGER_MS = 45;

function sortByNumber(paths) {
  const pattern = /entry-mosaic-(\d+)/;

  return paths.sort(([pathA], [pathB]) => {
    const numA = Number(pathA.match(pattern)?.[1] ?? 0);
    const numB = Number(pathB.match(pattern)?.[1] ?? 0);
    return numA - numB;
  });
}

function shuffleArray(values) {
  const result = [...values];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function loadEntryMosaicImages() {
  const jpgModules = import.meta.glob('../../assets/images/entry/entry-mosaic-*.jpg', {
    eager: true,
    import: 'default',
  });
  const pngModules = import.meta.glob('../../assets/images/entry/entry-mosaic-*.png', {
    eager: true,
    import: 'default',
  });

  return sortByNumber(Object.entries({ ...jpgModules, ...pngModules }))
    .slice(0, ENTRY_MOSAIC_IMAGE_COUNT)
    .map(([path, src]) => ({
      id: path,
      src,
    }));
}

const entryMosaicImages = loadEntryMosaicImages();
const entryMosaicRevealOrder = shuffleArray(
  Array.from({ length: ENTRY_MOSAIC_IMAGE_COUNT }, (_, index) => index),
);

function EntryMosaic({ isRevealed }) {
  return (
    <div
      className={`entry__mosaic${isRevealed ? ' entry__mosaic--revealed' : ''}`}
      aria-hidden="true"
      style={{
        '--entry-mosaic-cols-sp': ENTRY_MOSAIC_COLS_SP,
        '--entry-mosaic-rows-sp': ENTRY_MOSAIC_ROWS_SP,
        '--entry-mosaic-cols-pc': ENTRY_MOSAIC_COLS_PC,
        '--entry-mosaic-rows-pc': ENTRY_MOSAIC_ROWS_PC,
        '--entry-mosaic-stagger': `${ENTRY_MOSAIC_STAGGER_MS}ms`,
      }}
    >
      {entryMosaicImages.map((image, index) => (
        <div
          key={image.id}
          className="entry__mosaicCell"
          style={{ '--entry-mosaic-index': entryMosaicRevealOrder[index] }}
        >
          <img src={image.src} alt="" loading="lazy" decoding="async" />
        </div>
      ))}
    </div>
  );
}

function Entry() {
  const sectionRef = useRef(null);
  const [isMosaicRevealed, setIsMosaicRevealed] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsMosaicRevealed(true);
      return undefined;
    }

    const node = sectionRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMosaicRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="entry" aria-labelledby="entry-title">
      <div className="entry__backdrop" aria-hidden="true">
        <EntryMosaic isRevealed={isMosaicRevealed} />
        <div className="entry__overlay" />
      </div>
      <div className="entry__inner">
        <div className="entry__panel">
          <h2 id="entry-title" className="entry__title">
            女性自身プレミアムに申し込む
          </h2>
          <div className="entry__buttons">
            <div className="entry__buttonWrap">
              <a
                className="entry__button entry__button--annual"
                href={LINKS.annual}
                {...SUBSCRIPTION_LINK_PROPS}
                data-gtm="entry_annual_click"
              >
                年額コース
              </a>
            </div>
            <div className="entry__buttonWrap">
              <a
                className="entry__button entry__button--monthly"
                href={LINKS.monthly}
                {...SUBSCRIPTION_LINK_PROPS}
                data-gtm="entry_monthly_click"
              >
                月額コース
              </a>
            </div>
          </div>
          <a className="entry__guide" href={LINKS.guide} data-gtm="entry_guide_click">
            定期購読のご購入方法はこちら
          </a>
        </div>
      </div>
    </section>
  );
}

export default Entry;
