import { MotionValue, motion, useSpring } from 'framer-motion';

interface ProgressIndicatorProps {
  scrollYProgress: MotionValue<number>;
}

const ProgressIndicator = ({ scrollYProgress }: ProgressIndicatorProps) => {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="progress-bar z-[51]" style={{ scaleX }} />;
};

export default ProgressIndicator;
