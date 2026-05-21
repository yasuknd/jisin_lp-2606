import { LINKS } from '../../constants/links.js';
import './BottomCta.scss';

function BottomCta() {
  return (
    <aside className="bottomCta" aria-label="お申し込み">
      <div className="bottomCta__bar">
        <div className="bottomCta__inner">
          <div className="bottomCta__buttonWrap">
            <a
              className="bottomCta__button"
              href={LINKS.annual}
              data-gtm="bottom_annual_click"
            >
              女性自身プレミアム［年額コース］
            </a>
          </div>
          <div className="bottomCta__buttonWrap">
            <a
              className="bottomCta__button"
              href={LINKS.monthly}
              data-gtm="bottom_monthly_click"
            >
              女性自身プレミアム［月額コース］
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default BottomCta;
