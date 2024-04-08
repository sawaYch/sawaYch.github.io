import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { isMobile } from 'react-device-detect';

/**
 * FIXME: temporarily deprecated this component
 * The starting position of the cursor always on top left which cause wried UX
 */
const VoidAnimatedCursor = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return isMobile
    ? null
    : mounted && (
        <AnimatedCursor
          color="139,233,253"
          innerSize={10}
          outerSize={40}
          innerScale={1}
          outerScale={2}
          outerAlpha={1}
          innerStyle={{
            backgroundColor: 'rgb(255, 255, 255)',
            mixBlendMode: 'exclusion',
            zIndex: '999',
          }}
          outerStyle={{
            mixBlendMode: 'exclusion',
          }}
        />
      );
};

export default VoidAnimatedCursor;
