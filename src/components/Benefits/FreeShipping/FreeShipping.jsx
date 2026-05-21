import './FreeShipping.scss';

function FreeShipping({ label }) {
  return (
    <section className="freeShipping">
      <div className="freeShipping__shell">
        <header className="freeShipping__intro">
          <p className="benefits__blockLabel">{label}</p>
          <h3 className="freeShipping__title">送料無料</h3>
          <p className="freeShipping__description">送料は光文社が負担！</p>
        </header>
        <div className="freeShipping__content">
          <div className="freeShipping__panel">
            <ul className="freeShipping__list">
              <li>
                <p className="freeShipping__description">
                  さらに特大号の差額も光文社が負担いたします。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeShipping;
