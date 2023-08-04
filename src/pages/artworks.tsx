/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from '@tanstack/react-query';
import { FaPaintBrush } from '@react-icons/all-files/fa/FaPaintBrush';
import { HiOutlineX } from '@react-icons/all-files/hi/HiOutlineX';
import { HiDownload } from '@react-icons/all-files/hi/HiDownload';
import { useCallback, useMemo, useState, MouseEventHandler } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';
import { Img } from 'react-image';
import { saveAs } from 'file-saver';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import Layout from '../components/layout';
import fetchArtworks, { ArtworkData } from '../apis/fetch-artworks';
import Spinner from '../components/spinner';
import LazyImg from '../components/lazyload-img';

const ArtworksPage = () => {
  const { data, isLoading, isError } = useQuery(['artworks'], fetchArtworks);
  const variants = useMemo(
    () => ({
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }),
    []
  );
  const [artwork, setArtwork] = useState<ArtworkData | undefined>();

  const handleOpenFullImage = useCallback((d: ArtworkData) => {
    setArtwork(d);
  }, []);

  const onArtworkClose: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setArtwork(undefined);
    }, []);

  const onArtworkDownload = useCallback((url: string, name: string) => {
    saveAs(url, name);
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center pt-10">
        <div className="w-fit">
          <div className="-mx-10 h-[1.5rem] -mb-8 bg-dracula-buffy-400/30 -skew-x-12 backdrop-blur-sm" />
          <div className="flex">
            <h2 className="z-50 !text-dracula-buffy-100">Artworks</h2>{' '}
            <FaPaintBrush
              size="2rem"
              className="z-50 ml-2 text-dracula-dark-200"
            />
          </div>
        </div>
      </div>
      {isError && <div>API Error.</div>}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <Spinner />
        </div>
      ) : (
        <motion.div
          variants={variants}
          initial="closed"
          animate="open"
          className="grid grid-cols-1 gap-2 px-10 pb-10 sm:grid-cols-3"
        >
          {data &&
            data.map((it) => (
              <motion.div
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: { stiffness: 10, velocity: -1000 },
                    },
                  },
                  closed: {
                    y: 50,
                    opacity: 0,
                    transition: {
                      y: { stiffness: 10 },
                    },
                  },
                }}
                key={it.id}
                className="flex flex-col items-center justify-around p-4 rounded-lg cursor-pointer bg-dracula-darker"
                onClick={() => handleOpenFullImage(it)}
              >
                <LazyImg
                  src={it.images[0].formats.thumbnail.url}
                  alt={it.images[0].alternativeText}
                />
                <div className="pt-4">{it.name}</div>
              </motion.div>
            ))}
        </motion.div>
      )}
      <AnimatePresence>
        {artwork && (
          <motion.div
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  y: { stiffness: 10, velocity: -1000 },
                },
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 10 },
                },
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 z-[51] w-screen h-screen bg-dracula-darker/30 backdrop-blur-sm"
            onClick={() => {
              setArtwork(undefined);
            }}
          >
            <motion.div
              variants={{
                open: {
                  opacity: 1,
                  transition: {
                    y: { stiffness: 10, velocity: -1000 },
                  },
                },
                closed: {
                  opacity: 0,
                  transition: {
                    y: { stiffness: 10 },
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className={cn(
                'absolute w-[80vw] h-[80vh] left-0 right-0 top-0 ml-auto mr-auto translate-y-[10vh] bg-dracula-dark z-[60] rounded-lg',
                { '!h-[70vh]': isMobile }
              )}
              onClick={(evt) => {
                evt.stopPropagation();
              }}
            >
              <div className="fixed flex items-center justify-center rounded-lg h-[4.9rem] w-9 top-4 right-4 bg-dracula-darker">
                <button
                  aria-label="Close"
                  type="button"
                  onClick={onArtworkClose}
                  className="fixed z-[61] top-4 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <HiOutlineX aria-hidden className="w-6 h-6" />
                </button>
                <button
                  aria-label="Download"
                  type="button"
                  onClick={() =>
                    onArtworkDownload(artwork.images[0].url, artwork.name)
                  }
                  className="fixed z-[61] top-14 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <HiDownload aria-hidden className="w-6 h-6" />
                </button>
              </div>
              <Img
                className={cn('object-scale-down w-[80vw] h-[80vh]', {
                  '!h-[70vh]': isMobile,
                })}
                src={artwork.images[0].url}
                alt={artwork.images[0].alternativeText}
                loader={
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <Spinner className="!w-24 !h-24" />
                  </div>
                }
                unloader={
                  <div className="flex flex-col items-center justify-center h-full">
                    <FcRemoveImage size="5rem" />
                    <div>Fail to load image</div>
                  </div>
                }
              />
              <div className="fixed z-[61] -bottom-[1px] p-4 w-full h-fit rounded-lg text-sm text-gray-400 bg-dracula-darker/80 backdrop-blur-sm">
                <div className="mb-2">{artwork.updatedAt}</div>
                <div>{artwork.caption}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ArtworksPage;
