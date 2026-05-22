import DigitalService from './DigitalService/DigitalService.jsx';
import PointRewards from './PointRewards/PointRewards.jsx';
import SeasonalGifts from './SeasonalGifts/SeasonalGifts.jsx';
import MemberEvents from './MemberEvents/MemberEvents.jsx';
import FreeShipping from './FreeShipping/FreeShipping.jsx';
import SectionWaves from '../SectionWaves/SectionWaves.jsx';
import './Benefits.scss';

const benefitBlocks = [
  { label: '特典1', component: DigitalService },
  { label: '特典2', component: PointRewards },
  { label: '特典3', component: SeasonalGifts },
  { label: '特典4', component: MemberEvents },
  { label: '特典5', component: FreeShipping },
];

function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="benefits__inner">
        <div className="benefits__header">
          <h2 id="benefits-title" className="benefits__title">
            女性自身プレミアム会員なら
            <br />
            限定特典が盛り沢山！
          </h2>
        </div>
        <div className="benefits__body">
          {benefitBlocks.map(({ label, component: BenefitComponent }, index) => (
            <article key={label} className="benefits__block">
              <SectionWaves variant={index % 2 === 0 ? 'pink' : 'white'} position="top" />
              <BenefitComponent label={label} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
