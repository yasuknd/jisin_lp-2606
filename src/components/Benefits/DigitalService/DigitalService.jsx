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

const digitalContent01Frames = loadNumberedImages('digital-content-01');
const digitalContent02Frames = loadNumberedImages('digital-content-02');
const digitalContent03Frames = loadNumberedImages('digital-content-03');

const GALLERY_SEC_PER_IMAGE = 4.5;

function getGalleryDuration(imageCount) {
  return `${GALLERY_SEC_PER_IMAGE * imageCount}s`;
}

const digitalServiceItems = [
  {
    title: '過去2年分の『女性自身』がすべて読み放題',
    description:
      '見逃したニュース、振り返りたい健康記事、何度でも読み返したいレシピページなど。「ワード検索」で過去2年分がいつでも読めます！',
    images: digitalContent01Frames,
    imageAlt: '女性自身Premiumで読める過去記事のイメージ',
    galleryReverse: false,
  },
  {
    title: 'ムック、マンガも読み放題',
    description:
      '愛くるしいパンダの軌跡をたどれる『パンダ自身』、スマホで見やすいレシピ集『女性自身お料理コレクション』など注目コンテンツが目白押し！',
    images: digitalContent02Frames,
    imageAlt: 'ムック・マンガ読み放題コンテンツのイメージ',
    galleryReverse: true,
  },
  {
    title: '会員限定のオリジナル動画も続々アップ',
    description: '',
    images: digitalContent03Frames,
    imageAlt: '会員限定オリジナル動画のイメージ',
    galleryReverse: false,
  },
];

function DigitalService({ label }) {
  return (
    <section className="digitalService">
      <div className="digitalService__shell">
        <header className="digitalService__intro">
          <p className="benefits__blockLabel">{label}</p>
          <h3 className="digitalService__title">デジタルサービス『女性自身Premium』</h3>
          <p className="digitalService__description">たくさんのコンテンツがスマホでも読める！</p>
        </header>

        <ul className="digitalService__features">
          {digitalServiceItems.map((item) => (
            <li key={item.title} className="digitalService__feature">
              <figure
                className={`digitalService__featureFig${
                  item.images ? ' digitalService__featureFig--gallery' : ''
                }`}
                {...(item.images ? { 'aria-label': item.imageAlt } : {})}
              >
                {item.images ? (
                  <div
                    className={`digitalService__galleryTrack${
                      item.galleryReverse ? ' digitalService__galleryTrack--reverse' : ''
                    }`}
                    style={{ '--gallery-duration': getGalleryDuration(item.images.length) }}
                    aria-hidden="true"
                  >
                    {[...item.images, ...item.images].map((src, index) => (
                      <img
                        key={`${src}-${index}`}
                        className="digitalService__featureImage"
                        src={src}
                        alt=""
                        width={443}
                        height={550}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={480}
                    height={360}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </figure>
              <div className="digitalService__featureBody">
                <h4 className="digitalService__featureTitle">{item.title}</h4>
                {item.description ? <p className="digitalService__featureText">{item.description}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DigitalService;
