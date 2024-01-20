import { useKeyUp } from '@react-hooks-library/core';

const useAppMenuShortcut = (toggleAppMenu: () => void) => {
  useKeyUp(
    ['Space'],
    (e) => {
      e.preventDefault();
      toggleAppMenu();
    },
    { code: true }
  );
};

export default useAppMenuShortcut;
