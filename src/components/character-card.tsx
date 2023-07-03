import { StaticImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import AboutMe from '../content/about-me.mdx';
import PaneContainer from './pane-container';
import SpecCard from './spec-card';

interface CharacterCardProps {
  className?: string;
}

const PaneColumn = tw.div`flex flex-col items-start content-start justify-start grow m-4`;

const CharacterCard = ({ className }: CharacterCardProps) => (
  <motion.div
    className="flex justify-center w-1/2 portrait:w-4/5 item-center"
    variants={{
      offscreen: {
        opacity: 0,
        scale: 0.5,
      },
      onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
        },
      },
    }}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}
  >
    <PaneContainer
      className={cn(
        'flex flex-col md:flex-row items-start xs:items-center justify-center',
        className
      )}
    >
      <PaneColumn>
        <AboutMe />
      </PaneColumn>
      <PaneColumn className="!items-center !justify-center !w-fit portrait:!w-full !m-0">
        <div className="w-1/3 pt-4">
          <StaticImage
            className="self-start pointer-events-none select-none rounded-xl"
            src="../images/avatar.webp"
            alt="Void Dojo"
            layout="fullWidth"
          />
        </div>
        <h4 className="mt-6">CONNECT WITH ME</h4>
        <a
          className="underline hover:text-dracula-darker-300"
          href="https://github.com/sawaYch/sawaYch.github.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="sawaYch.github.io link"
        >
          Github
        </a>
        <a
          className="underline hover:text-dracula-darker-300"
          href="https://twitter.com/SawaYch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter link"
        >
          Twitter
        </a>
        <SpecCard className="mt-[2rem] -mr-[2rem] skew-y-6 shadow-2xl" />
      </PaneColumn>
    </PaneContainer>
  </motion.div>
);

export default CharacterCard;
