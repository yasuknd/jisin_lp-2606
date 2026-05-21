import eventMember from '../../../assets/images/events/event-member-01.jpg';
import './MemberEvents.scss';

const memberEventItems = [
  'イベントやセミナーへのご招待',
  'ここでしか体験できない特典をご用意',
];

function MemberEvents({ label }) {
  return (
    <section className="memberEvents">
      <div className="memberEvents__shell">
        <header className="memberEvents__intro">
          <p className="benefits__blockLabel">{label}</p>
          <h3 className="memberEvents__title">特別なイベントへご招待</h3>
          <p className="memberEvents__description">会員限定イベントも続々企画中！</p>
        </header>
        <div className="memberEvents__panel">
          <figure className="memberEvents__visual">
            <img
              src={eventMember}
              alt="女性自身プレミアム会員限定イベントのイメージ"
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="memberEvents__caption">
              女性自身報道写真展
              <br />
              天皇ご一家『戦後80年の祈り』
            </figcaption>
          </figure>
          <div className="memberEvents__content">
            <ul className="memberEvents__list">
              {memberEventItems.map((item) => (
                <li key={item} className="memberEvents__item">
                  <p className="memberEvents__itemText">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberEvents;
