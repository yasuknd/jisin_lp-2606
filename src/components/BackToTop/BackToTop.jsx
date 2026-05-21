import { useEffect, useRef, useState } from 'react';
import './BackToTop.scss';

const RING_RADIUS = 22;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function getFooterCenterTop(buttonHeight) {
  const footer = document.querySelector('.footer');
  const ctaBar = document.querySelector('.bottomCta__bar');

  if (!footer || !buttonHeight) {
    return null;
  }

  const ctaHeight = ctaBar?.offsetHeight ?? 0;
  const maxScrollY = Math.max(
    0,
    document.documentElement.scrollHeight - document.documentElement.clientHeight,
  );
  const isAtBottom = window.scrollY >= maxScrollY - 2;

  if (isAtBottom) {
    const footerRect = footer.getBoundingClientRect();
    const stripBottom = footerRect.bottom - ctaHeight;
    const centerY = footerRect.top + (stripBottom - footerRect.top) / 2;

    return centerY - buttonHeight / 2;
  }

  const footerTopAtMaxScroll = footer.offsetTop - maxScrollY;
  const footerBottomAtMaxScroll = footerTopAtMaxScroll + footer.offsetHeight;
  const stripBottom = footerBottomAtMaxScroll - ctaHeight;
  const centerY = footerTopAtMaxScroll + (stripBottom - footerTopAtMaxScroll) / 2;

  return centerY - buttonHeight / 2;
}

function BackToTop() {
  const buttonRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [top, setTop] = useState(null);

  useEffect(() => {
    const update = () => {
      const { scrollY } = window;
      const scrollableHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const buttonHeight = buttonRef.current?.offsetHeight ?? 0;

      setProgress(scrollableHeight > 0 ? scrollY / scrollableHeight : 0);
      setIsVisible(scrollY > 80);
      setTop(getFooterCenterTop(buttonHeight));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    const footer = document.querySelector('.footer');
    const ctaBar = document.querySelector('.bottomCta__bar');
    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(update)
        : null;

    footer && resizeObserver?.observe(footer);
    ctaBar && resizeObserver?.observe(ctaBar);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      resizeObserver?.disconnect();
    };
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`backToTop${isVisible ? ' backToTop--visible' : ''}`}
      aria-label="ページトップへ戻る"
      style={top === null ? undefined : { top: `${top}px` }}
      onClick={handleClick}
    >
      <svg className="backToTop__ring" viewBox="0 0 52 52" aria-hidden="true">
        <circle className="backToTop__track" cx="26" cy="26" r={RING_RADIUS} />
        <circle
          className="backToTop__progress"
          cx="26"
          cy="26"
          r={RING_RADIUS}
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
        />
      </svg>
      <svg className="backToTop__icon" viewBox="0 0 14 10" aria-hidden="true">
        <path className="backToTop__iconShape" d="M7 1.5 12.5 8.5H1.5L7 1.5Z" />
      </svg>
    </button>
  );
}

export default BackToTop;
