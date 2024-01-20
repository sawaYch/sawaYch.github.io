import { useRef, useState, useLayoutEffect, PropsWithChildren } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import { useTransform, useSpring, motion, useScroll } from 'framer-motion';

const SmoothScroll = ({ children }: PropsWithChildren) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setPageHeight(entries[0].contentRect.height);
    });
    if (scrollRef?.current) {
      resizeObserver.observe(scrollRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [scrollRef]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { mass: 0.1, stiffness: 100, damping: 20, restDelta: 0.001 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.main
        ref={scrollRef}
        style={{ y: spring }}
        className="flex flex-col items-center scroll-container"
      >
        {children}
      </motion.main>
      <div style={{ height: pageHeight }} className="bg-dracula-darker" />
    </>
  );
};

export default SmoothScroll;
