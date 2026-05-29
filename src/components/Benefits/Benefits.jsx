import { Fragment } from 'react';
import DigitalService from './DigitalService/DigitalService.jsx';
import PointRewards from './PointRewards/PointRewards.jsx';
import SeasonalGifts from './SeasonalGifts/SeasonalGifts.jsx';
import MemberEvents from './MemberEvents/MemberEvents.jsx';
import FreeShipping from './FreeShipping/FreeShipping.jsx';
import InView from '../InView/InView.jsx';
import SectionWaves from '../SectionWaves/SectionWaves.jsx';
import SparkleField from '../SparkleField/SparkleField.jsx';
import './Benefits.scss';

const benefitBlocks = [
  { id: 'digitalService', label: '特典1', component: DigitalService, pinkBand: true },
  { id: 'seasonalGifts', label: '特典2', component: SeasonalGifts, waveBefore: true, waveVariant: 'white', waveBridgeTone: 'pink' },
  { id: 'memberEvents', label: '特典3', component: MemberEvents, pinkBand: true, waveBefore: true, waveVariant: 'pink', waveBridgeTone: 'white' },
  { id: 'freeShipping', label: '特典4', component: FreeShipping, waveBefore: true, waveVariant: 'white', waveBridgeTone: 'pink' },
  { id: 'pointRewards', label: '特典5', component: PointRewards },
];

function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="benefits__inner">
        <div className="benefits__headerArea">
          <InView className="benefits__header">
            <h2 id="benefits-title" className="benefits__title">
              女性自身プレミアム会員なら
              <br />
              限定特典が盛り沢山！
            </h2>
          </InView>
          <SectionWaves variant="pink" position="bottom" />
        </div>
        <div className="benefits__body">
          {benefitBlocks.map(({ id, label, component: BenefitComponent, pinkBand, waveBefore, waveVariant, waveBridgeTone }, index) => (
            <Fragment key={id}>
              {waveBefore ? (
                <div
                  className={[
                    'benefits__waveBridge',
                    waveBridgeTone === 'pink' ? 'benefits__waveBridge--fromPink' : '',
                  ].filter(Boolean).join(' ')}
                  aria-hidden="true"
                >
                  <SectionWaves variant={waveVariant ?? 'pink'} position="bottom" />
                </div>
              ) : null}
              <InView
                as="article"
                className={['benefits__block', pinkBand ? 'benefits__block--pink' : ''].filter(Boolean).join(' ')}
              >
                <SparkleField
                  variant={pinkBand ? 'white' : 'pink'}
                  count={52}
                  seed={index}
                />
                <BenefitComponent label={label} />
              </InView>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
