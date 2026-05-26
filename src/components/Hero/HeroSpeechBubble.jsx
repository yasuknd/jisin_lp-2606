import bubbleBodySvg from '../../assets/images/hero/hero-speech-bubble-body.svg?raw';
import './HeroSpeechBubble.scss';

function extractPath(svgSource) {
  const match = svgSource.match(/d="([^"]+)"/);
  return match ? match[1] : '';
}

const bubbleBodyPath = extractPath(bubbleBodySvg);

function HeroSpeechBubble() {
  return (
    <div className="hero__speechBubble">
      <svg
        className="hero__speechBubbleSvg"
        viewBox="42 10 172 138"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="PC・スマホでも読める！"
      >
        <defs>
          <clipPath id="heroSpeechBubbleClip">
            <path d={bubbleBodyPath} />
          </clipPath>
        </defs>
        <g clipPath="url(#heroSpeechBubbleClip)">
          <foreignObject x="42" y="10" width="172" height="138">
            <div xmlns="http://www.w3.org/1999/xhtml" className="hero__speechBubbleFrost" />
          </foreignObject>
        </g>
        <g className="hero__speechBubbleShape" aria-hidden="true">
          <path className="hero__speechBubbleOutline" d={bubbleBodyPath} />
          <path className="hero__speechBubbleBorder" d={bubbleBodyPath} />
        </g>
        <text className="hero__speechBubbleText" x="125" y="82">
          <tspan x="125" dy="0">
            PC・スマホでも
          </tspan>
          <tspan x="125" dy="1.4em">
            読める！
          </tspan>
        </text>
      </svg>
    </div>
  );
}

export default HeroSpeechBubble;
