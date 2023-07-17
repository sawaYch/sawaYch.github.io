import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { Modal } from 'flowbite-react';
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

  if (!isOpen || selectedData == null) return null;

  return (
    <Modal
      dismissible
      show={isOpen && selectedData !== null}
      onClose={onClose}
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
        <Modal.Header>{selectedData.name}</Modal.Header>
        <Modal.Body>
          {isOpen ? (
            <ReactPlayer url={selectedData.video} className="w-32" />
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          {selectedData.content}
          <SocialLink
            twitter={selectedData?.twitterUrl}
            instagram={selectedData?.instagramUrl}
            youtube={selectedData?.youtubeUrl}
          />
        </Modal.Footer>
      </motion.div>
    </Modal>
  );
};

export default OshinokoCharacterPane;
