import './SparkleField.scss';

function createSeededRandom(seed) {
  let state = seed >>> 0;

  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function buildSparkles(count, seed = 0) {
  const random = createSeededRandom((seed + 1) * 2654435761);
  const sparkles = [];
  const minDistance = 5.5;
  const maxAttempts = count * 40;
  let attempts = 0;

  while (sparkles.length < count && attempts < maxAttempts) {
    attempts += 1;

    const left = 3 + random() * 94;
    const top = 3 + random() * 94;
    const tooClose = sparkles.some((sparkle) => {
      const sparkleLeft = Number.parseFloat(sparkle.left);
      const sparkleTop = Number.parseFloat(sparkle.top);
      return Math.hypot(left - sparkleLeft, top - sparkleTop) < minDistance;
    });

    if (tooClose) continue;

    sparkles.push({
      left: `${left.toFixed(2)}%`,
      top: `${top.toFixed(2)}%`,
      size: 2 + Math.floor(random() * 4),
      delay: -(random() * 8),
      duration: 3.6 + random() * 3.6,
      rotate: random() * 50 - 25,
      opacity: 0.72 + random() * 0.28,
    });
  }

  while (sparkles.length < count) {
    sparkles.push({
      left: `${3 + random() * 94}%`,
      top: `${3 + random() * 94}%`,
      size: 2 + Math.floor(random() * 4),
      delay: -(random() * 8),
      duration: 3.6 + random() * 3.6,
      rotate: random() * 50 - 25,
      opacity: 0.72 + random() * 0.28,
    });
  }

  return sparkles;
}

function SparkleField({ className = '', count = 52, seed = 0, variant = 'white' }) {
  const sparkles = buildSparkles(count, seed);

  return (
    <div
      className={['sparkleField', `sparkleField--${variant}`, className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      {sparkles.map((sparkle, index) => (
        <span
          key={`sparkle-${seed}-${index}`}
          className="sparkleField__sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            '--sparkle-rotate': `${sparkle.rotate}deg`,
            '--sparkle-opacity': sparkle.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default SparkleField;
