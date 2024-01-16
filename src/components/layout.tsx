import {
  FC,
  PropsWithChildren,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { PageProps } from 'gatsby';
import { isIPad13, isTablet, isMobile, isIOS } from 'react-device-detect';
import AnimatedCursor from 'react-animated-cursor';
import { ActionIcon } from '@mantine/core';
import cn from 'classnames';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp';
import { motion, useCycle, useScroll } from 'framer-motion';
import { useKeyUp } from '@react-hooks-library/core';
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundContainer from './background-container';
import Powerline from './powerline';
import Footer from './footer';
import ApplicationPane from './application-pane';
import SEOHead from './seo-head';
import ProgressIndicator from './progress-indicator';

const Layout: FC<PropsWithChildren<PageProps>> = ({ children, location }) => {
  const ref = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current != null) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [height, width]);

  const scrollToTop = useCallback((scrollBehavior?: 'smooth' | 'instant') => {
    if (ref.current == null) return;
    ref.current.scrollTo({
      top: 0,
      behavior: scrollBehavior ?? 'smooth',
    });
  }, []);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (ref.current == null) return;

      if (ref.current.scrollTop > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    let copyRef: RefObject<HTMLElement> | null = null;
    if (ref.current != null) {
      copyRef = ref;
      ref.current.addEventListener('scroll', toggleVisibility);
    }
    return () => {
      if (copyRef?.current != null) {
        copyRef.current.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);

  const [isOpen, toggleOpen] = useCycle(false, true);

  const onAnimationComplete = useCallback(() => {
    const applicationPaneOverlay = document.getElementById(
      'application-pane-overlay'
    );
    if (applicationPaneOverlay && !isOpen) {
      applicationPaneOverlay.classList.remove('!fixed');
      applicationPaneOverlay.classList.add('!hidden');
    }
  }, [isOpen]);

  const onAnimationStart = useCallback(() => {
    const applicationPaneOverlay = document.getElementById(
      'application-pane-overlay'
    );
    if (applicationPaneOverlay && isOpen) {
      applicationPaneOverlay.classList.remove('!hidden');
      applicationPaneOverlay.classList.add('!fixed');
    }
  }, [isOpen]);

  useEffect(() => {
    const applicationPaneOverlay = document.getElementById(
      'application-pane-overlay'
    );
    if (applicationPaneOverlay) {
      applicationPaneOverlay.classList.add('!hidden');
    }
  }, []);

  const toggleAppMenu = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const sidebar = useMemo(
    () => ({
      open: () => ({
        opacity: 1,
        y: 0,
      }),
      closed: {
        opacity: 0,
        y: 100,
      },
    }),
    []
  );

  const { scrollYProgress } = useScroll({ container: ref, target: ref });

  const handlePageSelected = useCallback(() => {
    toggleAppMenu();
  }, [toggleAppMenu]);

  const enableProgressbar = useMemo(() => {
    if (location?.href?.includes('blog/')) return true;
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.href]);

  const currentPage = useMemo(
    () => location.pathname.split('/')?.[1] ?? undefined,
    [location.pathname]
  );

  // Workaround: disable scroll restoration
  useEffect(() => {
    if (location.pathname.split('/')?.[1].includes('post')) return;
    scrollToTop('instant');
  }, [location.pathname, scrollToTop]);

  useKeyUp(
    'ControlLeft',
    () => {
      toggleAppMenu();
    },
    { code: true }
  );

  return (
    <>
      <SEOHead />
      <BackgroundContainer>
        {isMobile ? null : (
          <AnimatedCursor
            color="139,233,253"
            innerSize={10}
            outerSize={40}
            innerScale={1}
            outerScale={2}
            outerAlpha={1}
            innerStyle={{
              backgroundColor: 'rgb(255, 255, 255)',
              mixBlendMode: 'exclusion',
              zIndex: '999',
            }}
            outerStyle={{
              mixBlendMode: 'exclusion',
            }}
          />
        )}
        <main
          id="main"
          ref={ref}
          className={cn('z-0 flex-auto overflow-x-hidden', {
            'overflow-y-hidden': isOpen,
          })}
        >
          <StaticImage
            className={cn(
              '!fixed top-0 left-0 bottom-0 right-0 opacity-bg pointer-events-none select-none z-20 w-screen',
              {
                'bottom-0 right-0': isMobile,
              }
            )}
            src="../images/girl.png"
            alt="background images"
            layout="fullWidth"
          />
          <div
            id="main-container"
            className={cn(
              'relative z-40 flex flex-col items-center justify-center w-screen',
              {
                '!touch-none !overflow-hidden': isOpen,
              }
            )}
          >
            {children}
            {enableProgressbar ? (
              <ProgressIndicator scrollYProgress={scrollYProgress} />
            ) : null}
            {isVisible && !isOpen ? (
              <ActionIcon
                onClick={() => scrollToTop()}
                className={cn(
                  '!z-[59] fixed w-8 h-8 right-4 bottom-12 mb-2 rounded-full',
                  {
                    'bottom-24': isIPad13 || isTablet,
                  }
                )}
                color="gray"
                variant="gradient"
                gradient={{ from: '#bd93f9', to: '#ff79c6', deg: 270 }}
              >
                <FaChevronUp size={12} />
              </ActionIcon>
            ) : null}
            <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
              <motion.div
                id="application-pane-overlay"
                className={cn(
                  '!z-[58] !overflow-y-auto bottom-0 top-5 w-screen py-12 left-0 bg-dracula-darker rounded-2xl backdrop-blur-sm',
                  {
                    'pb-24': !isIOS,
                  }
                )}
                variants={sidebar}
                onAnimationComplete={onAnimationComplete}
                onAnimationStart={onAnimationStart}
              >
                <ApplicationPane
                  onPageSelected={handlePageSelected}
                  currentPage={currentPage}
                />
              </motion.div>
            </motion.nav>
          </div>
        </main>
        <Powerline onAppIconClick={toggleAppMenu} />
        <Footer />
      </BackgroundContainer>
    </>
  );
};

export default Layout;
