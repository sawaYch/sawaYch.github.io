import { motion } from 'framer-motion';
import { ReactElement, useMemo, useRef, useState } from 'react';
import { useEventListener } from '@react-hooks-library/core';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';
import Cube, { CubeColorType, cubeColorMap } from './cube';

const variants = isMobile
  ? {
      open: {
        y: 0,
        opacity: 1,
      },
      closed: {
        y: 25,
        opacity: 0,
      },
    }
  : {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
        },
      },
      closed: {
        y: 25,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 },
        },
      },
    };

interface MenuItemProps {
  cubeColor?: CubeColorType;
  icon?: ReactElement;
  name: string;
  onClick?: () => void;
  currentModule?: string;
  id: string;
}

const MenuItem = ({
  cubeColor = 'purple',
  name,
  icon,
  onClick,
  currentModule,
  id,
}: MenuItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isItemHover, setIsItemHover] = useState(false);

  useEventListener(ref, 'mouseover', () => {
    setIsItemHover(true);
  });

  useEventListener(ref, 'mouseout', () => {
    setIsItemHover(false);
  });

  const truncateName = useMemo(() => name.substring(0, 8), [name]);

  const active = useMemo(() => currentModule === id, [currentModule, id]);

  return (
    <motion.div
      className={cn(
        `flex flex-col items-center justify-center ${
          active
            ? `bg-gradient-to-r ${cubeColorMap[cubeColor][3]} ${cubeColorMap[cubeColor][4]}`
            : undefined
        }`
      )}
      variants={variants}
      ref={ref}
      onClick={onClick}
    >
      <div className="transition-transform active:scale-90 hover:scale-105">
        <Cube color={cubeColor} icon={icon} />
      </div>
      <div
        className={cn(
          `text-xl uppercase select-none bg-gradient-to-r px-2 ${cubeColorMap[cubeColor][3]} ${cubeColorMap[cubeColor][4]}
      bg-no-repeat [background-position:0_110%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      `,
          {
            '[background-size:100%_100%]': isItemHover,
          }
        )}
      >
        {truncateName}
      </div>
    </motion.div>
  );
};

export default MenuItem;
