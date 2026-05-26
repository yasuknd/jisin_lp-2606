import { EXTERNAL_LINK_PROPS, LINKS } from '../../constants/links.js';
import { useScrollPosition } from '../../hooks/useScrollPosition.js';
import logoHeader from '../../assets/images/brand/logo-header.png';
import './Header.scss';

// ヘッダー右上リンク復活時は true に変更
const HEADER_ACTIONS_ENABLED = false;

function scrollToPageTop() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
}

function HeaderActions() {
  return (
    <nav className="header__actions" aria-label="会員メニュー">
      <div className="header__group header__group--points">
        <a
          className="header__button header__button--secondary"
          href={LINKS.points}
          {...EXTERNAL_LINK_PROPS}
          data-gtm="header_points_click"
        >
          所持ポイント
        </a>
      </div>
      <div className="header__group header__group--account">
        <a
          className="header__button header__button--text"
          href={LINKS.login}
          {...EXTERNAL_LINK_PROPS}
          data-gtm="header_login_click"
        >
          ログイン
        </a>
        <a
          className="header__button header__button--text"
          href={LINKS.signup}
          {...EXTERNAL_LINK_PROPS}
          data-gtm="header_signup_click"
        >
          新規会員登録
        </a>
      </div>
    </nav>
  );
}

function Header() {
  const { isScrolled } = useScrollPosition();

  return (
    <header
      className={`header${isScrolled ? ' header--compact' : ''}${HEADER_ACTIONS_ENABLED ? '' : ' header--noActions'}`}
    >
      <div className="header__inner">
        <button
          type="button"
          className="header__logo"
          aria-label="女性自身プレミアム 定期購読 ページトップへ"
          onClick={scrollToPageTop}
        >
          <img
            className="header__logoImage"
            src={logoHeader}
            alt=""
            width={816}
            height={128}
            decoding="async"
          />
          <span className="header__logoText">定期購読</span>
        </button>
        {HEADER_ACTIONS_ENABLED ? <HeaderActions /> : null}
      </div>
    </header>
  );
}

export default Header;
