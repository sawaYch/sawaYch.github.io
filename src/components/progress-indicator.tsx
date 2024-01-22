import { MotionValue, motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import cn from 'classnames';

interface ProgressIndicatorProps {
  scrollYProgress: MotionValue<number>;
  disable?: boolean;
}

const ProgressIndicator = ({
  scrollYProgress,
  disable,
}: ProgressIndicatorProps) => {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [hasScrollEventFired, setHasScrollEventFired] = useState(false);

  useEffect(() => {
    const styledMain = document.getElementById('main');
    if (styledMain == null) return;
    styledMain.addEventListener('scroll', () => setHasScrollEventFired(true));
  }, []);

  if (disable) {
    return null;
  }

  return (
    <motion.div
      className={cn('progress-bar z-[51]', {
        invisible: !hasScrollEventFired,
        visible: hasScrollEventFired,
      })}
      style={{ scaleX }}
    />
  );
};

export default ProgressIndicator;
