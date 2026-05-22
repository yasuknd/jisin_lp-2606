import './Future.scss';

const futureParagraphs = [
  '女性自身Premiumは、これからもっと充実。',
  '人気占い師（湊きよひろさん、蛯名里香さん）の連載や',
  '皇室ニュースの解説動画など、',
  '新コンテンツが続々登場予定です。',
];

function Future() {
  return (
    <section className="future" aria-labelledby="future-label">
      <div className="future__inner">
        <div className="future__grid">
          <div className="future__copy">
            <div className="future__heading">
              <h2 id="future-label" className="future__label">
                and MORE...
              </h2>
            </div>
            <div className="future__body">
              {futureParagraphs.map((text) => (
                <p key={text} className="future__description">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Future;
