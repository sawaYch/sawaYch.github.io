import { StaticImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import tw from 'twin.macro';
import AboutMe from '../content/about-me.mdx';
import PaneContainer from './pane-container';

interface CharacterCardProps {
  className?: string;
}

const PaneColumn = tw.div`flex flex-col items-start content-start justify-start grow m-4`;

const CharacterCard = ({ className }: CharacterCardProps) => {
  const a = 1;

  return (
    <PaneContainer
      className={cn('flex flex-row items-start justify-center', className)}
    >
      <PaneColumn>
        <AboutMe />
      </PaneColumn>
      <PaneColumn>
        <StaticImage
          className="self-start pointer-events-none select-none rounded-xl"
          src="../images/avatar.webp"
          alt="Void Dojo"
          layout="fixed"
          width={192}
          height={192}
        />
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
      </PaneColumn>
    </PaneContainer>
  );
};

export default CharacterCard;
