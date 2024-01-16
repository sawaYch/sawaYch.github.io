import React, { PropsWithChildren, ReactNode } from 'react';
import { Img } from 'react-image';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import cn from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import AboutMe from '../content/about-me.mdx';
import PaneContainer from './pane-container';
// import SpecCard from './spec-card';
import Spinner from './spinner';

interface CharacterCardProps {
  className?: string;
}

const PaneColumn = ({
  children,
  className,
}: PropsWithChildren<CharacterCardProps>) => (
  <div
    className={cn(
      'flex flex-col items-start content-start justify-start m-4 grow',
      className
    )}
  >
    {children}
  </div>
);

const ImageWrapper: (children: ReactNode) => React.JSX.Element = (children) => (
  <div className="w-full h-full">{children}</div>
);

const CharacterCard = ({ className }: CharacterCardProps) => (
  <div className="flex justify-center w-1/2 portrait:w-4/5 item-center">
    <PaneContainer
      className={cn(
        'flex flex-col !bg-dracula-darker-900 rounded-md',
        className
      )}
    >
      <div className="flex flex-col items-start justify-center md:flex-row xs:items-center text-dracula-dark-400">
        <PaneColumn>
          <div className="absolute self-end w-16 sm:w-32">
            <StaticImage
              className="pointer-events-none select-none rounded-xl"
              src="../images/avatar.webp"
              alt="Void Dojo"
              layout="fullWidth"
            />
          </div>
          <AboutMe />
        </PaneColumn>
      </div>
      <Img
        className="w-full h-full p-1 pointer-events-none select-none sm:p-8"
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
    {/* <SpecCard className="mt-[2rem] -mr-[2rem] skew-y-6 shadow-2xl" /> */}
  </div>
);

export default CharacterCard;
