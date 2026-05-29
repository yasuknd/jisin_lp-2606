import { LINKS, SUBSCRIPTION_LINK_PROPS } from '../../constants/links.js';
import SectionWaves from '../SectionWaves/SectionWaves.jsx';
import SoftBlobs from '../SoftBlobs/SoftBlobs.jsx';
import PhoneMock from '../PhoneMock/PhoneMock.jsx';
import logoPremiumWhite from '../../assets/images/brand/logo-premium-white.png';
import logoPremiumWhite2x from '../../assets/images/brand/logo-premium-white-2x.png';
import logoPremiumWhite3x from '../../assets/images/brand/logo-premium-white-3x.png';
import heroCoverMain from '../../assets/images/hero/hero-cover-main.jpg';
import heroCoverAccent from '../../assets/images/hero/hero-cover-accent.jpg';
import heroCoverSub from '../../assets/images/hero/hero-cover-sub.jpg';
import './Hero.scss';

const SHOW_HERO_ACTIONS = false;

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
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__wash" />
        <div className="hero__washLayer hero__washLayer--green" />
        <SoftBlobs />
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
            <PhoneMock className="phoneMock--hero" showSpeechBubble />
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
                        src={logoPremiumWhite}
                        srcSet={`${logoPremiumWhite} 447w, ${logoPremiumWhite2x} 894w, ${logoPremiumWhite3x} 1341w`}
                        sizes="(min-width: 768px) 420px, 300px"
                        alt="女性自身 プレミアム"
                        width={447}
                        height={195}
                        loading="eager"
                        fetchPriority="high"
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
      <SectionWaves variant="white" position="bottom" />
    </section>
  );
}

export default Hero;
