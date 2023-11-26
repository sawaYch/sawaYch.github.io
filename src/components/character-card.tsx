import React, { ReactNode } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Img } from 'react-image';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import cn from 'classnames';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import AboutMe from '../content/about-me.mdx';
import PaneContainer from './pane-container';
import SpecCard from './spec-card';
import Spinner from './spinner';

interface CharacterCardProps {
  className?: string;
}

const PaneColumn = tw.div`flex flex-col items-start content-start justify-center grow m-4`;
const ImageWrapper: (children: ReactNode) => React.JSX.Element = (children) => (
  <div className="w-full h-full">{children}</div>
);

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
        'flex flex-col !backdrop-blur-md !bg-dracula-dark/10',
        className
      )}
    >
      <div className="flex flex-col items-start justify-center md:flex-row xs:items-center">
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
      </div>
      <Img
        className="w-full h-full mt-10 pointer-events-none select-none p0 sm:p-8"
        src="https://raw.githubusercontent.com/sawaYch/sawaYch/main/github-metrics.svg"
        alt="metrics"
        loader={
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Spinner className="!w-12 !h-12" />
          </div>
        }
        unloader={
          <div className="flex flex-col items-center justify-center h-full">
            <FcRemoveImage size="5rem" />
            <div>Fail to load pulse statistic</div>
          </div>
        }
        container={ImageWrapper}
        loading="lazy"
      />
    </PaneContainer>
  </motion.div>
);

export default CharacterCard;
