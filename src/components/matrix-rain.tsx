import { useRef, useEffect, useMemo, useCallback } from 'react';
import cn from 'classnames';
import tw from 'twin.macro';

interface MatrixRainProps {
  matrixKey?: string;
  className?: string;
  width?: number;
  height?: number;
  size?: number;
}

const MatrixRainContainer = tw.div`border border-dracula-aro w-fit select-none`;

const MatrixRain = ({
  matrixKey = 'matrix',
  className,
  width,
  height,
  size = 16,
}: MatrixRainProps) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const keyName = useMemo(() => `mrl-${matrixKey}`, [matrixKey]);
  const canvasWidth = useMemo(() => width ?? window.innerWidth, [width]);
  const canvasHeight = useMemo(() => height ?? window.innerHeight, [height]);
  const katakana =
    'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number = '0123456789';
  const alphabet = katakana + latin + number;

  const columns = canvasWidth / size;
  const rainDrops: number[] = useMemo(() => [], []);

  const initCanvas = useCallback(() => {
    const canvas = ref.current;
    if (canvas == null) return;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
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
    context.font = `${size}px Cubic`;

    const updateRainDrop = rainDrops;

    for (let i = 0; i < rainDrops.length; i += 1) {
      // randomize the string of characters to render
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
    const interval = setInterval(renderMatrix, 30);
    return () => {
      clearInterval(interval);
    };
  }, [initCanvas, renderMatrix]);

  return (
    <MatrixRainContainer>
      <canvas
        key={keyName}
        className={cn(
          'border-t-0 border-b-8 border-x-8 border-dracula-darker',
          className
        )}
        ref={ref}
      />
    </MatrixRainContainer>
  );
};

export default MatrixRain;
