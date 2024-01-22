import { MotionValue, motion, useSpring } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';

interface ProgressIndicatorProps {
  scrollYProgress: MotionValue<number>;
  location: any;
}

const ProgressIndicator = ({
  scrollYProgress,
  location,
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

  const enableProgressbar = useMemo(() => {
    if (location?.href?.includes('blog/')) return true;
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.href]);

  return enableProgressbar ? (
    <motion.div
      className={cn('progress-bar z-[51]', {
        invisible: !hasScrollEventFired,
        visible: hasScrollEventFired,
      })}
      style={{ scaleX }}
    />
  ) : null;
};

export default ProgressIndicator;
