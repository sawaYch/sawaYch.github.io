import { useState } from 'react';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { HiOutlineX } from '@react-icons/all-files/hi/HiOutlineX';
import { AnimatePresence, motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { Spinner } from 'flowbite-react';
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
}

const SocialLink = ({ youtube, twitter, instagram }: SocialLinkProps) => (
  <div className="flex gap-x-0.5">
    {youtube ? (
      <div className="flex">
        <a
          className="underline hover:text-dracula-darker-300"
          href={youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube link"
        >
          <FaYoutubeSquare size="1.2rem" className="text-dracula-red" />
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
          <FaTwitterSquare size="1.2rem" className="text-dracula-cyan" />
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
          <FaInstagramSquare size="1.2rem" className="text-dracula-purple" />
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
  return (
    <AnimatePresence>
      {!isOpen || selectedData == null ? null : (
        <motion.div
          onClick={onClose}
          variants={{
            offscreen: {
              opacity: 0,
              x: 200,
            },
            onscreen: {
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20,
              },
            },
            exit: {
              opacity: 0,
              x: -50,
              transition: {
                duration: 0.3,
              },
            },
          }}
          initial="offscreen"
          whileInView="onscreen"
          exit="exit"
          viewport={{ once: false, amount: 0 }}
          className={`touch-none fixed right-0 left-0 bottom-0 z-50 h-modal overflow-y-auto !overflow-x-hidden md:inset-0 md:h-full backdrop-blur-md ${selectedData.modalColor} bg-opacity-20`}
        >
          <button
            aria-label="Close"
            type="button"
            onClick={onClose}
            className="!fixed mt-2 right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <HiOutlineX aria-hidden className="w-6 h-6" />
          </button>
          <motion.div
            variants={{
              offscreen: {
                opacity: 0,
                x: 200,
              },
              onscreen: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                },
              },
              exit: {
                opacity: 0,
                x: -50,
                transition: {
                  duration: 0.3,
                },
              },
            }}
            initial="offscreen"
            whileInView="onscreen"
            exit="exit"
            viewport={{ once: false, amount: 0 }}
          >
            {isOpen ? (
              <div className="flex items-center justify-center h-fit w-fit">
                <ReactPlayer
                  url={selectedData.video}
                  pip
                  width="100%"
                  style={{
                    display: videoReady ? 'flex' : 'none',
                  }}
                  onReady={() => setVideoReady(true)}
                  onError={() => setVideoReady(false)}
                />
                {!videoReady && <Spinner />}
              </div>
            ) : null}
            {selectedData.content}
            <SocialLink
              twitter={selectedData?.twitterUrl}
              instagram={selectedData?.instagramUrl}
              youtube={selectedData?.youtubeUrl}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OshinokoCharacterPane;
