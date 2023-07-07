/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { StaticImage } from 'gatsby-plugin-image';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';
import { GiSparkles } from '@react-icons/all-files/gi/GiSparkles';
import { Modal } from 'flowbite-react';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';
import PaneContainer from './pane-container';

const Oshinoko = () => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const hkvtuberCardData = [
    {
      src: '../images/oshinoko/mya.png',
      alt: 'mya',
      twitterUrl: 'https://twitter.com/MyaVtuber',
      youtubeUrl: 'https://www.youtube.com/@mya.',
      name: '米亞 Mya',
      video: 'https://www.youtube.com/watch?v=Iw4QYkzeihw',
      content: `我是香港本地的虛擬youtuber米亞！
      主要在此頻道直播，構思不同好玩有趣的主題，跟觀眾一起亂玩 (｡･∀･)ﾉﾞ
      ▼如果想快速了解米亞的MEME和之前的里程碑，可以看看觀眾製作的網頁✨▼
      https://www.mya-hkvtuber.com/mya-meme`,
    },
    {
      src: '../images/oshinoko/gummy.png',
      alt: 'gummy',
      twitterUrl: 'https://twitter.com/gummy_forest',
      youtubeUrl: 'https://www.youtube.com/@gummyz',
    },
    {
      src: '../images/oshinoko/ruri.png',
      alt: 'ruri',
    },
    {
      src: '../images/oshinoko/june.png',
      alt: 'june',
    },
    {
      src: '../images/oshinoko/uno.png',
      alt: 'uno',
    },
    {
      src: '../images/oshinoko/miho.png',
      alt: 'miho',
    },
    {
      src: '../images/oshinoko/kurio.png',
      alt: 'kurio',
    },
  ];

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const customModalTheme = {
    root: {
      base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
    },
    content: {
      // fix mobile dismiss issue
      base: 'relative h-fit -mt-[12rem] w-full p-4 md:h-auto',
    },
  };

  const handleClick = useCallback((index: number) => {
    setOpenModal((prev) => !prev);
    setSelectedIndex(index);
  }, []);

  return (
    <PaneContainer className="!bg-transparent !border-0 w-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="w-fit">
          <div className="h-[1.5rem] -mb-8 -mx-8 bg-dracula-buffy-400/30 -skew-x-12 backdrop-blur-sm" />
          <div className="flex">
            <h2 className="z-50 !text-dracula-buffy-100">
              推しの子 | HKVtubers
            </h2>{' '}
            <GiSparkles
              size="2rem"
              className="z-50 ml-2 text-dracula-buffy-200"
            />
          </div>
        </div>
        <div className="flex">
          I am&nbsp;
          <a
            href="https://hololive.wiki/wiki/Glossary#DD"
            className="underline hover:text-dracula-dark-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="dd definition"
          >
            DD
          </a>
          &nbsp;😎
        </div>
        <div className="flex w-1/2">
          With captivating personality, infectious energy, and incredible
          talent, bringing joy and encouragement to the audience.
        </div>
      </div>
      <div className="flex justify-center w-full p-2 -mt-10 scale-50 sm:mt-10 sm:scale-75">
        <div
          onClick={() => handleClick(0)}
          className="flex w-48 h-48 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg border-[#fd9a98] hover:bg-[#fd9a98] active:bg-[#fd9a98]"
        >
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(253,154,152,0.5)]"
              src="../images/oshinoko/mya.png"
              alt="mya"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 mt-36 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg border-[#805e5a] hover:bg-[#805e5a]">
          <div className="w-48 h-48 -rotate-45">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(128,94,90,0.5)]"
              src="../images/oshinoko/gummy.png"
              alt="gummy"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg border-dracula-purple hover:bg-dracula-purple">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(189,147,249,0.5)]"
              src="../images/oshinoko/june.png"
              alt="june"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg mt-36 border-dracula-cyan hover:bg-dracula-cyan">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(139,233,253,0.5)]"
              src="../images/oshinoko/uno.png"
              alt="uno"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-0 p-2 scale-50 sm:scale-75">
        <div className="flex w-48 h-48 -mt-64 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg sm:-mt-32 border-dracula-light hover:bg-dracula-light">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(255,255,255,0.5)]"
              src="../images/oshinoko/ruri.png"
              alt="ruri"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg -mt-28 sm:mt-4 border-dracula-purple-200 hover:bg-dracula-purple-200">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(211,182,252,0.5)]"
              src="../images/oshinoko/miho.png"
              alt="miho"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 -mt-64 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg sm:-mt-32 border-dracula-green-200 hover:bg-dracula-green-200">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(145,254,178,0.5)]"
              src="../images/oshinoko/kurio.png"
              alt="kurio"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg -mt-28 sm:mt-4 border-dracula-blue hover:bg-dracula-blue">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto translate-y-4 scale-150 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(98,114,164,0.5)]"
              src="../images/oshinoko/sora.png"
              alt="sora"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>

      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        theme={customModalTheme}
      >
        <motion.div
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
          viewport={{ once: false, amount: 0 }}
        >
          <Modal.Header>{hkvtuberCardData[selectedIndex].name}</Modal.Header>
          <Modal.Body>
            <div className="flex bg-dracula-darker-900 rounded-2xl">
              <div className="flex w-full h-48 sm:h-80">
                <ReactPlayer
                  url={hkvtuberCardData[selectedIndex].video}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="text-dracula-light">
              <div className="mb-2">
                {hkvtuberCardData[selectedIndex].content}
              </div>
              <div className="flex gap-x-1">
                <FaYoutubeSquare size="1.2rem" className="text-dracula-red" />
                <a
                  className="underline hover:text-dracula-darker-300"
                  href={hkvtuberCardData[selectedIndex].youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="youtube link"
                >
                  {hkvtuberCardData[selectedIndex].youtubeUrl}
                </a>
              </div>
              <div className="flex gap-x-1">
                <FaTwitterSquare size="1.2rem" className="text-dracula-cyan" />
                <a
                  className="underline hover:text-dracula-darker-300"
                  href={hkvtuberCardData[selectedIndex].twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter link"
                >
                  {hkvtuberCardData[selectedIndex].twitterUrl}
                </a>
              </div>
            </div>
          </Modal.Footer>
        </motion.div>
      </Modal>
    </PaneContainer>
  );
};

export default Oshinoko;
