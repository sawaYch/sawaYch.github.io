import cn from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import AboutMe from '../content/about-me.mdx';
import PaneContainer from './pane-container';
import Placeholder from './placeholder';

interface CharacterCardProps {
  className?: string;
}

const CharacterCard = ({ className }: CharacterCardProps) => (
  <>
    <div className="flex justify-center w-1/2 portrait:w-4/5 item-center">
      <PaneContainer
        className={cn('flex flex-col !border-0 !bg-transparent', className)}
      >
        <motion.div
          className="flex justify-center item-center"
          variants={
            isMobile
              ? undefined
              : {
                  offscreen: {
                    opacity: 0,
                    x: -50,
                  },
                  onscreen: {
                    x: 0,
                    opacity: 1,
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
              'flex items-center justify-center text-xs pointer-events-none select-none rounded-lg',
              className
            )}
            withFrame
          >
            <p>➜ whoami</p>
            <div className="flex flex-col items-center justify-center p-4 gap-x-4">
              <div className="w-16 mb-4 sm:w-32">
                <StaticImage
                  className="pointer-events-none select-none rounded-xl"
                  src="../images/avatar.webp"
                  alt="Void Dojo"
                  layout="fullWidth"
                  placeholder="blurred"
                />
              </div>
              <AboutMe />
            </div>
            ➜ <span className="animate-ping">█</span>
          </PaneContainer>
        </motion.div>
      </PaneContainer>
    </div>
    <Placeholder />
  </>
);

export default CharacterCard;
