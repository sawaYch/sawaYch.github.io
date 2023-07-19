import { useMemo, useState } from 'react';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { HiOutlineX } from '@react-icons/all-files/hi/HiOutlineX';
import { AnimatePresence, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import cn from 'classnames';

import ReactPlayer from 'react-player/lazy';
import Spinner from './spinner';
import oshinokoData from './oshinoko-data';

interface OshinokoCharacterPaneProps {
  isOpen: boolean;
  selectedData: (typeof oshinokoData)[0] | undefined;
  onClose: () => void;
}

interface SocialLinkProps {
  youtube?: string;
  twitter?: string;
  instagram?: string;
  className?: string;
}

const SocialLink = ({
  youtube,
  twitter,
  instagram,
  className,
}: SocialLinkProps) => (
  <div className={cn('flex gap-x-0.5', className)}>
    {youtube ? (
      <div className="flex">
        <a
          className="underline hover:text-dracula-darker-300"
          href={youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube link"
        >
          <FaYoutubeSquare size="3rem" className="text-dracula-red" />
        </a>
      </div>
    ) : null}
    {twitter ? (
      <div className="flex">
        <a
          className="underline hover:text-dracula-darker-300"
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter link"
        >
          <FaTwitterSquare size="3rem" className="text-dracula-cyan" />
        </a>
      </div>
    ) : null}
    {instagram ? (
      <div className="flex">
        <a
          className="underline hover:text-dracula-darker-300"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram link"
        >
          <FaInstagramSquare size="3rem" className="text-dracula-purple" />
        </a>
      </div>
    ) : null}
  </div>
);

const OshinokoCharacterPane = ({
  isOpen,
  selectedData,
  onClose,
}: OshinokoCharacterPaneProps) => {
  const [videoReady, setVideoReady] = useState(false);

  const container = useMemo(
    () => ({
      offscreen: {
        x: 10,
        opacity: 0,
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
          staggerChildren: 0.5,
          delayChildren: 0.5,
        },
      },
      exit: {
        opacity: 0,
      },
    }),
    []
  );

  const retroTvItem = useMemo(
    () => ({
      offscreen: {
        y: 10,
        opacity: 0,
      },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
      exit: {
        opacity: 0,
      },
    }),
    []
  );

  return (
    <AnimatePresence>
      {!isOpen || selectedData == null ? null : (
        <motion.div
          onClick={onClose}
          variants={container}
          initial="offscreen"
          animate="onscreen"
          exit="exit"
          className={`overscroll-none touch-none fixed right-0 left-0 bottom-0 h-modal overflow-y-auto !overflow-x-hidden backdrop-blur-md ${selectedData.modalColor} bg-opacity-50 z-[60]`}
        >
          <button
            aria-label="Close"
            type="button"
            onClick={onClose}
            className="!fixed mt-2 right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <HiOutlineX aria-hidden className="w-6 h-6" />
          </button>
          <div className="touch-scroll h-[100vh] overflow-auto z-[61]">
            <motion.div className="flex items-center justify-center w-screen h-[12rem]">
              <motion.div variants={retroTvItem}>
                {isOpen ? (
                  <div className="absolute">
                    <StaticImage
                      className="absolute pointer-events-none select-none rounded-xl grayscale w-[22rem] -translate-x-1/2"
                      src="../images/retro-tv.png"
                      alt="Void Dojo"
                      layout="fullWidth"
                    />
                    <div
                      className={`absolute left-[1.75rem] top-[2rem] rounded-2xl w-[calc(22rem-7.4rem)] h-[11.35rem] ${selectedData.modalColor} -translate-x-[75%]`}
                    >
                      {videoReady && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transform-gpu z-[60]">
                          <Spinner className="fill-dracula-light" />
                        </div>
                      )}
                      <ReactPlayer
                        className="absolute z-[61]"
                        url={selectedData.video}
                        pip
                        width="100%"
                        height="100%"
                        style={{
                          display: videoReady ? 'flex' : 'none',
                        }}
                        onReady={() => setVideoReady(true)}
                        onError={() => setVideoReady(false)}
                      />
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </motion.div>

            <motion.div
              variants={retroTvItem}
              className="absolute w-screen mt-[10rem] flex flex-col justify-center items-center"
            >
              <div className="flex items-center justify-center gap-x-2">
                <div className="flex px-4 text-lg uppercase -skew-x-12 bg-dracula-dark">
                  <span>Bio</span>
                </div>
                <hr className="flex w-72" />
              </div>
              <div className="rounded-lg bg-dracula-dark">
                <SocialLink
                  twitter={selectedData?.twitterUrl}
                  instagram={selectedData?.instagramUrl}
                  youtube={selectedData?.youtubeUrl}
                />
              </div>
              <div className="p-4 m-4 rounded-lg sm:px-20 bg-dracula-dark">
                {selectedData.content}
              </div>
            </motion.div>
            <motion.div className="absolute left-1/2 -translate-x-1/2 top-10 text-[2rem] sm:text-[3rem] z-[51] oshinoko-character-name whitespace-nowrap uppercase">
              {selectedData?.name}
            </motion.div>
            <motion.div className="absolute left-1/2 -translate-x-1/2 top-12 text-[1rem] sm:text-[1.5rem] z-[51] italic whitespace-nowrap uppercase">
              {selectedData?.name}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OshinokoCharacterPane;
