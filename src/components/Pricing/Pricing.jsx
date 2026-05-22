import { LINKS } from '../../constants/links.js';
import './Pricing.scss';

function PricingPrice({ amount, quantity }) {
  return (
    <>
      <span className="pricing__priceAmount">
        {amount}
        <span className="pricing__priceCurrency">円</span>
      </span>
      <br />
      <span className="pricing__priceUnit">
        <span className="pricing__priceQuantity">{quantity}</span>
        <span className="pricing__priceTax">（税込）</span>
      </span>
    </>
  );
}

const pricingPlans = [
  {
    type: 'annual',
    label: 'おすすめ！',
    name: '年額コース',
    price: <PricingPrice amount="16,920" quantity="36冊" />,
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
    price: <PricingPrice amount="1,500" quantity="3冊" />,
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
        <div className="pricing__header">
          <h2 id="pricing-title" className="pricing__title">
            選べる2つの定期購読コース
          </h2>
          <p className="pricing__intro">
            女性自身プレミアムの定期購読なら、毎号送料無料で雑誌をご自宅・オフィスにお届けします
          </p>
        </div>
        <div className="pricing__cards">
          {pricingPlans.map((plan) => (
            <article
              key={plan.type}
              className={`pricing__card${plan.recommended ? ' pricing__card--recommended' : ''}`}
            >
              <p className="pricing__label">{plan.label}</p>
              <h3 className="pricing__course">{plan.name}</h3>
              <p className="pricing__price">{plan.price}</p>
              <p className="pricing__description">{plan.description}</p>
              <div className="pricing__buttonWrap">
                <a
                  className="pricing__button"
                  href={plan.url}
                  data-gtm={plan.type === 'annual' ? 'pricing_annual_click' : 'pricing_monthly_click'}
                >
                  {plan.buttonText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
