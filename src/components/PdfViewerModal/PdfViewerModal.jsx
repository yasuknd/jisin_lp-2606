import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './PdfViewerModal.scss';

const PDF_VIEWER_MODAL_DURATION_MS = 560;
const PDF_FRAME_REVEAL_FALLBACK_MS = 2500;

function getPdfViewerSrc(src) {
  const params = 'toolbar=0&navpanes=0&scrollbar=0&statusbar=0&view=FitH';
  return src.includes('#') ? `${src}&${params}` : `${src}#${params}`;
}

function PdfViewerModal({ isOpen, onClose, src, title }) {
  const titleId = useId();
  const closeButtonRef = useRef(null);
  const frameRevealFallbackRef = useRef(null);
  const viewerSrc = useMemo(() => (src ? getPdfViewerSrc(src) : ''), [src]);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoadPdf, setShouldLoadPdf] = useState(false);
  const [isFrameRevealed, setIsFrameRevealed] = useState(false);

  const revealFrame = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsFrameRevealed(true);
      });
    });
  };

  useEffect(() => {
    if (!isOpen || !src) {
      return undefined;
    }

    setIsMounted(true);
    setShouldLoadPdf(false);
    setIsFrameRevealed(false);

    const frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isOpen, src]);

  useEffect(() => {
    if (isOpen || !isMounted) {
      return undefined;
    }

    setShouldLoadPdf(false);
    setIsFrameRevealed(false);
    setIsVisible(false);

    const timerId = window.setTimeout(() => {
      setIsMounted(false);
    }, PDF_VIEWER_MODAL_DURATION_MS);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [isOpen, isMounted]);

  useEffect(() => {
    if (!isMounted) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setShouldLoadPdf(true);
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      setShouldLoadPdf(true);
    }, PDF_VIEWER_MODAL_DURATION_MS);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!shouldLoadPdf || isFrameRevealed) {
      return undefined;
    }

    frameRevealFallbackRef.current = window.setTimeout(() => {
      revealFrame();
    }, PDF_FRAME_REVEAL_FALLBACK_MS);

    return () => {
      if (frameRevealFallbackRef.current) {
        window.clearTimeout(frameRevealFallbackRef.current);
      }
    };
  }, [shouldLoadPdf, isFrameRevealed]);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onClose]);

  const handleFrameLoad = () => {
    if (frameRevealFallbackRef.current) {
      window.clearTimeout(frameRevealFallbackRef.current);
      frameRevealFallbackRef.current = null;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsFrameRevealed(true);
      return;
    }

    revealFrame();
  };

  if (!isMounted || !src) {
    return null;
  }

  const modalClassName = [
    'pdfViewerModal',
    isVisible && 'pdfViewerModal--visible',
    isFrameRevealed && 'pdfViewerModal--frameRevealed',
  ]
    .filter(Boolean)
    .join(' ');

  return createPortal(
    <div className={modalClassName} role="presentation">
      <button
        type="button"
        className="pdfViewerModal__backdrop"
        aria-label="閉じる"
        onClick={onClose}
      />
      <div
        className="pdfViewerModal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="pdfViewerModal__header">
          <h2 id={titleId} className="pdfViewerModal__title">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            className="pdfViewerModal__close"
            onClick={onClose}
          >
            閉じる
          </button>
        </div>
        <div className="pdfViewerModal__body">
          <div className="pdfViewerModal__placeholder" aria-hidden="true" />
          {shouldLoadPdf ? (
            <iframe
              className="pdfViewerModal__frame"
              src={viewerSrc}
              title={title}
              onLoad={handleFrameLoad}
            />
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default PdfViewerModal;
