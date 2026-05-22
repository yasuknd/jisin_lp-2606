import { LINKS, SUBSCRIPTION_LINK_PROPS } from '../../constants/links.js';
import './Entry.scss';

function Entry() {
  return (
    <section className="entry" aria-labelledby="entry-title">
      <div className="entry__inner">
        <div className="entry__panel">
          <h2 id="entry-title" className="entry__title">
            女性自身プレミアムに申し込む
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
          <a className="entry__guide" href={LINKS.guide} data-gtm="entry_guide_click">
            定期購読のご購入方法はこちら
          </a>
        </div>
      </div>
    </section>
  );
}

export default Entry;
