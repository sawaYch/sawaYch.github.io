import { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { globalHistory } from '@reach/router';

function useCurrentModules(
  location: any,
  selectedPage?: string
): string | null {
  const [routeChange, setRouteChange] = useState(false);
  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === 'PUSH') setRouteChange((prev) => !prev);
      }),
    [setRouteChange]
  );

  const module = useMemo(() => {
    if (selectedPage == null || selectedPage.length === 0) {
      let modulePath: string = location?.pathname?.split('/')[1];
      if (modulePath == null || modulePath === '' || modulePath?.length === 0)
        modulePath = 'home';
      return modulePath;
    }

    return selectedPage;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.pathname, selectedPage, routeChange]);

  return module;
}

export default useCurrentModules;
