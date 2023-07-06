/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { StaticImage } from 'gatsby-plugin-image';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';
import { GiSparkles } from '@react-icons/all-files/gi/GiSparkles';
import { Modal } from 'flowbite-react';
import { useCallback, useState } from 'react';
import PaneContainer from './pane-container';

const Oshinoko = () => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const hkvtuberCardData = [
    {
      src: '../images/oshinoko/mya.png',
      alt: 'mya',
      twitterUrl: 'https://twitter.com/gummy_forest',
      youtubeUrl: 'https://www.youtube.com/@mya.',
    },
    {
      src: '../images/oshinoko/gummy.png',
      alt: 'gummy',
      twitterUrl: 'https://twitter.com/MyaVtuber',
      youtubeUrl: 'https://www.youtube.com/@mya.',
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
  // const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  const customModalTheme = {
    root: {
      base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
    },
  };

  const handleClick = useCallback(() => {
    setOpenModal((prev) => !prev);
    // setSelectedIndex(index);
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
      </div>
      <div className="flex justify-center w-full p-2 mt-10 scale-50 sm:scale-75">
        <div
          onClick={handleClick}
          className="flex w-48 h-48 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg border-[#fd9a98] hover:bg-[#fd9a98]"
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
          <div className="w-48 h-48 -rotate-45 ">
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
      <div className="flex justify-center w-full p-2 scale-50 -mt-52 sm:-mt-32 sm:scale-75">
        <div className="flex w-48 h-48 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg border-dracula-light hover:bg-dracula-light">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(255,255,255,0.5)]"
              src="../images/oshinoko/ruri.png"
              alt="ruri"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg mt-36 border-dracula-purple-200 hover:bg-dracula-purple-200">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(211,182,252,0.5)]"
              src="../images/oshinoko/miho.png"
              alt="miho"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg border-dracula-green-200 hover:bg-dracula-green-200">
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(145,254,178,0.5)]"
              src="../images/oshinoko/kurio.png"
              alt="kurio"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg mt-36 border-dracula-blue hover:bg-dracula-blue">
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
        <Modal.Header>米亞 Mya</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="leading-relaxed text-dracula-light">&nbsp;</p>
            <div className="text-dracula-light">
              <div className="flex gap-x-1">
                <FaTwitterSquare size="1.2rem" className="text-dracula-cyan" />
                <a
                  className="underline hover:text-dracula-darker-300"
                  href="https://twitter.com/gummy_forest"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter link"
                >
                  @gummy_forest
                </a>
              </div>
              <div className="flex gap-x-1">
                <FaYoutubeSquare size="1.2rem" className="text-dracula-red" />
                <a
                  className="underline hover:text-dracula-darker-300"
                  href="https://www.youtube.com/@mya."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="youtube link"
                >
                  @mya.
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </PaneContainer>
  );
};

export default Oshinoko;
