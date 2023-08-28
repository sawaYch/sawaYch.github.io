import { useEffect, useState } from 'react';

function useCurrentModules(selectedPage?: string): string | null {
  const [module, setModule] = useState<string | null>(null);

  useEffect(() => {
    if (selectedPage == null) {
      // eslint-disable-next-line no-restricted-globals
      let modulePath = location.pathname.split('/')[1];
      if (modulePath === '') modulePath = 'home';
      setModule(modulePath);
    } else {
      setModule(selectedPage);
    }
  }, [selectedPage]);

  return module;
}

export default useCurrentModules;
