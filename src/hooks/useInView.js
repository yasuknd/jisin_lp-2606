import { useLayoutEffect, useRef, useState } from 'react';

const DEFAULT_OPTIONS = {
  threshold: 0.15,
  rootMargin: '0px 0px -8% 0px',
  once: true,
};

function parseRootMarginValue(value) {
  const match = value.match(/^(-?\d+(?:\.\d+)?)(px|%)$/);
  if (!match) {
    return 0;
  }

  const amount = parseFloat(match[1]);
  return match[2] === '%' ? amount / 100 : amount;
}

function resolveRootMargin(margin, viewportWidth, viewportHeight) {
  const parts = margin.trim().split(/\s+/);
  const values =
    parts.length === 1
      ? [parts[0], parts[0], parts[0], parts[0]]
      : parts.length === 2
        ? [parts[0], parts[1], parts[0], parts[1]]
        : parts.length === 4
          ? parts
          : ['0px', '0px', '0px', '0px'];

  const [top, right, bottom, left] = values.map(parseRootMarginValue);

  return {
    top: top < 1 ? top * viewportHeight : top,
    right: right < 1 ? right * viewportWidth : right,
    bottom: bottom < 1 ? bottom * viewportHeight : bottom,
    left: left < 1 ? left * viewportWidth : left,
  };
}

function isNodeIntersecting(node, { threshold, rootMargin }) {
  const rect = node.getBoundingClientRect();
  if (rect.height === 0) {
    return false;
  }

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const margin = resolveRootMargin(rootMargin, viewportWidth, viewportHeight);

  const rootTop = 0 - margin.top;
  const rootLeft = 0 - margin.left;
  const rootBottom = viewportHeight + margin.bottom;
  const rootRight = viewportWidth + margin.right;

  const intersectionTop = Math.max(rect.top, rootTop);
  const intersectionLeft = Math.max(rect.left, rootLeft);
  const intersectionBottom = Math.min(rect.bottom, rootBottom);
  const intersectionRight = Math.min(rect.right, rootRight);

  const intersectionHeight = Math.max(0, intersectionBottom - intersectionTop);
  const intersectionWidth = Math.max(0, intersectionRight - intersectionLeft);
  const intersectionArea = intersectionHeight * intersectionWidth;
  const targetArea = rect.height * rect.width;

  if (targetArea === 0) {
    return false;
  }

  return intersectionArea / targetArea >= threshold;
}

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { threshold, rootMargin, once } = { ...DEFAULT_OPTIONS, ...options };

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observerOptions = { threshold, rootMargin };

    const reveal = () => {
      setIsInView(true);
      if (once) {
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        reveal();
      }
    }, observerOptions);

    if (isNodeIntersecting(node, observerOptions)) {
      reveal();
      return undefined;
    }

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
