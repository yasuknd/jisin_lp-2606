import { useEffect, useRef } from 'react';
import HeroSpeechBubble from '../Hero/HeroSpeechBubble.jsx';
import { phoneMockImages as defaultImages } from './phoneMockImages.js';
import './PhoneMock.scss';

function PhoneMock({ images = defaultImages, showSpeechBubble = false, className = '' }) {
  const phoneStackRef = useRef(null);
  const phoneCardRefs = useRef([]);

  useEffect(() => {
    const stack = phoneStackRef.current;
    const centerCard = phoneCardRefs.current[1];

    if (!stack || !centerCard) {
      return undefined;
    }

    const setInitialScroll = () => {
      const viewportHeight = stack.clientHeight;
      const cardTop = centerCard.offsetTop;
      const cardHeight = centerCard.offsetHeight;
      stack.scrollTop = cardTop - (viewportHeight - cardHeight) / 2;
    };

    const stackImages = stack.querySelectorAll('.phoneMock__img');
    let loadedCount = 0;

    const handleReady = () => {
      loadedCount += 1;
      if (loadedCount >= stackImages.length) {
        setInitialScroll();
      }
    };

    if (stackImages.length === 0) {
      setInitialScroll();
      return undefined;
    }

    stackImages.forEach((image) => {
      if (image.complete) {
        handleReady();
      } else {
        image.addEventListener('load', handleReady);
        image.addEventListener('error', handleReady);
      }
    });

    setInitialScroll();
    window.addEventListener('resize', setInitialScroll);

    return () => {
      window.removeEventListener('resize', setInitialScroll);
      stackImages.forEach((image) => {
        image.removeEventListener('load', handleReady);
        image.removeEventListener('error', handleReady);
      });
    };
  }, [images]);

  return (
    <div className={`phoneMock${className ? ` ${className}` : ''}`}>
      <div className="phoneMock__visual">
        <div className="phoneMock__frame">
          <div className="phoneMock__bezel">
            <span className="phoneMock__notch" />
            <div className="phoneMock__screen">
              <div className="phoneMock__stack" ref={phoneStackRef}>
                {images.map((item, index) => (
                  <div
                    key={item.id}
                    className="phoneMock__card"
                    ref={(node) => {
                      phoneCardRefs.current[index] = node;
                    }}
                  >
                    <img
                      className="phoneMock__img"
                      src={item.src}
                      alt=""
                      width={item.width}
                      height={item.height}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {showSpeechBubble ? <HeroSpeechBubble /> : null}
      </div>
    </div>
  );
}

export default PhoneMock;
