import './SoftBlobs.scss';

function SoftBlobs({ className = '', size = 'default' }) {
  return (
    <div
      className={['softBlobs', `softBlobs--${size}`, className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <span className="softBlobs__blob softBlobs__blob--1" />
      <span className="softBlobs__blob softBlobs__blob--2" />
    </div>
  );
}

export default SoftBlobs;
