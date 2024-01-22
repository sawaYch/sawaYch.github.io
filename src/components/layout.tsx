import {
  FC,
  PropsWithChildren,
  RefObject,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { PageProps } from 'gatsby';
import { isIPad13, isTablet, isIOS } from 'react-device-detect';
import { ActionIcon } from '@mantine/core';
import cn from 'classnames';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp';
import { motion, useCycle, useScroll } from 'framer-motion';
import BackgroundContainer from './background-container';
import Powerline from './powerline';
import Footer from './footer';
import ApplicationPane from './application-pane';
import SEOHead from './seo-head';
import ProgressIndicator from './progress-indicator';
import VoidAnimatedCursor from './void-animated-cursor';
import Background from './background';
import useAppMenuShortcut from '../hooks/use-appmenu-shortcut';
import useFixScrollRestoration from '../hooks/use-fix-scroll-restoration';

// isVisible && !isOpen
interface BackToTopButtonProps {
  show: boolean;
  scrollToTop: () => void;
}
const BackToTopButton = ({ show, scrollToTop }: BackToTopButtonProps) =>
  show ? (
    <ActionIcon
      onClick={() => scrollToTop()}
      className={cn(
        '!z-[59] fixed w-8 h-8 right-4 bottom-12 mb-2 rounded-full',
        {
          'bottom-[4.5rem]': isIPad13 || isTablet,
        }
      )}
      color="gray"
      variant="gradient"
      gradient={{ from: '#bd93f9', to: '#ff79c6', deg: 270 }}
    >
      <FaChevronUp size={12} />
    </ActionIcon>
  ) : null;

interface ApplicationMenuProps {
  isOpen: boolean;
  location: any;
  toggleAppMenu: () => void;
}

const ApplicationMenu = ({
  isOpen,
  location,
  toggleAppMenu,
}: ApplicationMenuProps) => {
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

  const handlePageSelected = useCallback(() => {
    toggleAppMenu();
  }, [toggleAppMenu]);

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <motion.div
        id="application-pane-overlay"
        className={cn(
          '!z-[58] !overflow-y-auto bottom-0 top-0 w-screen py-12 left-0 bg-dracula-darker',
          {
            'pb-24': !isIOS,
          }
        )}
        variants={{
          open: () => ({
            opacity: 1,
            y: 0,
            transition: {
              damping: 5,
            },
          }),
          closed: {
            opacity: 0,
            y: 100,
          },
        }}
        onAnimationComplete={onAnimationComplete}
        onAnimationStart={onAnimationStart}
      >
        <ApplicationPane
          onPageSelected={handlePageSelected}
          location={location}
        />
      </motion.div>
    </motion.nav>
  );
};

interface ContentWrapperProps {
  isOpen: boolean;
}
const ContentWrapper = forwardRef<
  HTMLElement,
  PropsWithChildren<ContentWrapperProps>
>(({ isOpen, children }: PropsWithChildren<ContentWrapperProps>, ref) => (
  <main
    id="main"
    ref={ref}
    className={cn('z-0 flex-auto overflow-x-hidden', {
      'overflow-y-hidden': isOpen,
    })}
  >
    <div
      id="main-container"
      className={cn(
        'relative z-40 flex flex-col items-center justify-center w-lvw mb-[44px] ',
        {
          '!touch-none !overflow-hidden': isOpen,
        }
      )}
    >
      {children}
    </div>
  </main>
));

const Layout: FC<PropsWithChildren<PageProps>> = ({ children, location }) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const toggleAppMenu = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  useAppMenuShortcut(toggleAppMenu);
  useFixScrollRestoration(location, scrollToTop);

  const { scrollYProgress } = useScroll({ container: ref, target: ref });

  return (
    <>
      <SEOHead />
      <BackgroundContainer>
        <VoidAnimatedCursor />
        <Background />
        <ContentWrapper ref={ref} isOpen={isOpen}>
          {children}
        </ContentWrapper>
        <ProgressIndicator
          scrollYProgress={scrollYProgress}
          location={location}
        />
        <BackToTopButton
          scrollToTop={scrollToTop}
          show={isVisible && !isOpen}
        />
        <ApplicationMenu
          isOpen={isOpen}
          location={location}
          toggleAppMenu={toggleAppMenu}
        />
        <Powerline onAppIconClick={toggleAppMenu} location={location} />
        <Footer />
      </BackgroundContainer>
    </>
  );
};

export default Layout;
