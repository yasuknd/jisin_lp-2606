import { useEffect, useState } from 'react';

export function useScrollPosition({ threshold = 48 } = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const update = () => {
      const { scrollY } = window;
      const maxScrollY = Math.max(
        0,
        document.documentElement.scrollHeight - document.documentElement.clientHeight,
      );

      setIsScrolled(scrollY > threshold);
      setIsAtBottom(scrollY >= maxScrollY - 2);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [threshold]);

  return { isScrolled, isAtBottom };
}
