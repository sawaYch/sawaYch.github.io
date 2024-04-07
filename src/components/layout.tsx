import {
  FC,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useEffect,
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
import Background from './background';
import useAppMenuShortcut from '../hooks/use-appmenu-shortcut';
import useFixScrollRestoration from '../hooks/use-fix-scroll-restoration';

interface BackToTopButtonProps {
  show: boolean;
  scrollToTop: () => void;
}
const BackToTopButton = ({ show, scrollToTop }: BackToTopButtonProps) => (
  <motion.div
    variants={{
      open: {
        opacity: 1,
      },
      closed: {
        opacity: 0,
      },
    }}
    animate={show ? 'open' : 'closed'}
  >
    <ActionIcon
      id="back-to-top-button"
      onClick={() => scrollToTop()}
      className={cn(
        '!z-[60] fixed w-8 h-8 right-2 bottom-12 mb-2 rounded-full',
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
  </motion.div>
);
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
    className={cn(
      'z-40 flex flex-col items-center w-dvw flex-auto overflow-x-hidden min-h-dvh pb-[44px]',
      {
        '!touch-none !overflow-y-hidden': isOpen,
        '!pb-[100px]': isTablet,
      }
    )}
  >
    {children}
  </main>
));

const Layout: FC<PropsWithChildren<PageProps>> = ({ children, location }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const scrollToTop = useCallback((scrollBehavior?: 'smooth' | 'instant') => {
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior ?? 'smooth',
    });
  }, []);

  const toggleScrollToTopButtonVisibility = useCallback(() => {
    if (scrollYProgress.get() > 0.15) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollYProgress]);

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollToTopButtonVisibility);
    return () => {
      window.removeEventListener('scroll', toggleScrollToTopButtonVisibility);
    };
  }, [toggleScrollToTopButtonVisibility]);

  const [isOpen, toggleOpen] = useCycle(false, true);

  const toggleAppMenu = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  useAppMenuShortcut(toggleAppMenu);
  useFixScrollRestoration(location, scrollToTop);

  return (
    <>
      <SEOHead />
      <BackgroundContainer>
        <Background />
        <ContentWrapper isOpen={isOpen}>{children}</ContentWrapper>
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
