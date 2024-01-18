import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import AboutMe from '../content/about-me.mdx';
import PaneContainer from './pane-container';
import Placeholder from './placeholder';
// import SpecCard from './spec-card';

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

const CharacterCard = ({ className }: CharacterCardProps) => (
  <>
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
                placeholder="blurred"
              />
            </div>
            <AboutMe />
          </PaneColumn>
        </div>
      </PaneContainer>
      {/* <SpecCard className="mt-[2rem] -mr-[2rem] skew-y-6 shadow-2xl" /> */}
    </div>
    <Placeholder />
  </>
);

export default CharacterCard;
