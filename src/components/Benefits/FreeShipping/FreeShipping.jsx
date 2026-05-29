import freeShippingTruck from '../../../assets/images/benefits/free-shipping-truck.png';
import './FreeShipping.scss';

function FreeShipping({ label }) {
  return (
    <section className="freeShipping">
      <div className="freeShipping__shell">
        <header className="freeShipping__intro">
          <p className="benefits__blockLabel">{label}</p>
          <h3 className="freeShipping__title">送料無料</h3>
          <figure className="freeShipping__icon">
            <img
              className="freeShipping__iconImage"
              src={freeShippingTruck}
              alt=""
              width={320}
              height={240}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </header>
        <div className="freeShipping__content">
          <ul className="freeShipping__list">
            <li className="freeShipping__item">
              <h4 className="freeShipping__itemTitle">送料は光文社が負担！</h4>
              <p className="freeShipping__itemText">
                さらに合併号特別定価との差額も光文社が負担いたします。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FreeShipping;
