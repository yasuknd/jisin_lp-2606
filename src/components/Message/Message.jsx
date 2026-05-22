import { useEffect, useRef, useState } from 'react';
import './Message.scss';

const messageParagraphs = [
  '仕事、子育て、体型や顔の変化（進化？）、夫婦関係、婚活のこと、老後や更年期のこと⋯。いつもご愛読いただきありがとうございます。',
  '女性自身は、「読者からの信頼性を大切に、読者の視点で記事を作成する！」といった情熱を持ち続け、日々コンテンツを作成しています。心も体も若々しく、これから「人生の後半戦」を楽しもうという意欲に満ちている読者を応援したい。あなたの明日に「ときめき」を届けたい。',
  'そんな思いを胸に「信頼できるニュース」と、人生を明るく楽しく生きるために必要な、「健康」「お金」という２大テーマを中心に、「使える」読み応えのある情報をこれからも『女性自身』は発信していきますので、ご期待ください。',
];

const SIGNATURE_ROLE = '女性自身編集長';
const SIGNATURE_NAME = '江口岳志';

const BASE_CHAR_DELAY_MS = 15;
const CHAR_JITTER_MS = 7;
const START_DELAY_MS = 1400;
const BLOCK_PAUSE_MS = 300;
const SIGNATURE_PAUSE_MS = 400;

const messageBlocks = [
  ...messageParagraphs.map((text, index) => ({
    id: `paragraph-${index}`,
    text,
  })),
  { id: 'role', text: SIGNATURE_ROLE },
  { id: 'name', text: SIGNATURE_NAME },
];

function getInitialDisplayed() {
  return Object.fromEntries(messageBlocks.map((block) => [block.id, '']));
}

function getCharDelay(char) {
  let delay = BASE_CHAR_DELAY_MS + Math.floor(Math.random() * CHAR_JITTER_MS);

  if ('。！？⋯'.includes(char)) {
    delay += 130;
  } else if (char === '、') {
    delay += 75;
  } else if ('」』）】'.includes(char)) {
    delay += 50;
  }

  return delay;
}

function getBlockPause(currentBlockId, nextBlockId) {
  if (currentBlockId === 'paragraph-2' && nextBlockId === 'role') {
    return SIGNATURE_PAUSE_MS;
  }

  return BLOCK_PAUSE_MS;
}

function MessageTypewriter({ hasStarted }) {
  const [displayed, setDisplayed] = useState(getInitialDisplayed);
  const [activeBlockId, setActiveBlockId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed(
        Object.fromEntries(messageBlocks.map((block) => [block.id, block.text])),
      );
      setIsComplete(true);
    }
  }, []);

  useEffect(() => {
    if (!hasStarted || isComplete) {
      return undefined;
    }

    setIsTyping(true);

    let blockIndex = 0;
    let charIndex = 0;
    let timeoutId = 0;

    const typeNext = () => {
      const currentBlock = messageBlocks[blockIndex];

      if (charIndex < currentBlock.text.length) {
        charIndex += 1;
        setActiveBlockId(currentBlock.id);
        setDisplayed((prev) => ({
          ...prev,
          [currentBlock.id]: currentBlock.text.slice(0, charIndex),
        }));

        const typedChar = currentBlock.text[charIndex - 1];
        timeoutId = window.setTimeout(typeNext, getCharDelay(typedChar));
        return;
      }

      if (blockIndex < messageBlocks.length - 1) {
        const nextBlock = messageBlocks[blockIndex + 1];
        blockIndex += 1;
        charIndex = 0;
        timeoutId = window.setTimeout(typeNext, getBlockPause(currentBlock.id, nextBlock.id));
        return;
      }

      setIsTyping(false);
      setActiveBlockId(null);
      setIsComplete(true);
    };

    timeoutId = window.setTimeout(typeNext, START_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [hasStarted, isComplete]);

  const typingClass = (blockId, baseClass) =>
    isTyping && activeBlockId === blockId && !isComplete ? `${baseClass} ${baseClass}--typing` : baseClass;

  return (
    <div aria-live={isTyping ? 'polite' : undefined}>
      <div className="message__body">
        {messageParagraphs.map((paragraph, index) => {
          const blockId = `paragraph-${index}`;

          return (
            <p key={paragraph} className={typingClass(blockId, 'message__paragraph')}>
              {displayed[blockId]}
            </p>
          );
        })}
      </div>
      <div className="message__signature">
        <p className={typingClass('role', 'message__role')}>{displayed.role}</p>
        <p className={typingClass('name', 'message__name')}>{displayed.name}</p>
      </div>
    </div>
  );
}

function Message() {
  const innerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return undefined;
    }

    const node = innerRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="message" aria-labelledby="message-heading">
      <div ref={innerRef} className={`message__inner${isInView ? ' message__inner--inView' : ''}`}>
        <h2 id="message-heading" className="message__heading">
          MESSAGE
        </h2>
        <h3 className="message__title">編集長からのコメント</h3>
        <MessageTypewriter hasStarted={isInView} />
      </div>
    </section>
  );
}

export default Message;
