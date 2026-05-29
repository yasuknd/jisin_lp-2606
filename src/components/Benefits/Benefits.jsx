import { Fragment } from 'react';
import DigitalService from './DigitalService/DigitalService.jsx';
import PointRewards from './PointRewards/PointRewards.jsx';
import PointRewardsFooter from './PointRewards/PointRewardsFooter.jsx';
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
];

const benefitDualBlocks = [
  { id: 'freeShipping', label: '特典4', component: FreeShipping, sparkle: false },
  { id: 'pointRewards', label: '特典5', component: PointRewards, sparkle: false },
];

function renderWaveBridge(waveVariant, waveBridgeTone) {
  return (
    <div
      className={[
        'benefits__waveBridge',
        waveBridgeTone === 'pink' ? 'benefits__waveBridge--fromPink' : '',
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <SectionWaves variant={waveVariant ?? 'pink'} position="bottom" />
    </div>
  );
}

function renderBenefitBlock(
  { id, label, component: BenefitComponent, pinkBand, sparkle = true },
  index,
) {
  return (
    <InView
      key={id}
      as="article"
      className={['benefits__block', pinkBand ? 'benefits__block--pink' : ''].filter(Boolean).join(' ')}
    >
      {sparkle ? (
        <SparkleField variant={pinkBand ? 'white' : 'pink'} count={52} seed={index} />
      ) : null}
      <BenefitComponent label={label} />
    </InView>
  );
}

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
          {benefitBlocks.map((block, index) => (
            <Fragment key={block.id}>
              {block.waveBefore ? renderWaveBridge(block.waveVariant, block.waveBridgeTone) : null}
              {renderBenefitBlock(block, index)}
            </Fragment>
          ))}
          {renderWaveBridge('white', 'pink')}
          <div className="benefits__dualRow">
            {benefitDualBlocks.map((block, dualIndex) => {
              const index = benefitBlocks.length + dualIndex;
              return renderBenefitBlock(block, index);
            })}
          </div>
          <InView className="benefits__dualFooter">
            <PointRewardsFooter />
          </InView>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
