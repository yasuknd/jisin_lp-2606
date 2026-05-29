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
              <span className="bottomCta__buttonLabel">
                <span className="bottomCta__buttonBrand">女性自身プレミアム</span>
                <span className="bottomCta__buttonCourse">［年額コース］</span>
              </span>
            </a>
          </div>
          <div className="bottomCta__buttonWrap">
            <a
              className="bottomCta__button"
              href={LINKS.monthly}
              {...SUBSCRIPTION_LINK_PROPS}
              data-gtm="bottom_monthly_click"
            >
              <span className="bottomCta__buttonLabel">
                <span className="bottomCta__buttonBrand">女性自身プレミアム</span>
                <span className="bottomCta__buttonCourse">［月額コース］</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default BottomCta;
