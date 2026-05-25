import { useEffect } from 'react';

function getParallaxOffset(rect, speed) {
  const viewportCenter = window.innerHeight * 0.5;
  const elementCenter = rect.top + rect.height * 0.5;
  return (elementCenter - viewportCenter) * speed;
}

export function useSectionParallax(ref, { bgSpeed = 0.12, contentSpeed = -0.04 } = {}) {
  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (media.matches) {
      return undefined;
    }

    let frameId = 0;

    const update = () => {
      frameId = 0;
      const rect = node.getBoundingClientRect();
      const bgY = getParallaxOffset(rect, bgSpeed);
      const contentY = getParallaxOffset(rect, contentSpeed);

      node.style.setProperty('--parallax-bg-y', `${bgY.toFixed(2)}px`);
      node.style.setProperty('--parallax-content-y', `${contentY.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      node.style.removeProperty('--parallax-bg-y');
      node.style.removeProperty('--parallax-content-y');
    };
  }, [ref, bgSpeed, contentSpeed]);
}
