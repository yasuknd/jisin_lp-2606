import { useCallback, useEffect, useRef, useState } from 'react';
import { magazineCoverImages } from '../../../assets/images/magazine-covers/loadMagazineCovers.js';
import './DigitalService.scss';

function loadNumberedImages(prefix) {
  const modules = import.meta.glob(
    '../../../assets/images/benefits/digital-content-0*-*.jpg',
    { eager: true, import: 'default' },
  );
  const pngModules = import.meta.glob(
    '../../../assets/images/benefits/digital-content-0*-*.png',
    { eager: true, import: 'default' },
  );

  const pattern = new RegExp(`${prefix}-(\\d+)\\.(jpg|png)$`);

  return Object.entries({ ...modules, ...pngModules })
    .filter(([path]) => path.includes(`${prefix}-`))
    .sort(([pathA], [pathB]) => {
      const extractNum = (path) => Number(path.match(pattern)?.[1] ?? 0);
      return extractNum(pathA) - extractNum(pathB);
    })
    .map(([, src]) => src);
}

const digitalContent01Frames = magazineCoverImages;
const digitalContent02Frames = loadNumberedImages('digital-content-02');
const digitalContent03Frames = loadNumberedImages('digital-content-03');

const GALLERY_SEC_PER_IMAGE = 4.5;
const BASELINE_GALLERY_DURATION_SEC = GALLERY_SEC_PER_IMAGE * digitalContent01Frames.length;
const BASELINE_GALLERY_DURATION = `${BASELINE_GALLERY_DURATION_SEC}s`;

function GalleryTrack({ images, reverse = false, flowSpeedPxPerSec = null, onBaselineSpeed = null }) {
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(BASELINE_GALLERY_DURATION);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDuration = () => {
      const trackWidth = track.scrollWidth;
      if (!trackWidth) return;

      const travelDistance = trackWidth / 2;

      if (onBaselineSpeed) {
        onBaselineSpeed(travelDistance / BASELINE_GALLERY_DURATION_SEC);
        setDuration(BASELINE_GALLERY_DURATION);
        return;
      }

      if (!flowSpeedPxPerSec) {
        setDuration(BASELINE_GALLERY_DURATION);
        return;
      }

      setDuration(`${travelDistance / flowSpeedPxPerSec}s`);
    };

    updateDuration();

    const resizeObserver = new ResizeObserver(updateDuration);
    resizeObserver.observe(track);

    track.querySelectorAll('img').forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', updateDuration, { once: true });
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [images, flowSpeedPxPerSec, onBaselineSpeed]);

  return (
    <div
      ref={trackRef}
      className={`digitalService__galleryTrack${
        reverse ? ' digitalService__galleryTrack--reverse' : ''
      }`}
      style={{ '--gallery-duration': duration }}
      aria-hidden="true"
    >
      {[...images, ...images].map((src, index) => (
        <div key={`${src}-${index}`} className="digitalService__featureImageFrame">
          <img
            className="digitalService__featureImage"
            src={src}
            alt=""
            width={443}
            height={550}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

const digitalServiceItems = [
  {
    title: '過去2年分の『女性自身』がすべて読み放題',
    description:
      '雅子さまや愛子さまの名場面、もう一度読みたい芸能ニュース、最近気になる健康記事、旬の食材を美味しく活かすレシピなど、「ワード検索」で過去2年分がいつでも読めます！',
    images: digitalContent01Frames,
    imageAlt: '女性自身Premiumで読める過去記事のイメージ',
    layoutSplit: 'normal',
    galleryReverse: false,
  },
  {
    title: 'ムック、マンガも読み放題',
    description:
      '愛くるしいパンダの軌跡をたどれる『パンダ自身』、スマホで見やすいレシピ集『女性自身お料理コレクション』など注目コンテンツが目白押し！',
    images: digitalContent02Frames,
    imageAlt: 'ムック・マンガ読み放題コンテンツのイメージ',
    layoutSplit: 'reverse',
    galleryReverse: true,
  },
  {
    title: '会員限定のオリジナル動画も続々アップ',
    description:
      'なお妻さん、ガバちゃんによる「懸賞女王2人が指南！年末の豪華懸賞必勝術」や、ごぼう先生の"ごぼう体操"で季節の「なんとなく不調」を解消する動画など、本誌人気企画と連動したオリジナル動画も配信中！',
    images: digitalContent03Frames,
    imageAlt: '会員限定オリジナル動画のイメージ',
    layoutSplit: 'normal',
    galleryReverse: false,
  },
];

function DigitalService({ label }) {
  const [galleryFlowSpeed, setGalleryFlowSpeed] = useState(null);
  const handleBaselineSpeed = useCallback((speed) => {
    setGalleryFlowSpeed((prev) => {
      if (prev !== null && Math.abs(prev - speed) < 0.01) return prev;
      return speed;
    });
  }, []);

  const renderFeatureBody = (item) => (
    <div className="digitalService__featureBody">
      <h4 className="digitalService__featureTitle">{item.title}</h4>
      {item.description ? <p className="digitalService__featureText">{item.description}</p> : null}
    </div>
  );

  const renderGallery = (item, isBaseline = false) => (
    <figure
      className={`digitalService__featureFig digitalService__featureFig--gallery${
        item.galleryCompact ? ' digitalService__featureFig--galleryCompact' : ''
      }`}
      aria-label={item.imageAlt}
    >
      <GalleryTrack
        images={item.images}
        reverse={item.galleryReverse}
        flowSpeedPxPerSec={isBaseline ? null : galleryFlowSpeed}
        onBaselineSpeed={isBaseline ? handleBaselineSpeed : null}
      />
    </figure>
  );

  return (
    <section className="digitalService">
      <div className="digitalService__shell">
        <header className="digitalService__intro">
          <p className="benefits__blockLabel">{label}</p>
          <h3 className="digitalService__title">デジタルサービス『女性自身Premium』</h3>
          <p className="digitalService__description">たくさんのコンテンツがスマホやPCで読める！</p>
        </header>

        <ul className="digitalService__features">
          {digitalServiceItems.map((item, index) => (
            <li
              key={item.title}
              className={`digitalService__feature${
                item.layoutSplit ? ` digitalService__feature--split digitalService__feature--split-${item.layoutSplit}` : ''
              }`}
            >
              {item.layoutSplit ? (
                <div className="digitalService__featureSplit">
                  {item.layoutSplit === 'reverse' ? (
                    <>
                      {renderGallery(item, index === 0)}
                      {renderFeatureBody(item)}
                    </>
                  ) : (
                    <>
                      {renderFeatureBody(item)}
                      {renderGallery(item, index === 0)}
                    </>
                  )}
                </div>
              ) : (
                <>
                  {renderGallery(item, index === 0)}
                  {renderFeatureBody(item)}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DigitalService;
