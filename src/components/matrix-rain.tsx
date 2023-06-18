import { useRef, useEffect, useMemo, useCallback } from 'react';
import cn from 'classnames';
import tw from 'twin.macro';
import { interval } from 'd3';
import { useResizeDetector } from 'react-resize-detector';

interface MatrixRainProps {
  matrixKey?: string;
  className?: string;
  size?: number;
}

const MatrixRainContainer = tw.div`border border-dracula-aro bg-opacity-60  bg-dracula-aro w-full h-full select-none pointer-events-none`;

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
      rainDrops[x] = 1;
    }
  }, [canvasHeight, canvasWidth, columns, rainDrops]);

  const renderMatrix = useCallback(() => {
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
    context.fillStyle = '#fb31a5';
    context.font = `${size}px kuGraph`;

    const updateRainDrop = rainDrops;

    for (let i = 0; i < rainDrops.length; i += 1) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * size, rainDrops[i] * size);

      if (rainDrops[i] * size > canvas.height && Math.random() > 0.975) {
        updateRainDrop[i] = 0;
      }
      updateRainDrop[i] += 1;
    }
  }, [size, rainDrops, alphabet]);

  useEffect(() => {
    initCanvas();
    const autoAnimation = interval(renderMatrix, 50);

    return () => {
      autoAnimation.stop();
    };
  }, [initCanvas, renderMatrix]);

  return (
    <MatrixRainContainer
      ref={containerRef}
      className={cn(
        'border-t-0 border-b-8 border-x-8 border-dracula-darker',
        className
      )}
    >
      <canvas key={keyName} ref={ref} />
    </MatrixRainContainer>
  );
};

export default MatrixRain;
