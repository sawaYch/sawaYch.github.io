import { useEffect } from 'react';

const useFixScrollRestoration = (
  location: typeof window.document.location,
  scrollToTop: (scrollBehavior?: 'smooth' | 'instant') => void
) => {
  // Workaround: disable scroll restoration
  useEffect(() => {
    if (location.pathname.split('/')?.[1].includes('post')) return;
    scrollToTop('instant');
  }, [location.pathname, scrollToTop]);
};

export default useFixScrollRestoration;
