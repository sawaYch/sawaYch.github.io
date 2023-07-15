import {
  FC,
  PropsWithChildren,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import { Flowbite, Button } from 'flowbite-react';
import { isIPad13, isTablet } from 'react-device-detect';
import cn from 'classnames';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp';
import { FaCube } from '@react-icons/all-files/fa/FaCube';
import { motion, useCycle } from 'framer-motion';
import MatrixRain from './matrix-rain';
import BackgroundContainer from './background-container';
import Header from './header';
import Footer from './footer';
import ApplicationPane from './application-pane';

const StyledMain = tw.main`flex-auto overflow-x-hidden z-0`;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    if (ref.current != null) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [height, width]);

  const scrollToTop = useCallback(() => {
    if (ref.current == null) return;
    ref.current.scrollTo({
      top: 0,
      behavior: 'smooth',
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
    setAppFabGuard(false);
  }, []);

  const onAnimationStart = useCallback(() => {
    setAppFabGuard(true);
  }, []);

  const toggleAppMenu = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const sidebar = useMemo(
    () => ({
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
    }),
    []
  );

  return (
    <Flowbite>
      <BackgroundContainer>
        <Header />
        <StyledMain ref={ref}>
          <StaticImage
            className="!absolute top-0 left-0 opacity-bg w-screen h-screen pointer-events-none select-none z-10"
            src="../images/girl.webp"
            alt="background images"
            layout="fullWidth"
          />
          <div className="absolute top-0 left-0 z-20 w-screen h-screen pointer-events-none select-none bg-pattern" />
          <MatrixRain
            size={12}
            className="absolute top-0 left-0 z-20 !w-screen border pointer-events-none select-none h-custom opacity-40"
          />
          <div
            className={cn(
              'relative z-40 flex flex-col items-center justify-center w-screen',
              {
                '!touch-none !overflow-hidden': isOpen,
              }
            )}
          >
            {children}
            {isVisible && !isOpen ? (
              <Button
                onClick={scrollToTop}
                theme={buttonCustomTheme}
                className={cn(
                  '!z-[90] fixed w-12 h-12 right-4 bottom-20 mb-2',
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
                  '!z-[90] fixed w-12 h-12 right-4 bottom-8 transition-colors',
                  {
                    'bottom-12': isIPad13 || isTablet,
                    '!bg-dracula-dark-800': isOpen,
                    'pointer-events-none !border !border-dracula-purple/80':
                      appFabGuard,
                  }
                )}
                pill
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
                className={cn(
                  '!z-[60] fixed top-0 bottom-0 left-0 w-screen h-screen py-12 bg-dracula-darker/80 backdrop-blur-sm'
                )}
                variants={sidebar}
                onAnimationComplete={onAnimationComplete}
                onAnimationStart={onAnimationStart}
              >
                <ApplicationPane />
              </motion.div>
            </motion.nav>
          </div>
        </StyledMain>
        <Footer />
      </BackgroundContainer>
    </Flowbite>
  );
};

export default Layout;
