import { useCallback } from 'react';

const useAnimationInterval = () => {
  const mySetInterval = useCallback(
    (callback: (_timer: number) => void, interval: number) => {
      let timer;
      const { now } = Date;
      let startTime = now();
      let endTime = startTime;
      const loop = () => {
        timer = window.requestAnimationFrame(loop);
        endTime = now();
        if (endTime - startTime >= interval) {
          startTime = now();
          callback(timer);
        }
      };
      timer = window.requestAnimationFrame(loop);
      return timer;
    },
    []
  );

  return mySetInterval;
};

export default useAnimationInterval;
