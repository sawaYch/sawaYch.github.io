/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { GiSparkles } from '@react-icons/all-files/gi/GiSparkles';
import { Modal } from 'flowbite-react';
import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import cn from 'classnames';
import oshinokoData from './oshinoko-data';

import PaneContainer from './pane-container';

interface OshinokoProps {
  data: Queries.AllFileAndSiteDataQuery;
}

const Oshinoko = ({ data }: OshinokoProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedKey, setSelectedKey] = useState<string>(oshinokoData[0].key);

  const customModalTheme = {
    root: {
      base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
    },
    content: {
      // fix mobile dismiss issue
      base: 'absolute top-0 h-fit w-full p-4 md:h-auto sm:top-auto',
      inner:
        'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[80vh] overflow-y-auto',
    },
  };

  const handleClick = useCallback((k: string) => {
    setOpenModal((prev) => !prev);
    setSelectedKey(k);
  }, []);

  const oshinokoImageNode = useMemo(
    () =>
      oshinokoData.map((item) => {
        const imageNode = data.allFile.edges.find(
          (it) => it.node.name === item.key
        );

        return (
          <div
            onClick={() => handleClick(item.key)}
            className={cn(
              'absolute w-48 h-48 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg scale-50 sm:scale-75 my-2 mx-2',
              item.frameColor,
              item.positioning
            )}
          >
            <div className="w-48 h-48 -rotate-45 ">
              {imageNode?.node.childImageSharp?.gatsbyImageData && (
                <GatsbyImage
                  className={`w-48 h-auto -translate-y-12 pointer-events-none select-none ${item.shadowColor}`}
                  image={imageNode?.node.childImageSharp?.gatsbyImageData}
                  alt={item.key}
                />
              )}
            </div>
          </div>
        );
      }),
    [data.allFile.edges, handleClick]
  );

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
      <div className="relative w-screen mt-10 h-[24rem]">
        <div className="absolute p-2 left-[50%] -translate-x-72">
          {oshinokoImageNode}
        </div>
      </div>
      {/* <Modal>
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
      </Modal> */}
    </PaneContainer>
  );
};

export default Oshinoko;
