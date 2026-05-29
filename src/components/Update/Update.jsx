import InView from '../InView/InView.jsx';
import './Update.scss';

const updateItems = [
  {
    id: 'points',
    node: (
      <>
        定期購読を新規および継続お申し込みの方に
        <span className="update__itemEm">ポイントを付与</span>
      </>
    ),
  },
  {
    id: 'monthly',
    node: (
      <>
        より気軽に始められる
        <span className="update__itemEm">月額コース</span>
        がスタート
      </>
    ),
  },
  {
    id: 'coupon',
    node: (
      <>
        定期購読会員限定の
        <span className="update__itemEm">プレゼント</span>
        をお届け
      </>
    ),
  },
];

function Update() {
  return (
    <section className="update" aria-labelledby="update-title">
      <div className="update__inner">
        <InView className="update__card">
          <p className="update__label">UPDATE</p>
          <div className="update__main">
            <p className="update__date">６月２日（火）〜</p>
            <h2 id="update-title" className="update__title">
              『女性自身』定期購読「女性自身プレミアム」がアップデート！
            </h2>
            <ul className="update__list">
              {updateItems.map((item) => (
                <li key={item.id} className="update__item">
                  <i className="update__itemIcon fa-solid fa-check" aria-hidden="true" />
                  <p className="update__itemText">{item.node}</p>
                </li>
              ))}
            </ul>
          </div>
        </InView>
      </div>
      <div className="update__divider" aria-hidden="true">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="update__dividerShape"
          />
        </svg>
      </div>
    </section>
  );
}

export default Update;
