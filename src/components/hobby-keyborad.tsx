import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FaKeyboard } from '@react-icons/all-files/fa/FaKeyboard';
import { Carousel } from 'flowbite-react';
import PaneContainer from './pane-container';

const HobbyKeyboard = () => (
  <motion.div
    className="!w-4/5 !h-fit flex flex-col justify-center items-center"
    variants={{
      offscreen: {
        opacity: 0,
      },
      onscreen: {
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
        },
      },
    }}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0 }}
  >
    <div className="w-[18rem] h-[1.5rem] -mb-10 bg-dracula-purple-400/30 -skew-x-12 backdrop-blur-sm" />
    <div className="flex">
      <h2 className="z-50">DIY KEYBOARDS </h2>{' '}
      <FaKeyboard size="2rem" className="z-50 ml-2 text-dracula-purple-200" />
    </div>
    <div className="mb-4">
      All these are my collections 😆 Most of them are soldering on my own.
    </div>
    <PaneContainer className="!w-fit !h-fit !bg-dracula-dark/30 !backdrop-blur-sm">
      <Carousel className="w-[30rem] h-[24rem]">
        <div className="w-[14rem] h-[14rem] rounded-full bg-dracula-red">
          <StaticImage
            className="mb-8 mr-2 scale-150 drop-shadow-[0_8px_8px_rgba(255,85,85,0.8)]"
            src="../images/dz60.webp"
            alt="dz60"
            layout="fullWidth"
          />
          <span className="mt-8 text-3xl bold font-ku">KDB DZ60</span>
        </div>
        <div className="w-[14rem] h-[14rem] rounded-full bg-dracula-orange">
          <StaticImage
            className="mt-8 scale-150 drop-shadow-[0_8px_8px_rgba(255,184,108,0.8)]"
            src="../images/mojo68.webp"
            alt="mojo68"
            layout="fullWidth"
          />
          <span className="mr-8 -mt-8 text-3xl bold font-ku">MOJO68</span>
        </div>
        <div className="w-[14rem] h-[14rem] rounded-full bg-dracula-purple">
          <StaticImage
            className="scale-150 drop-shadow-[0_8px_8px_rgba(189,147,249,0.8)]"
            src="../images/sofle.webp"
            alt="sofle"
            layout="fullWidth"
          />
          <span className="mr-8 text-3xl bold font-ku">Sofle Keyboard</span>
        </div>
        <div className="w-[14rem] h-[14rem] rounded-full bg-dracula-cyan">
          <StaticImage
            className="scale-150 drop-shadow-[0_8px_8px_rgba(139,233,253,0.8)]"
            src="../images/dilemma.webp"
            alt="dilemma"
            layout="fullWidth"
          />
          <span className="mr-8 text-3xl bold font-ku">Dilemma@Bastard</span>
        </div>
      </Carousel>
    </PaneContainer>
  </motion.div>
);

export default HobbyKeyboard;
