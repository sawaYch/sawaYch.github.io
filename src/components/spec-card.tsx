import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import cn from 'classnames';
import Spec from '../content/spec.mdx';
import PaneContainer from './pane-container';

interface SpecCardProps {
  className?: string;
}

const SpecCard = ({ className }: SpecCardProps) => (
  <motion.div
    className="flex justify-center item-center"
    variants={
      isMobile
        ? undefined
        : {
            offscreen: {
              opacity: 0,
              scale: 0.85,
              x: -50,
            },
            onscreen: {
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            },
          }
    }
    initial="offscreen"
    whileInView="onscreen"
    layout="position"
    viewport={{ once: true }}
  >
    <PaneContainer
      className={cn(
        'flex items-center justify-center text-xs pointer-events-none select-none',
        className
      )}
      withFrame
    >
      <p>➜ neofetch</p>
      <div className="flex flex-row items-center justify-center p-4 gap-x-4">
        <StaticImage
          src="../images/arch.png"
          alt="computer"
          layout="fixed"
          placeholder="blurred"
          width={118}
          height={118}
        />
        <Spec />
      </div>
      ➜ <span className="animate-ping">█</span>
    </PaneContainer>
  </motion.div>
);

export default SpecCard;
