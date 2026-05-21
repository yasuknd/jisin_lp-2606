import giftCooking from '../../../assets/images/gifts/gift-cooking-01.png';
import giftImperialCalendar from '../../../assets/images/gifts/gift-imperial-calendar-01.jpg';
import giftImperialDigest from '../../../assets/images/gifts/gift-imperial-digest-01.png';
import './SeasonalGifts.scss';

const seasonalGifts = [
  {
    title: '「お料理コレクション」ポストカード',
    description: '4号ごとに、編集部おすすめレシピをポストカードにしてお届け',
    image: giftCooking,
    imageAlt: '「お料理コレクション」ポストカードのイメージ',
    imageWidth: 1251,
    imageHeight: 743,
  },
  {
    title: '皇室報道ダイジェスト',
    description: '1年分の皇室報道をまとめた特別冊子を、12月発売号に同梱予定',
    image: giftImperialDigest,
    imageAlt: '皇室報道ダイジェストのイメージ',
    imageWidth: 1850,
    imageHeight: 1864,
  },
  {
    title: '2027年「皇室ご予定」丸わかりカレンダー',
    description: '皇室のご予定がひと目でわかるカレンダーを、3月発売号に同梱予定',
    image: giftImperialCalendar,
    imageAlt: '2027年「皇室ご予定」丸わかりカレンダーのイメージ',
    imageWidth: 6048,
    imageHeight: 4024,
  },
];

function SeasonalGifts({ label }) {
  return (
    <section className="seasonalGifts">
      <div className="seasonalGifts__shell">
        <header className="seasonalGifts__intro">
          <p className="benefits__blockLabel">{label}</p>
          <h3 className="seasonalGifts__title">全員もらえるプレゼント企画</h3>
          <p className="seasonalGifts__description">
            定期購読会員限定のプレゼントをお届け！
          </p>
        </header>
        <div className="seasonalGifts__content">
          <ul className="seasonalGifts__cards">
            {seasonalGifts.map((gift) => (
              <li key={gift.title} className="seasonalGifts__card">
                <figure className="seasonalGifts__image">
                  <img
                    src={gift.image}
                    alt={gift.imageAlt}
                    width={gift.imageWidth}
                    height={gift.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div className="seasonalGifts__cardBody">
                  <h4 className="seasonalGifts__cardTitle">{gift.title}</h4>
                  <p className="seasonalGifts__cardText">{gift.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SeasonalGifts;
