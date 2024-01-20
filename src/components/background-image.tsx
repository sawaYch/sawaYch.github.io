import { StaticImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

const BackgroundImage = () => {
  const text1 = 'Hasakaki\nSora';
  return (
    <>
      <div className="fixed">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <div className="fixed w-screen h-screen noise-bg z-[1]" />
      <div className="fixed flex w-screen h-screen py-[6vh] px-[5vw] opacity-bg break-all">
        <div className="fixed w-[90%] border rounded-xl outline-1 h-5/6 z-[20] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[53%]">
          <div className="fixed w-full h-full dot-pattern" />
          <StaticImage
            className={cn(
              'pointer-events-none select-none z-[20] grayscale h-full w-full rounded-xl',
              { '': isMobile }
            )}
            src="../images/girl.png"
            alt="background images"
            layout="fullWidth"
            placeholder="blurred"
          />
        </div>
        <div className="absolute w-[90vw] h-[90vh] break-all text-right">
          <pre
            className={cn(
              'fixed w-[90vw] text-[6vw] font-firacode uppercase z-[19] leading-none select-none pointer-events-none break-all italic h-screen px-4',
              { '!text-[6vh]': isMobile }
            )}
          >
            {text1}
            <span className="animate-ping">|</span>
          </pre>
          <pre
            className={cn(
              'fixed text-[6vw] font-firacode uppercase z-[21] bg-text-clip leading-none select-none pointer-events-none italic h-screen w-[90vw] px-4',
              { '!text-[6vh]': isMobile }
            )}
          >
            {text1}
            <span className="animate-ping">|</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default BackgroundImage;
