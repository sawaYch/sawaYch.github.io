import { ReactElement } from 'react';
import Cube, { CubeColorType } from './cube';

interface VoidHeadingProps {
  icon: ReactElement;
  text: string;
  color?: CubeColorType;
  extra?: ReactElement;
}

const VoidHeading = ({
  icon,
  text: title,
  extra,
  color = 'purple',
}: VoidHeadingProps) => (
  <div className="flex items-center justify-center select-none">
    <Cube color={color} icon={icon} className="!scale-[0.35] m-4 w-32 h-24" />
    <div className="flex flex-col">
      <div className="font-sans text-xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008B8B] to-[#54a4ff]">
          {title}
        </span>
      </div>
      {extra}
    </div>
  </div>
);

export default VoidHeading;
