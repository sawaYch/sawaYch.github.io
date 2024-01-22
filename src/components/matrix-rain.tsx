import { useRef, useEffect, useMemo, useCallback } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import PaneContainer from './pane-container';
import useAnimationInterval from '../hooks/use-animation-Interval';

interface MatrixRainProps {
  matrixKey?: string;
  className?: string;
  size?: number;
}

const MatrixRain = ({
  matrixKey = 'matrix',
  className,
  size = 16,
}: MatrixRainProps) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const {
    width: canvasWidth,
    height: canvasHeight,
    ref: containerRef,
  } = useResizeDetector();
  const keyName = useMemo(() => `mrl-${matrixKey}`, [matrixKey]);

  const katakana =
    'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnobqrstuvwxyz';
  const number = '0123456789';
  const alphabet = katakana + latin + number;

  const columns = canvasWidth ?? 0 / size;
  const rainDrops: number[] = useMemo(() => [], []);

  const initCanvas = useCallback(() => {
    const canvas = ref.current;
    if (canvas == null) return;
    canvas.width = canvasWidth ?? 0;
    canvas.height = canvasHeight ?? 0;
    for (let x = 0; x < columns; x += 1) {
      rainDrops[x] = 255;
    }
  }, [canvasHeight, canvasWidth, columns, rainDrops]);

  const setInterval = useAnimationInterval();

  const requestRef = useRef<number>();
  const fpsCounter = useRef<number>(0);

  const renderMatrix = useCallback(
    (_t: number) => {
      if (fpsCounter.current % 2 === 0) {
        const canvas = ref.current;
        if (canvas == null) {
          return;
        }
        const context = canvas.getContext('2d');
        if (context == null) {
          return;
        }

        context.fillStyle = 'rgba(40, 42, 54, 0.08)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#8be9fd';
        context.font = `${size}px kuGraph`;

        const updateRainDrop = rainDrops;

        for (let i = 0; i < rainDrops.length; i += 1) {
          const text = alphabet.charAt(
            Math.floor(Math.random() * alphabet.length)
          );
          context.fillText(text, i * size, rainDrops[i] * size);

          if (rainDrops[i] * size > canvas.height && Math.random() > 0.975) {
            updateRainDrop[i] = 0;
          }
          updateRainDrop[i] += 1;
        }
      }
      fpsCounter.current += 1;
      requestRef.current = requestAnimationFrame(renderMatrix);
    },
    [size, rainDrops, alphabet]
  );

  useEffect(() => {
    initCanvas();
    requestRef.current = requestAnimationFrame(renderMatrix);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [initCanvas, renderMatrix, setInterval]);

  return (
    <PaneContainer ref={containerRef} className={className}>
      <canvas key={keyName} ref={ref} />
    </PaneContainer>
  );
};

export default MatrixRain;
