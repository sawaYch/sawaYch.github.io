import { ReactElement } from 'react';

export type CubeColorType = 'purple' | 'red' | 'buffy' | 'dark';

interface CubeProps {
  color?: CubeColorType;
  icon?: ReactElement;
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
};

const Cube = ({ color = 'purple', icon }: CubeProps) => (
  <div className="relative flex items-center justify-center w-[120px] h-[120px] rounded-md scale-50 transition-transform">
    <div className="-translate-y-24 -translate-x-[4.5rem]">
      <div
        className={`${cubeColorMap[color][0]} absolute w-[80px] h-[80px] transform-gpu -rotate-[30deg] -skew-x-[30deg] translate-x-[64.5px] translate-y-[79.7px] scale-y-[0.864] transition-transform duration-500 ease-in-out justify-center items-center flex`}
      >
        {icon}
      </div>
      <div
        className={`${cubeColorMap[color][1]}  absolute w-[80px] h-[80px] transform rotate-90 -skew-x-[30deg] scale-y-[0.864] -translate-x-[4.6px] translate-y-[79.7px] transition-transform duration-500 ease-in-out`}
      />
      <div
        className={`${cubeColorMap[color][2]} absolute w-[80px] h-[80px] transform rotate-[210deg] -skew-x-[30deg] scale-y-[0.864] translate-x-[30px] translate-y-[20px] transition-transform duration-500 ease-in-out`}
      />
    </div>
  </div>
);

export default Cube;
