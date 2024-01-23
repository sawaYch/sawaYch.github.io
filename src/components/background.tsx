import { StaticImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';
import { PropsWithChildren } from 'react';

const StarAnimation = () => (
  <div id="star-animation" className="fixed">
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
  </div>
);

const NoiseAnimation = () => (
  <div
    id="noise-animation"
    className="h-lvh min-h-lvh max-h-lvh fixed noise-bg z-[1]"
  />
);

interface PingBgTextProps {
  bgText?: string;
}

const PingBgText = ({ bgText }: PingBgTextProps) => (
  <div id="bg-text" className="absolute w-[90vw] h-[90vh] break-all text-right">
    <pre
      className={cn(
        'fixed w-[90vw] text-[6vw] font-firacode uppercase z-[19] leading-none select-none pointer-events-none break-all italic px-4',
        { '!text-[6vh]': isMobile }
      )}
    >
      {bgText}
      <span className="animate-ping">|</span>
    </pre>
    <pre
      className={cn(
        'fixed text-[6vw] font-firacode uppercase z-[21] bg-text-clip leading-none select-none pointer-events-none italic h-dvh w-[90vw] px-4',
        { '!text-[6vh]': isMobile }
      )}
    >
      {bgText}
      <span className="animate-ping">|</span>
    </pre>
  </div>
);

const CenterContainer = ({ children }: PropsWithChildren) => (
  <div
    id="bg-center-container"
    className="fixed flex items-center justify-center break-all transition-all w-lvw h-lvh opacity-bg"
  >
    {children}
  </div>
);

const DotPattern = ({ children }: PropsWithChildren) => (
  <div
    id="dot-pattern-animation"
    className="fixed w-[90lvw] h-[100lvh] border outline-1 z-[20] dot-pattern"
  >
    {children}
  </div>
);

const Background = () => {
  const bgText = 'Hasakaki\nSora';
  return (
    <>
      <StarAnimation />
      <NoiseAnimation />
      <CenterContainer>
        <DotPattern>
          <StaticImage
            className={cn(
              'pointer-events-none select-none z-[20] grayscale h-full w-full'
            )}
            src="../images/girl.png"
            alt="background images"
            layout="constrained"
            placeholder="blurred"
          />
        </DotPattern>
        <PingBgText bgText={bgText} />
      </CenterContainer>
    </>
  );
};

export default Background;
