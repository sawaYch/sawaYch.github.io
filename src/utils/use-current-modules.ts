import { useEffect, useState } from 'react';

function useCurrentModules(): string | null {
  const [module, setModule] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    let modulePath = location.pathname.split('/')[1];
    if (modulePath === '') modulePath = 'home';
    setModule(modulePath);
  }, []);

  return module;
}

export default useCurrentModules;
