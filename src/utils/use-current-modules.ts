import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { globalHistory } from '@reach/router';

function useCurrentModules(selectedPage?: string): string | null {
  const [module, setModule] = useState<string | null>(null);
  const [routeChange, setRouteChange] = useState(false);
  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === 'PUSH') setRouteChange((prev) => !prev);
      }),
    [setRouteChange]
  );

  useEffect(() => {
    if (selectedPage == null) {
      // eslint-disable-next-line no-restricted-globals
      let modulePath = location.pathname.split('/')[1];
      if (modulePath === '') modulePath = 'home';
      setModule(modulePath);
    } else {
      setModule(selectedPage);
    }
  }, [selectedPage, routeChange]);

  return module;
}

export default useCurrentModules;
