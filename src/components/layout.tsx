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
import MatrixRain from './matrix-rain';
import BackgroundContainer from './background-container';
import Header from './header';
import Footer from './footer';

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
          <div className="relative z-40 flex flex-col items-center justify-center w-screen">
            {children}
            {isVisible ? (
              <Button
                onClick={scrollToTop}
                theme={buttonCustomTheme}
                className={cn('fixed w-12 h-12 right-4 bottom-8', {
                  'bottom-12': isIPad13 || isTablet,
                })}
                pill
                color="dark"
              >
                <FaChevronUp size={20} />
              </Button>
            ) : null}
          </div>
        </StyledMain>
        <Footer />
      </BackgroundContainer>
    </Flowbite>
  );
};

export default Layout;
