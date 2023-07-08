/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { StaticImage } from 'gatsby-plugin-image';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { GiSparkles } from '@react-icons/all-files/gi/GiSparkles';
import { Modal } from 'flowbite-react';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import IntroMya from '../content/intro-mya.mdx';
import IntroGummy from '../content/intro-gummy.mdx';
import IntroRuri from '../content/intro-ruri.mdx';
import IntroUno from '../content/intro-uno.mdx';
import IntroMiho from '../content/intro-miho.mdx';
import IntroJune from '../content/intro-june.mdx';
import IntroSora from '../content/intro-sora.mdx';
import IntroKuiro from '../content/intro-kuiro.mdx';

import PaneContainer from './pane-container';

const Oshinoko = () => {
  const hkvtuberCardData = [
    {
      src: '../images/oshinoko/mya.png',
      alt: 'mya',
      twitterUrl: 'https://twitter.com/MyaVtuber',
      youtubeUrl: 'https://www.youtube.com/@mya.',
      instagramUrl: 'https://www.instagram.com/mya_vtuber',
      name: '米亞 | Mya',
      video: '47mJVG8LNfE',
      content: <IntroMya />,
    },
    {
      src: '../images/oshinoko/gummy.png',
      alt: 'gummy',
      twitterUrl: 'https://twitter.com/gummy_forest',
      youtubeUrl: 'https://www.youtube.com/@gummyz',
      instagramUrl: 'https://www.instagram.com/gummy_forest',
      name: '甘米 | Gummy',
      video: 'x7-X9snnEZI',
      content: <IntroGummy />,
    },
    {
      src: '../images/oshinoko/june.png',
      alt: 'june',
      twitterUrl: 'https://twitter.com/June_Tgtk',
      youtubeUrl: 'https://www.youtube.com/@june_tgtk',
      instagramUrl: 'https://www.instagram.com/june_tgtk',
      name: '咎月ジュネ | June',
      video: 'ne3C7IQBco8',
      content: <IntroJune />,
    },
    {
      src: '../images/oshinoko/uno.png',
      alt: 'uno',
      twitterUrl: 'https://twitter.com/kami46UNO',
      youtubeUrl: 'https://www.youtube.com/@kami46UNO',
      instagramUrl: 'https://www.instagram.com/kami46uno',
      name: '神白ウノ | Uno',
      video: 'moSy45_zn0c',
      content: <IntroUno />,
    },
    {
      src: '../images/oshinoko/ruri.png',
      alt: 'ruri',
      twitterUrl: 'https://twitter.com/ruri_mashiro',
      youtubeUrl: 'https://www.youtube.com/@MashiroRuri',
      instagramUrl: 'https://www.instagram.com/mashirorurii',
      name: '真白瑠璃 | Ruri',
      video: 'qf3b1_gT4SI',
      content: <IntroRuri />,
    },
    {
      src: '../images/oshinoko/miho.png',
      alt: 'miho',
      twitterUrl: 'https://twitter.com/kurohatamiho',
      youtubeUrl: 'https://www.youtube.com/@kurohatamiho',
      name: '黑佃みほ | Miho',
      video: '6shSnZrVhL0',
      content: <IntroMiho />,
    },
    {
      src: '../images/oshinoko/kurio.png',
      alt: 'kurio',
      twitterUrl: 'https://twitter.com/kuiro0723',
      youtubeUrl: 'https://www.youtube.com/@kuiro0723',
      instagramUrl: 'https://www.instagram.com/kub_live_',
      name: '古洢蘿 | Kuiro',
      video: 'KeJB2RvxPwE',
      content: <IntroKuiro />,
    },
    {
      src: '../images/oshinoko/sora.png',
      alt: 'sora',
      twitterUrl: 'https://twitter.com/hasakaki_sora',
      youtubeUrl: 'https://www.youtube.com/@hasakakisora',
      instagramUrl: 'https://www.instagram.com/hasakaki_sora',
      name: '羽榊そら | 羽榊天音 | Sora',
      video: 'e293yhqB8Jo',
      content: <IntroSora />,
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
      base: 'absolute h-fit w-full p-4 md:h-auto',
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
        <div
          onClick={() => handleClick(1)}
          className="flex w-48 h-48 mt-36 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg border-[#805e5a] hover:bg-[#805e5a]"
        >
          <div className="w-48 h-48 -rotate-45">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(128,94,90,0.5)]"
              src="../images/oshinoko/gummy.png"
              alt="gummy"
              placeholder="blurred"
            />
          </div>
        </div>
        <div
          onClick={() => handleClick(2)}
          className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg border-dracula-purple hover:bg-dracula-purple"
        >
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(189,147,249,0.5)]"
              src="../images/oshinoko/june.png"
              alt="june"
              placeholder="blurred"
            />
          </div>
        </div>
        <div
          onClick={() => handleClick(3)}
          className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg mt-36 border-dracula-cyan hover:bg-dracula-cyan"
        >
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
        <div
          onClick={() => handleClick(4)}
          className="flex w-48 h-48 -mt-64 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg sm:-mt-32 border-dracula-light hover:bg-dracula-light"
        >
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(255,255,255,0.5)]"
              src="../images/oshinoko/ruri.png"
              alt="ruri"
              placeholder="blurred"
            />
          </div>
        </div>
        <div
          onClick={() => handleClick(5)}
          className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg -mt-28 sm:mt-4 border-dracula-purple-200 hover:bg-dracula-purple-200"
        >
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(211,182,252,0.5)]"
              src="../images/oshinoko/miho.png"
              alt="miho"
              placeholder="blurred"
            />
          </div>
        </div>
        <div
          onClick={() => handleClick(6)}
          className="flex w-48 h-48 -mt-64 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg sm:-mt-32 border-dracula-green-200 hover:bg-dracula-green-200"
        >
          <div className="w-48 h-48 -rotate-45 ">
            <StaticImage
              className="w-48 h-auto -translate-y-12 pointer-events-none select-none drop-shadow-[8px_0px_0px_rgba(145,254,178,0.5)]"
              src="../images/oshinoko/kurio.png"
              alt="kurio"
              placeholder="blurred"
            />
          </div>
        </div>
        <div
          onClick={() => handleClick(7)}
          className="flex w-48 h-48 -ml-10 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg -mt-28 sm:mt-4 border-dracula-blue hover:bg-dracula-blue"
        >
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
            {openModal ? (
              <LiteYouTubeEmbed
                // @ts-ignore nextline
                autoplay={false}
                id={hkvtuberCardData[selectedIndex].video ?? ''}
                title=""
              />
            ) : null}
            <div className="flex bg-dracula-darker-900 rounded-2xl">
              <LiteYouTubeEmbed
                id={hkvtuberCardData[selectedIndex].video ?? ''}
                title=""
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="text-dracula-light">
              <div className="mb-2">
                {hkvtuberCardData[selectedIndex].content}
              </div>
              {hkvtuberCardData[selectedIndex].youtubeUrl ? (
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
              ) : null}
              {hkvtuberCardData[selectedIndex].twitterUrl ? (
                <div className="flex gap-x-1">
                  <FaTwitterSquare
                    size="1.2rem"
                    className="text-dracula-cyan"
                  />
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
              ) : null}
              {hkvtuberCardData[selectedIndex].instagramUrl ? (
                <div className="flex gap-x-1">
                  <FaInstagramSquare
                    size="1.2rem"
                    className="text-dracula-purple"
                  />
                  <a
                    className="underline hover:text-dracula-darker-300"
                    href={hkvtuberCardData[selectedIndex].instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram link"
                  >
                    {hkvtuberCardData[selectedIndex].instagramUrl}
                  </a>
                </div>
              ) : null}
            </div>
          </Modal.Footer>
        </motion.div>
      </Modal>
    </PaneContainer>
  );
};

export default Oshinoko;
