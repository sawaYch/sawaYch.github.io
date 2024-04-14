import { ReactElement } from 'react';
import cn from 'classnames';

export type CubeColorType = keyof typeof cubeColorMap;

interface CubeProps {
  color?: CubeColorType;
  icon?: ReactElement;
  className?: string;
}

// side, front, top
export const cubeColorMap = {
  purple: [
    'bg-dracula-purple-400',
    'bg-dracula-purple-600',
    'bg-dracula-purple-500',
    'from-dracula-purple-400',
    'to-dracula-purple-400',
  ],
  red: [
    'bg-dracula-red-200',
    'bg-dracula-red-400',
    'bg-dracula-red-300',
    'from-dracula-red-400',
    'to-dracula-red-400',
  ],
  buffy: [
    'bg-dracula-buffy-200',
    'bg-dracula-buffy-400',
    'bg-dracula-buffy-300',
    'from-dracula-buffy-400',
    'to-dracula-buffy-400',
  ],
  dark: [
    'bg-dracula-dark-200',
    'bg-dracula-dark-400',
    'bg-dracula-dark-300',
    'from-dracula-dark-400',
    'to-dracula-dark-400',
  ],
  yellow: [
    'bg-dracula-yellow-700',
    'bg-dracula-yellow-900',
    'bg-dracula-yellow-800',
    'from-dracula-yellow-900',
    'to-dracula-yellow-900',
  ],
  blue: [
    'bg-dracula-blue-700',
    'bg-dracula-blue-900',
    'bg-dracula-blue-800',
    'from-dracula-blue-900',
    'to-dracula-blue-900',
  ],
  cyan: [
    'bg-dracula-cyan-700',
    'bg-dracula-cyan-900',
    'bg-dracula-cyan-800',
    'from-dracula-cyan-900',
    'to-dracula-cyan-900',
  ],
  green: [
    'bg-dracula-green-700',
    'bg-dracula-green-900',
    'bg-dracula-green-800',
    'from-dracula-green-900',
    'to-dracula-green-900',
  ],
  orange: [
    'bg-dracula-orange-700',
    'bg-dracula-orange-900',
    'bg-dracula-orange-800',
    'from-dracula-orange-900',
    'to-dracula-orange-900',
  ],
};

const Cube = ({ color = 'purple', icon, className }: CubeProps) => (
  <div
    className={cn(
      'relative flex items-center justify-center w-[64px] h-[64px] rounded-md scale-[0.4] transition-transform',
      className
    )}
  >
    <div className="-translate-y-24 -translate-x-[4.5rem]">
      <div
        className={`${cubeColorMap[color][0]} absolute w-[80px] h-[80px] transform-gpu -rotate-[30deg] -skew-x-[30deg] translate-x-[64.5px] translate-y-[79.7px] scale-y-[0.864] transition-transform duration-500 ease-in-out justify-center items-center flex`}
      >
        {icon}
      </div>
      <div
        className={`${cubeColorMap[color][1]}  absolute w-[80px] h-[80px] transform rotate-90 -skew-x-[30deg] scale-y-[0.864] -translate-x-[4.6px] translate-y-[79.7px] transition-transform duration-500 ease-in-out`}
      >
        <div className="-rotate-90">{icon}</div>
      </div>
      <div
        className={`${cubeColorMap[color][2]} absolute w-[80px] h-[80px] transform rotate-[210deg] -skew-x-[30deg] scale-y-[0.864] translate-x-[30px] translate-y-[20px] transition-transform duration-500 ease-in-out`}
      />
    </div>
  </div>
);

export default Cube;
