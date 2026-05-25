import { useEffect, useRef, useState } from 'react';
import { LINKS, SUBSCRIPTION_LINK_PROPS } from '../../constants/links.js';
import { useSectionParallax } from '../../hooks/useSectionParallax.js';
import './Entry.scss';

const ENTRY_MOSAIC_ROWS_PC = 3;
const ENTRY_MOSAIC_COLS_PC = 8;
const ENTRY_MOSAIC_ROWS_SP = 6;
const ENTRY_MOSAIC_COLS_SP = 4;
const ENTRY_MOSAIC_IMAGE_COUNT = ENTRY_MOSAIC_COLS_PC * ENTRY_MOSAIC_ROWS_PC;
const ENTRY_MOSAIC_ORDER_STAGGER_MS = 32;
const ENTRY_MOSAIC_VARIANT_OFFSET_MS = 8;
const ENTRY_MOSAIC_REVEAL_DURATION_MS = 300;

function shuffleArray(values) {
  const result = [...values];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function getMosaicCellMotion(index, revealRank) {
  const variant = index % 4;
  const delay = revealRank * ENTRY_MOSAIC_ORDER_STAGGER_MS + variant * ENTRY_MOSAIC_VARIANT_OFFSET_MS;

  return { variant, delay };
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

  const allImages = Object.entries({ ...jpgModules, ...pngModules }).map(([path, src]) => ({
    id: path,
    src,
  }));

  return shuffleArray(allImages).slice(0, ENTRY_MOSAIC_IMAGE_COUNT);
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
        '--entry-mosaic-reveal-duration': `${ENTRY_MOSAIC_REVEAL_DURATION_MS}ms`,
      }}
    >
      {entryMosaicImages.map((image, index) => {
        const { variant, delay } = getMosaicCellMotion(index, entryMosaicRevealOrder[index]);

        return (
          <div
            key={image.id}
            className={`entry__mosaicCell entry__mosaicCell--motion${variant}`}
            style={{ '--entry-mosaic-delay': `${delay}ms` }}
          >
            <img src={image.src} alt="" loading="lazy" decoding="async" />
          </div>
        );
      })}
    </div>
  );
}

function isElementFullyInView(node) {
  const rect = node.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  return rect.top >= 0 && rect.bottom <= viewportHeight;
}

function Entry() {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const [isMosaicRevealed, setIsMosaicRevealed] = useState(false);

  useSectionParallax(sectionRef, { bgSpeed: 0.18, contentSpeed: -0.06 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsMosaicRevealed(true);
      return undefined;
    }

    const node = innerRef.current;
    if (!node) {
      return undefined;
    }

    let frameId = 0;

    const revealIfReady = () => {
      frameId = 0;

      if (isElementFullyInView(node)) {
        setIsMosaicRevealed(true);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', revealIfReady);
      }
    };

    const onScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(revealIfReady);
      }
    };

    revealIfReady();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', revealIfReady);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', revealIfReady);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="entry" aria-labelledby="entry-title">
      <div className="entry__backdrop" aria-hidden="true">
        <EntryMosaic isRevealed={isMosaicRevealed} />
        <div className="entry__overlay" />
      </div>
      <div
        ref={innerRef}
        className={`entry__inner${isMosaicRevealed ? ' entry__inner--inView' : ''}`}
      >
        <div className="entry__panel">
          <h2 id="entry-title" className="entry__title">
            <span className="entry__titleBrand">女性自身プレミアム</span>
            に申し込む
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
