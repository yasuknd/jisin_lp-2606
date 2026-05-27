import { LINKS, EXTERNAL_LINK_PROPS, SUBSCRIPTION_LINK_PROPS } from '../../constants/links.js';
import InView from '../InView/InView.jsx';
import './Pricing.scss';

function PricingPrice({ amount, quantityNum, quantityUnit, quantityPeriod }) {
  return (
    <>
      <span className="pricing__priceAmount">
        <span className="pricing__priceAmountRow">
          <span className="pricing__priceAmountMain">
            <span className="pricing__priceAmountNum">{amount}</span>
            <span className="pricing__priceCurrency">円</span>
          </span>
          <span className="pricing__priceTax">（税込）</span>
        </span>
      </span>
      <span className="pricing__priceUnit">
        <span className="pricing__priceUnitRow">
          <span className="pricing__priceUnitMain">
            <span className="pricing__priceUnitNum">{quantityNum}</span>
            <span className="pricing__priceUnitSuffix">{quantityUnit}</span>
          </span>
          <span className="pricing__priceUnitPeriod">{quantityPeriod}</span>
        </span>
      </span>
    </>
  );
}

const pricingPlans = [
  {
    type: 'annual',
    label: 'おすすめ！',
    name: '年額コース',
    price: <PricingPrice amount="16,920" quantityNum="36" quantityUnit="冊" quantityPeriod="（年）" />,
    description: (
      <>
        「雑誌1年分」通常購入よりも
        <br />
        2,460円安い！
      </>
    ),
    buttonText: '年額コースに申し込む',
    url: LINKS.annual,
    recommended: true,
  },
  {
    type: 'monthly',
    label: 'まずはお試し！',
    name: '月額コース',
    price: <PricingPrice amount="1,500" quantityNum="3" quantityUnit="冊" quantityPeriod="（月）" />,
    description: (
      <>
        お試しにぴったり！
        <br />
        気軽にスタートできるコース
      </>
    ),
    buttonText: '月額コースに申し込む',
    url: LINKS.monthly,
    recommended: false,
  },
];

function Pricing() {
  return (
    <section className="pricing" aria-labelledby="pricing-title">
      <div className="pricing__inner">
        <InView className="pricing__header">
          <h2 id="pricing-title" className="pricing__title">
            選べる2つの定期購読コース
          </h2>
          <p className="pricing__intro">
            女性自身プレミアムの定期購読なら、
            <br />
            毎号送料無料で雑誌をご自宅・オフィスにお届けします
          </p>
        </InView>
        <div className="pricing__cards">
          {pricingPlans.map((plan) => (
            <InView
              key={plan.type}
              as="article"
              className={`pricing__card${plan.recommended ? ' pricing__card--recommended' : ''}`}
            >
              <p className="pricing__label">
                <span className="pricing__labelText">{plan.label}</span>
              </p>
              <div className="pricing__heading">
                <p className="pricing__brand">女性自身プレミアム</p>
                <h3 className="pricing__course">{plan.name}</h3>
              </div>
              <p className="pricing__price">{plan.price}</p>
              <p className="pricing__description">{plan.description}</p>
              <div className="pricing__buttonWrap">
                <a
                  className="pricing__button"
                  href={plan.url}
                  {...SUBSCRIPTION_LINK_PROPS}
                  data-gtm={plan.type === 'annual' ? 'pricing_annual_click' : 'pricing_monthly_click'}
                >
                  {plan.buttonText}
                </a>
              </div>
            </InView>
          ))}
        </div>
        <InView className="pricing__note">
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
        </InView>
      </div>
      <div className="pricing__wave" aria-hidden="true" />
    </section>
  );
}

export default Pricing;
