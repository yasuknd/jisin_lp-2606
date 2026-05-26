import { useInView } from '../../hooks/useInView.js';

function InView({ as: Tag = 'div', className = '', children, ...rest }) {
  const { ref, isInView } = useInView();

  return (
    <Tag
      ref={ref}
      className={[className, isInView ? 'inView' : ''].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default InView;
