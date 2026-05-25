import { LINKS } from '../../constants/links.js';
import { useScrollPosition } from '../../hooks/useScrollPosition.js';
import logoHeader from '../../assets/images/brand/logo-header.png';
import './Header.scss';

function Header() {
  const { isScrolled } = useScrollPosition();

  return (
    <header className={`header${isScrolled ? ' header--compact' : ''}`}>
      <div className="header__inner">
        <a
          className="header__logo"
          href="#"
          aria-label="女性自身プレミアム 定期購読 ページトップへ"
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
        </a>
        <nav className="header__actions" aria-label="会員メニュー">
          <div className="header__group header__group--points">
            <a
              className="header__button header__button--secondary"
              href={LINKS.points}
              data-gtm="header_points_click"
            >
              所持ポイント
            </a>
            <a
              className="header__button header__button--secondary"
              href={LINKS.usePoints}
              data-gtm="header_use_points_click"
            >
              ポイントを使う
            </a>
          </div>
          <div className="header__group header__group--account">
            <a
              className="header__button header__button--text"
              href={LINKS.login}
              data-gtm="header_login_click"
            >
              ログイン
            </a>
            <a
              className="header__button header__button--text"
              href={LINKS.signup}
              data-gtm="header_signup_click"
            >
              新規会員登録
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
