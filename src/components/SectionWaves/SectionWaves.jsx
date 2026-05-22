import { useId } from 'react';
import './SectionWaves.scss';

const WAVE_LAYERS = {
  white: [
    { y: 0, fill: 'rgb(255 255 255 / 0.7)' },
    { y: 3, fill: 'rgb(255 255 255 / 0.5)' },
    { y: 5, fill: 'rgb(255 255 255 / 0.3)' },
    { y: 7, fill: '#fff' },
  ],
  pink: [
    { y: 0, fill: 'rgb(196 58 110 / 0.7)' },
    { y: 3, fill: 'rgb(196 58 110 / 0.5)' },
    { y: 5, fill: 'rgb(196 58 110 / 0.3)' },
    { y: 7, fill: '#c43a6e' },
  ],
};

function SectionWaves({ variant = 'white', position = 'bottom' }) {
  const reactId = useId();
  const waveId = `section-wave-${reactId.replace(/:/g, '')}`;
  const layers = WAVE_LAYERS[variant] ?? WAVE_LAYERS.white;

  return (
    <div
      className={`sectionWaves sectionWaves--${position}`}
      aria-hidden="true"
    >
      <svg
        className="sectionWaves__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id={waveId}
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sectionWaves__parallax">
          {layers.map((layer) => (
            <use key={`${layer.y}-${layer.fill}`} href={`#${waveId}`} x="48" y={layer.y} fill={layer.fill} />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default SectionWaves;
