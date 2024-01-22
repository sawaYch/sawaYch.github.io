import { useCallback } from 'react';

const useAnimationInterval = () => {
  const mySetInterval = useCallback(
    (callback: (_timer: number) => void, interval: number) => {
      let timer;
      let startTime = Date.now();
      let endTime = startTime;
      const loop = () => {
        timer = requestAnimationFrame(loop);
        endTime = Date.now();
        if (endTime - startTime >= interval) {
          startTime = Date.now();
          callback(timer);
        }
      };
      timer = requestAnimationFrame(loop);
      return timer;
    },
    []
  );

  return mySetInterval;
};

export default useAnimationInterval;
