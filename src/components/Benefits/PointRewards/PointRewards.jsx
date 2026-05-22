import './PointRewards.scss';

const pointRewardItems = [
  {
    title: '定期購読の新規および継続お申し込みの方にポイントを付与',
    description: '次回の定期購読継続にも利用できます。',
  },
  {
    title: 'キャンペーン期間中は購入金額の10％をポイント還元',
    descriptionLabel: 'キャンペーン期間',
    description: '2026年6月2日～2027年5月31日',
    highlight: true,
  },
];

function PointRewards({ label }) {
  return (
    <section className="pointRewards">
      <div className="pointRewards__shell">
        <header className="pointRewards__intro">
          <p className="benefits__blockLabel">{label}</p>
          <h3 className="pointRewards__title">ポイントが貯まる</h3>
          <p className="pointRewards__description">
            kokodeクーポンのプレゼントや抽選プレゼントも！
          </p>
        </header>
        <div className="pointRewards__content">
          <ul className="pointRewards__list">
            {pointRewardItems.map((item) => (
              <li
                key={item.title}
                className={`pointRewards__item${item.highlight ? ' pointRewards__highlight' : ''}`}
              >
                <h4 className="pointRewards__itemTitle">{item.title}</h4>
                {item.descriptionLabel ? (
                  <div className="pointRewards__itemNote">
                    <p className="pointRewards__itemLabel">{item.descriptionLabel}</p>
                    {item.description ? (
                      <p className="pointRewards__itemText">
                        <span className="pointRewards__itemEm">{item.description}</span>
                      </p>
                    ) : null}
                  </div>
                ) : item.description ? (
                  <p className="pointRewards__itemText">{item.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PointRewards;
