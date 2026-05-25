import { LINKS, SUBSCRIPTION_LINK_PROPS } from '../../constants/links.js';
import { useScrollPosition } from '../../hooks/useScrollPosition.js';
import './BottomCta.scss';

function BottomCta() {
  const { isScrolled, isAtBottom } = useScrollPosition();
  const isCompact = isScrolled && !isAtBottom;

  return (
    <aside className={`bottomCta${isCompact ? ' bottomCta--compact' : ''}`} aria-label="お申し込み">
      <div className="bottomCta__bar">
        <div className="bottomCta__inner">
          <div className="bottomCta__buttonWrap">
            <a
              className="bottomCta__button"
              href={LINKS.annual}
              {...SUBSCRIPTION_LINK_PROPS}
              data-gtm="bottom_annual_click"
            >
              女性自身プレミアム［年額コース］
            </a>
          </div>
          <div className="bottomCta__buttonWrap">
            <a
              className="bottomCta__button"
              href={LINKS.monthly}
              {...SUBSCRIPTION_LINK_PROPS}
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
