import { useEffect, useRef } from 'react';
import { LINKS, SUBSCRIPTION_LINK_PROPS } from '../../constants/links.js';
import logoPremium from '../../assets/images/brand/logo-premium.png';
import heroCoverMain from '../../assets/images/hero/hero-cover-main.jpg';
import heroCoverAccent from '../../assets/images/hero/hero-cover-accent.jpg';
import heroCoverSub from '../../assets/images/hero/hero-cover-sub.jpg';
import heroMook01 from '../../assets/images/hero/hero-mook-01.jpg';
import heroMook02 from '../../assets/images/hero/hero-mook-02.jpg';
import heroMook03 from '../../assets/images/hero/hero-mook-03.jpg';
import heroMook04 from '../../assets/images/hero/hero-mook-04.jpg';
import heroMook05 from '../../assets/images/hero/hero-mook-05.jpg';
import heroMook06 from '../../assets/images/hero/hero-mook-06.jpg';
import heroMook07 from '../../assets/images/hero/hero-mook-07.jpg';
import heroMook08 from '../../assets/images/hero/hero-mook-08.jpg';
import heroMook09 from '../../assets/images/hero/hero-mook-09.jpg';
import heroMook10 from '../../assets/images/hero/hero-mook-10.jpg';
import './Hero.scss';

const SHOW_HERO_ACTIONS = false;

const heroMookImages = [
  { id: 'mook-01', src: heroMook01, width: 2420, height: 3070 },
  { id: 'mook-02', src: heroMook02, width: 2480, height: 2480 },
  { id: 'mook-03', src: heroMook03, width: 2480, height: 3070 },
  { id: 'mook-04', src: heroMook04, width: 2480, height: 2480 },
  { id: 'mook-05', src: heroMook05, width: 2480, height: 3070 },
  { id: 'mook-06', src: heroMook06, width: 2480, height: 2480 },
  { id: 'mook-07', src: heroMook07, width: 2480, height: 3070 },
  { id: 'mook-08', src: heroMook08, width: 2480, height: 2480 },
  { id: 'mook-09', src: heroMook09, width: 2480, height: 3070 },
  { id: 'mook-10', src: heroMook10, width: 2480, height: 2480 },
];

function HeroStars() {
  const stars = Array.from({ length: 38 }, (_, index) => ({
    left: `${6 + ((index * 13.7) % 88)}%`,
    top: `${8 + ((index * 19.3) % 84)}%`,
    size: 3 + (index % 3),
    delay: -((index * 0.85) % 6.5),
    duration: 4.2 + (index % 5) * 0.55,
  }));

  return (
    <div className="hero__stars" aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={`star-${index}`}
          className="hero__star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function HeroFlowLines() {
  return (
    <svg className="hero__flowSvg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path
        className="hero__flowLine hero__flowLine--1"
        d="M-120 140 C220 60 420 220 720 170 S1180 90 1560 200"
      />
      <path
        className="hero__flowLine hero__flowLine--2"
        d="M-80 420 C300 360 520 540 840 500 S1320 440 1520 520"
      />
      <path
        className="hero__flowLine hero__flowLine--3"
        d="M200 680 C480 620 640 760 920 720 S1280 660 1480 740"
      />
      <path
        className="hero__flowLine hero__flowLine--4"
        d="M100 280 C380 340 560 180 900 240 S1240 320 1380 260"
      />
      <path
        className="hero__flowLine hero__flowLine--5"
        d="M-40 560 C240 500 400 640 700 600 S1100 520 1420 580"
      />
    </svg>
  );
}

function Hero() {
  const phoneStackRef = useRef(null);
  const phoneCardRefs = useRef([]);

  useEffect(() => {
    const stack = phoneStackRef.current;
    const centerCard = phoneCardRefs.current[1];

    if (!stack || !centerCard) {
      return undefined;
    }

    const setInitialScroll = () => {
      const viewportHeight = stack.clientHeight;
      const cardTop = centerCard.offsetTop;
      const cardHeight = centerCard.offsetHeight;
      stack.scrollTop = cardTop - (viewportHeight - cardHeight) / 2;
    };

    const images = stack.querySelectorAll('.hero__phoneImg');
    let loadedCount = 0;

    const handleReady = () => {
      loadedCount += 1;
      if (loadedCount >= images.length) {
        setInitialScroll();
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        handleReady();
      } else {
        image.addEventListener('load', handleReady);
        image.addEventListener('error', handleReady);
      }
    });

    setInitialScroll();
    window.addEventListener('resize', setInitialScroll);

    return () => {
      window.removeEventListener('resize', setInitialScroll);
      images.forEach((image) => {
        image.removeEventListener('load', handleReady);
        image.removeEventListener('error', handleReady);
      });
    };
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__wash" />
        <div className="hero__washLayer hero__washLayer--green" />
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <HeroStars />
        <HeroFlowLines />
        <svg className="hero__flowSvg hero__flowSvg--mirror" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path
            className="hero__flowLine hero__flowLine--6"
            d="M-60 320 C280 260 500 400 820 360 S1260 300 1500 380"
          />
          <path
            className="hero__flowLine hero__flowLine--7"
            d="M40 760 C360 700 580 820 900 780 S1320 720 1460 800"
          />
        </svg>
      </div>

      <div className="hero__inner">
        <div className="hero__flanks" aria-hidden="true">
          <div className="hero__flank hero__flank--left">
            <div className="hero__magFan">
              <div className="hero__mag hero__mag--back">
                <div className="hero__magInner">
                  <img className="hero__magImg" src={heroCoverAccent} alt="" width={320} height={416} loading="eager" decoding="async" />
                </div>
              </div>
              <div className="hero__mag hero__mag--mid">
                <div className="hero__magInner">
                  <img className="hero__magImg" src={heroCoverSub} alt="" width={320} height={416} loading="eager" decoding="async" />
                </div>
              </div>
              <div className="hero__mag hero__mag--front hero__mockMagazine">
                <div className="hero__magInner">
                  <img className="hero__magImg" src={heroCoverMain} alt="" width={480} height={640} loading="eager" decoding="async" />
                </div>
              </div>
            </div>
          </div>

          <div className="hero__flank hero__flank--right">
            <div className="hero__phone">
              <div className="hero__phoneFrame">
                <div className="hero__phoneBezel">
                  <span className="hero__phoneNotch" />
                  <div className="hero__phoneScreen">
                    <div className="hero__phoneStack" ref={phoneStackRef}>
                      {heroMookImages.map((item, index) => (
                        <div
                          key={item.id}
                          className="hero__phoneCard"
                          ref={(node) => {
                            phoneCardRefs.current[index] = node;
                          }}
                        >
                          <img
                            className="hero__phoneImg"
                            src={item.src}
                            alt=""
                            width={item.width}
                            height={item.height}
                            loading={index < 3 ? 'eager' : 'lazy'}
                            decoding="async"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__center">
          <div className="hero__panel">
            <div className="hero__glass" aria-hidden="true" />
            <div className="hero__intro">
              <header className="hero__copy">
                <div className="hero__headFrame">
                  <div className="hero__headCore">
                    <div className="hero__leadPill">
                      <p className="hero__leadLabel">
                        <span className="hero__leadLabelText">
                          雑誌 <span className="hero__leadLabelSep">＋</span> デジタルサービス{' '}
                          <span className="hero__leadLabelSep">＋</span> 各種特典付き
                        </span>
                      </p>
                    </div>
                    <h1 id="hero-title" className="hero__title">
                      <img
                        className="hero__titleLogo"
                        src={logoPremium}
                        alt="女性自身 プレミアム"
                        width={447}
                        height={195}
                        decoding="async"
                      />
                    </h1>
                  </div>
                </div>
                <div className="hero__descriptionWrap">
                  <span className="hero__descRule hero__descRule--top" aria-hidden="true">
                    <span className="hero__descRuleLine" />
                    <span className="hero__descRuleMark">
                      <span className="hero__descRuleSep">＋</span>
                      <span className="hero__descRuleSep">＋</span>
                      <span className="hero__descRuleSep">＋</span>
                    </span>
                    <span className="hero__descRuleLine" />
                  </span>
                  <p className="hero__description">
                    <span className="hero__descriptionGroup hero__descriptionGroup--appeal">
                      <span className="hero__descriptionLine">
                        皇室・芸能ニュースから健康、マネー、グルメまで
                      </span>
                      <span className="hero__descriptionLine hero__descriptionLine--emphasis">
                        驚きと発見のスクープ情報が満載！
                      </span>
                    </span>
                    <span className="hero__descriptionGroup hero__descriptionGroup--benefit">
                      <span className="hero__descriptionLine">
                        『女性自身』を毎号
                        <span className="hero__descriptionEm">送料無料</span>で
                      </span>
                      <span className="hero__descriptionLine">ご自宅・オフィスにお届けします</span>
                    </span>
                  </p>
                </div>
              </header>
            </div>
          </div>

          {SHOW_HERO_ACTIONS ? (
            <div className="hero__actions">
              <div className="hero__ctaWrap">
                <a
                  className="hero__cta hero__cta--annual"
                  href={LINKS.annual}
                  {...SUBSCRIPTION_LINK_PROPS}
                  data-gtm="hero_annual_click"
                >
                  <span className="hero__ctaLabel">年額コースに申し込む</span>
                  <span className="hero__ctaChevron" aria-hidden="true">
                    ›
                  </span>
                </a>
              </div>
              <div className="hero__ctaWrap">
                <a
                  className="hero__cta hero__cta--monthly"
                  href={LINKS.monthly}
                  {...SUBSCRIPTION_LINK_PROPS}
                  data-gtm="hero_monthly_click"
                >
                  <span className="hero__ctaLabel">月額コースに申し込む</span>
                  <span className="hero__ctaChevron" aria-hidden="true">
                    ›
                  </span>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Hero;
