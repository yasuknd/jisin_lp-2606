import InView from '../InView/InView.jsx';
import './Future.scss';

const futureParagraphs = [
  '女性自身Premiumは、これからもっと充実。',
  '人気占い師（湊きよひろさん、蛯名里香さん）の連載や',
  '皇室ニュースの解説動画など、',
  '新コンテンツが続々登場予定です。',
];

const futurePlusMarks = [
  { id: 'plus-01', x: 10, y: 14, size: 20, rotate: -22, delay: 0, duration: 5.4 },
  { id: 'plus-02', x: 24, y: 68, size: 16, rotate: 18, delay: 1.2, duration: 4.8 },
  { id: 'plus-03', x: 38, y: 28, size: 24, rotate: -12, delay: 2.6, duration: 5.8 },
  { id: 'plus-04', x: 52, y: 78, size: 18, rotate: 32, delay: 0.8, duration: 4.6 },
  { id: 'plus-05', x: 66, y: 18, size: 22, rotate: -8, delay: 3.4, duration: 5.2 },
  { id: 'plus-06', x: 82, y: 52, size: 14, rotate: 26, delay: 1.8, duration: 4.4 },
  { id: 'plus-07', x: 16, y: 42, size: 18, rotate: 14, delay: 4.2, duration: 5.6 },
  { id: 'plus-08', x: 46, y: 12, size: 16, rotate: -28, delay: 2.2, duration: 4.9 },
  { id: 'plus-09', x: 72, y: 72, size: 20, rotate: -16, delay: 3.8, duration: 5.1 },
  { id: 'plus-10', x: 90, y: 30, size: 15, rotate: 20, delay: 0.4, duration: 4.7 },
  { id: 'plus-11', x: 32, y: 88, size: 17, rotate: -34, delay: 2.9, duration: 5.3 },
  { id: 'plus-12', x: 58, y: 46, size: 21, rotate: 10, delay: 1.5, duration: 5.7 },
  { id: 'plus-13', x: 6, y: 82, size: 14, rotate: 28, delay: 4.6, duration: 4.5 },
  { id: 'plus-14', x: 88, y: 86, size: 19, rotate: -20, delay: 3.1, duration: 5.5 },
];

function Future() {
  return (
    <section className="future" aria-labelledby="future-label">
      <div className="future__marks" aria-hidden="true">
        {futurePlusMarks.map((mark) => (
          <span
            key={mark.id}
            className="future__mark"
            style={{
              '--future-mark-x': `${mark.x}%`,
              '--future-mark-y': `${mark.y}%`,
              '--future-mark-size': `${mark.size}px`,
              '--future-mark-rotate': `${mark.rotate}deg`,
              '--future-mark-delay': `${mark.delay}s`,
              '--future-mark-duration': `${mark.duration}s`,
            }}
          />
        ))}
      </div>
      <div className="future__inner">
        <div className="future__grid">
          <InView className="future__copy">
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
          </InView>
        </div>
      </div>
    </section>
  );
}

export default Future;
