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
import { StaticImage } from 'gatsby-plugin-image';
import { Flowbite, Button } from 'flowbite-react';
import { isIPad13, isTablet, isMobile, isIOS } from 'react-device-detect';
import AnimatedCursor from 'react-animated-cursor';
import cn from 'classnames';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp';
import { FaCube } from '@react-icons/all-files/fa/FaCube';
import { motion, useCycle, useScroll } from 'framer-motion';
// import MatrixRain from './matrix-rain';
import { useKeyUp } from '@react-hooks-library/core';
import BackgroundContainer from './background-container';
import Header from './header';
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

  const buttonCustomTheme = useMemo(
    () => ({
      base: 'group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 focus:outline-none bg-dracula-dark',
    }),
    []
  );

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [appFabGuard, setAppFabGuard] = useState(false);

  const onAnimationComplete = useCallback(() => {
    const applicationPaneOverlay = document.getElementById(
      'application-pane-overlay'
    );
    if (applicationPaneOverlay && !isOpen) {
      applicationPaneOverlay.classList.remove('!fixed');
      applicationPaneOverlay.classList.add('!hidden');
    }
    setAppFabGuard(false);
  }, [isOpen]);

  const onAnimationStart = useCallback(() => {
    const applicationPaneOverlay = document.getElementById(
      'application-pane-overlay'
    );
    if (applicationPaneOverlay && isOpen) {
      applicationPaneOverlay.classList.remove('!hidden');
      applicationPaneOverlay.classList.add('!fixed');
    }
    setAppFabGuard(true);
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
    () =>
      isMobile
        ? {
            open: () => ({
              opacity: 1,
            }),
            closed: {
              opacity: 0,
            },
          }
        : {
            open: () => ({
              clipPath: `circle(250vw at 100% 100%)`,
              transition: {
                type: 'linear',
                stiffness: 100,
                restDelta: 2,
              },
            }),
            closed: {
              clipPath: `circle(0vw at 100% 100%)`,
              transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
            },
          },
    []
  );

  const { scrollYProgress } = useScroll({ container: ref, target: ref });

  const handlePageSelected = useCallback(() => {
    toggleAppMenu();
  }, [toggleAppMenu]);

  const enableProgressbar = useMemo(() => {
    if (location?.href?.includes('post')) return true;
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
    'Space',
    () => {
      toggleAppMenu();
    },
    { code: true }
  );

  return (
    <Flowbite>
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
        <Header />
        <main
          id="main"
          ref={ref}
          className={cn('z-0 flex-auto overflow-x-hidden', {
            'overflow-y-hidden': isOpen,
          })}
        >
          <StaticImage
            className="!fixed top-0 left-0 opacity-bg w-screen h-screen pointer-events-none select-none z-20"
            src="../images/girl.png"
            alt="background images"
            layout="fullWidth"
          />
          {/* NOTE: disable bg pattern */}
          {/* <div className="fixed top-0 left-0 z-20 w-screen h-screen pointer-events-none select-none bg-pattern" /> */}
          {/* <MatrixRain
            size={14}
            className="fixed top-0 left-0 z-10 !w-screen border pointer-events-none select-none h-custom opacity-20"
          /> */}
          <div className="fixed top-0 w-screen h-1/2 top-shine" />
          <div className="fixed bottom-0 w-screen h-1/2 bottom-shine" />
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
              <Button
                onClick={() => scrollToTop()}
                theme={buttonCustomTheme}
                className={cn(
                  '!z-[59] fixed w-12 h-12 right-4 bottom-20 mb-2',
                  {
                    'bottom-24': isIPad13 || isTablet,
                  }
                )}
                pill
                color="dark"
              >
                <FaChevronUp size={20} />
              </Button>
            ) : null}
            <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
              <Button
                onClick={toggleAppMenu}
                theme={buttonCustomTheme}
                className={cn(
                  '!z-[59] fixed w-12 h-12 right-4 bottom-8 transition-colors',
                  {
                    'bottom-12': isIPad13 || isTablet,
                    '!bg-dracula-dark-800': isOpen,
                    'pointer-events-none !border !border-dracula-purple/80':
                      appFabGuard,
                  }
                )}
                pill
                aria-label="application menu FAB button"
                color="dark"
              >
                <svg width="0" height="0">
                  <linearGradient
                    id="dracula-gradient"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                  >
                    <stop stopColor="#ff79c6" offset="0%" />
                    <stop stopColor="#bd93f9" offset="100%" />
                  </linearGradient>
                </svg>
                <FaCube size={20} style={{ fill: 'url(#dracula-gradient)' }} />
              </Button>
              <motion.div
                id="application-pane-overlay"
                className={cn(
                  '!z-[58] !overflow-y-auto top-[1.75rem] bottom-0 left-0 w-screen py-12 bg-dracula-darker backdrop-blur-sm',
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
        <Footer />
      </BackgroundContainer>
    </Flowbite>
  );
};

export default Layout;
