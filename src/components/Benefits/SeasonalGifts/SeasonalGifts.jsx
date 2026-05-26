import giftCooking01 from '../../../assets/images/gifts/gift-cooking-01.png';
import giftCooking02 from '../../../assets/images/gifts/gift-cooking-02.png';
import giftCooking03 from '../../../assets/images/gifts/gift-cooking-03.png';
import giftCooking04 from '../../../assets/images/gifts/gift-cooking-04.png';
import giftCooking05 from '../../../assets/images/gifts/gift-cooking-05.png';
import './SeasonalGifts.scss';

const cookingGiftImages = [
  { src: giftCooking01, alt: '「お料理コレクション」ポストカードのイメージ' },
  { src: giftCooking02, alt: '' },
  { src: giftCooking03, alt: '' },
  { src: giftCooking04, alt: '' },
  { src: giftCooking05, alt: '' },
];

function SeasonalGifts({ label }) {
  return (
    <section className="seasonalGifts">
      <div className="seasonalGifts__shell">
        <header className="seasonalGifts__intro">
          <p className="benefits__blockLabel">{label}</p>
          <h3 className="seasonalGifts__title">定期購読限定プレゼント</h3>
          <p className="seasonalGifts__description">
            定期購読会員限定のプレゼントをお届け！
          </p>
        </header>
        <div className="seasonalGifts__content">
          <div className="seasonalGifts__panel">
            <article className="seasonalGifts__feature">
              <ul className="seasonalGifts__gallery">
                {cookingGiftImages.map((image) => (
                  <li key={image.src} className="seasonalGifts__galleryItem">
                    <figure className="seasonalGifts__image">
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={740}
                        height={740}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </li>
                ))}
              </ul>
              <div className="seasonalGifts__cardBody">
                <h4 className="seasonalGifts__cardTitle">「お料理コレクション」ポストカード</h4>
                <p className="seasonalGifts__cardText">
                  4号ごとに、編集部おすすめレシピをポストカードにしてお届け
                </p>
              </div>
            </article>
            <p className="seasonalGifts__more">
              <span className="seasonalGifts__moreLine" aria-hidden="true" />
              <span className="seasonalGifts__moreMark">and more</span>
              <span className="seasonalGifts__moreLine" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeasonalGifts;
