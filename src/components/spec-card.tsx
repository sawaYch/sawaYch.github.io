import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import cn from 'classnames';
import {
  BreakPointHooks,
  breakpointsTailwind,
} from '@react-hooks-library/core';
import Spec from '../content/spec.mdx';
import PaneContainer from './pane-container';

interface SpecCardProps {
  className?: string;
}

const { useSmaller } = BreakPointHooks(breakpointsTailwind);

const SpecCard = ({ className }: SpecCardProps) => {
  const isBelowMd = useSmaller('md');

  return (
    <motion.div
      className="flex justify-center w-screen scale-50 md:scale-100 h-fit item-center"
      variants={{
        offscreen: {
          opacity: 0,
          scale: isBelowMd ? 0 : 0.85,
          x: -200,
        },
        onscreen: {
          x: 0,
          opacity: 1,
          scale: isBelowMd ? 0.85 : 1,
          transition: {
            duration: 0.5,
          },
        },
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <PaneContainer
        className={cn(
          'flex items-center justify-center text-xs pointer-events-none select-none',
          className
        )}
        withFrame
      >
        <p>➜ neofetch</p>
        <div className="flex flex-row items-center justify-center">
          <StaticImage
            src="../images/computer.webp"
            alt="computer"
            layout="fixed"
            placeholder="blurred"
            width={160}
            height={160}
          />
          <Spec />
        </div>
        ➜ <span className="animate-ping">█</span>
      </PaneContainer>
    </motion.div>
  );
};

export default SpecCard;
