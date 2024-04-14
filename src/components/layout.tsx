import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { PageProps } from 'gatsby';
import { isIPad13, isTablet } from 'react-device-detect';
import { spotlight } from '@mantine/spotlight';
import { ActionIcon } from '@mantine/core';
import cn from 'classnames';
import { motion, useScroll } from 'framer-motion';
import { IconChevronUp } from '@tabler/icons-react';
import Powerline from './powerline';
import Footer from './footer';
import SEOHead from './seo-head';
import ProgressIndicator from './progress-indicator';
import Background from './background';
import useFixScrollRestoration from '../hooks/use-fix-scroll-restoration';
import VoidSpotlight from './void-spotlight';

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
      <IconChevronUp size={16} />
    </ActionIcon>
  </motion.div>
);

const MainContentWrapper = ({ children }: PropsWithChildren) => (
  <main
    id="main"
    className="z-[40] flex flex-col items-center w-dvw flex-auto overflow-x-hidden min-h-dvh relative"
  >
    {children}
  </main>
);

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

  const toggleAppMenu = useCallback(() => {
    spotlight.toggle();
  }, []);

  useFixScrollRestoration(location, scrollToTop);

  return (
    <>
      <SEOHead />
      <Background />
      <MainContentWrapper>{children}</MainContentWrapper>
      <ProgressIndicator
        scrollYProgress={scrollYProgress}
        location={location}
      />
      <BackToTopButton scrollToTop={scrollToTop} show={isVisible} />
      <Powerline onAppIconClick={toggleAppMenu} location={location} />
      <VoidSpotlight />
      <Footer />
    </>
  );
};

export default Layout;
