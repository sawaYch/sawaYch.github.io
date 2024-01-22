import {
  useRef,
  useState,
  useLayoutEffect,
  PropsWithChildren,
  useCallback,
} from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import { useTransform, useSpring, motion, useScroll } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import useFixScrollRestoration from '../hooks/use-fix-scroll-restoration';

interface SmoothScrollProps {
  location: any;
}

const SmoothScroll = ({
  location,
  children,
}: PropsWithChildren<SmoothScrollProps>) => {
  const scrollRef = useRef<HTMLElement>(null);
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

  const scrollToTop = useCallback(
    (scrollBehavior?: 'smooth' | 'instant') => {
      if (scrollRef.current == null) return;
      scrollRef.current.scrollTo({
        top: 0,
        behavior: scrollBehavior ?? 'smooth',
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [scrollRef.current]
  );

  useFixScrollRestoration(location, scrollToTop);

  return isMobile ? (
    <main className="flex flex-col items-center overflow-hidden width-lvh will-change-transform min-lvh">
      {children}
    </main>
  ) : (
    <>
      <motion.main
        ref={scrollRef}
        style={{ y: spring }}
        className="fixed top-0 left-0 right-0 flex flex-col items-center overflow-hidden width-lvh will-change-transform min-lvh"
      >
        {children}
      </motion.main>
      <div style={{ height: pageHeight, minHeight: '100lvh' }} />{' '}
    </>
  );
};

export default SmoothScroll;
