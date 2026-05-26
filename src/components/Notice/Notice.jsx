import InView from '../InView/InView.jsx';
import './Notice.scss';

function Notice() {
  return (
    <section className="notice" aria-labelledby="notice-title">
      <div className="notice__box">
        <InView className="notice__content">
          <h2 id="notice-title" className="notice__title">
            「女性自身シンプル」の定期購読コースは終了いたしました。
          </h2>
          <p className="notice__description">
            現在ご契約中のお客様には、更新時期が近づきましたら、あらためてご案内をお送りいたします。
          </p>
        </InView>
      </div>
    </section>
  );
}

export default Notice;
