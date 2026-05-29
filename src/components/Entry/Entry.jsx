import { useEffect, useRef, useState } from 'react';
import { magazineCoverImages } from '../../assets/images/magazine-covers/loadMagazineCovers.js';
import { ASSETS } from '../../constants/assets.js';
import { EXTERNAL_LINK_PROPS, LINKS, SUBSCRIPTION_LINK_PROPS } from '../../constants/links.js';
import { useSectionParallax } from '../../hooks/useSectionParallax.js';
import InView from '../InView/InView.jsx';
import PdfViewerModal from '../PdfViewerModal/PdfViewerModal.jsx';
import './Entry.scss';

const ENTRY_MOSAIC_ROWS_PC = 4;
const ENTRY_MOSAIC_COLS_PC = 12;
const ENTRY_MOSAIC_ROWS_SP = 8;
const ENTRY_MOSAIC_COLS_SP = 6;
const ENTRY_MOSAIC_SLOT_COUNT = ENTRY_MOSAIC_COLS_PC * ENTRY_MOSAIC_ROWS_PC;
const ENTRY_MOSAIC_ORDER_STAGGER_MS = 24;
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
  const allImages = magazineCoverImages.map((src, index) => ({
    id: `magazine-cover-${index + 1}`,
    src,
  }));

  const images = shuffleArray(allImages).slice(0, ENTRY_MOSAIC_SLOT_COUNT);
  const cells = [...images];

  while (cells.length < ENTRY_MOSAIC_SLOT_COUNT) {
    cells.push(null);
  }

  return cells;
}

const entryMosaicCells = loadEntryMosaicImages();
const entryMosaicRevealOrder = shuffleArray(
  Array.from({ length: ENTRY_MOSAIC_SLOT_COUNT }, (_, index) => index),
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
      {entryMosaicCells.map((cell, index) => {
        const { variant, delay } = getMosaicCellMotion(index, entryMosaicRevealOrder[index]);

        return (
          <div
            key={cell?.id ?? `entry-mosaic-empty-${index}`}
            className={`entry__mosaicCell entry__mosaicCell--motion${variant}`}
            style={{ '--entry-mosaic-delay': `${delay}ms` }}
          >
            {cell ? <img src={cell.src} alt="" loading="lazy" decoding="async" /> : null}
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
  const [isGuideOpen, setIsGuideOpen] = useState(false);

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
        <InView className="entry__panel">
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
          <div className="entry__aside">
            <button
              type="button"
              className="entry__guide"
              data-gtm="entry_guide_click"
              onClick={() => setIsGuideOpen(true)}
            >
              定期購読のご購入方法はこちら
              <i className="entry__guideIcon fa-solid fa-up-right-from-square" aria-hidden="true" />
            </button>
            <div className="entry__note">
              <p>
                女性自身の定期購読をご購入いただくには、光文社ECサイト「
                <a href={LINKS.kokode} {...EXTERNAL_LINK_PROPS}>
                  ココデジ
                </a>
                」の会員登録（無料）が必要です。
              </p>
              <p>
                購入ポイントは、ココデジの
                <a href={LINKS.points} {...EXTERNAL_LINK_PROPS}>
                  マイページ
                </a>
                でご確認いただけます。
              </p>
            </div>
          </div>
        </InView>
      </div>
      <PdfViewerModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        src={ASSETS.subscriptionGuidePdf}
        title="定期購読のご購入方法"
      />
    </section>
  );
}

export default Entry;
