/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from '@tanstack/react-query';
import { IoIosImages } from '@react-icons/all-files/io/IoIosImages';
import { HiOutlineX } from '@react-icons/all-files/hi/HiOutlineX';
import { HiDownload } from '@react-icons/all-files/hi/HiDownload';
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { useCallback, useMemo, useState, MouseEventHandler } from 'react';
import { Pagination } from 'flowbite-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';
import { Img } from 'react-image';
import { saveAs } from 'file-saver';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import Layout from '../components/layout';
import fetchGallery, { GalleryData } from '../apis/fetch-gallery';
import Spinner from '../components/spinner';
import LazyImg from '../components/lazyload-img';

const GalleryPage = () => {
  const { data, isLoading, isError } = useQuery(['gallery'], fetchGallery);
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
  const [gallery, setGallery] = useState<GalleryData | undefined>();
  const [openDesc, setOpenDesc] = useState(true);

  const [previewCurrentPage, setPreviewCurrentPage] = useState(1);

  const handleOpenFullImage = useCallback((d: GalleryData) => {
    setPreviewCurrentPage(1);
    setGallery(d);
  }, []);

  const onArtworkClose: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setGallery(undefined);
    }, []);

  const onArtworkDownload = useCallback((url: string, name: string) => {
    saveAs(url, name);
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center pt-10">
        <div className="w-fit">
          <div className="-mx-10 h-[1.5rem] -mb-8 bg-dracula-yellow-400/30 -skew-x-12 backdrop-blur-sm" />
          <div className="flex">
            <h2 className="z-50 !text-dracula-yellow-100">Gallery</h2>{' '}
            <IoIosImages
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
        {gallery && (
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
            className="fixed top-0 z-[51] w-screen h-screen bg-dracula-darker/30 backdrop-blur-sm touch-none"
            onClick={() => {
              setGallery(undefined);
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
              <div className="fixed flex items-center justify-center rounded-lg h-[4.7rem] w-9 top-4 right-4 bg-dracula-darker-800">
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
                    onArtworkDownload(
                      gallery.images[previewCurrentPage - 1].url,
                      gallery.name
                    )
                  }
                  className="fixed z-[61] top-14 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <HiDownload aria-hidden className="w-6 h-6" />
                </button>
              </div>
              <button
                aria-label="left"
                type="button"
                onClick={() => {
                  const currentIndex = data?.findIndex(
                    (it) => it.id === gallery.id
                  );
                  if (currentIndex == null) return;
                  setPreviewCurrentPage(1);
                  setGallery(
                    data?.[(currentIndex - 1 + data.length) % data.length]
                  );
                }}
                className="fixed z-[61] top-1/2 w-fit h-fit left-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <FaAngleLeft aria-hidden className="w-6 h-6" />
              </button>
              <button
                aria-label="right"
                type="button"
                onClick={() => {
                  const currentIndex = data?.findIndex(
                    (it) => it.id === gallery.id
                  );
                  if (currentIndex == null) return;
                  setPreviewCurrentPage(1);
                  setGallery(data?.[(currentIndex + 1) % data.length]);
                }}
                className="fixed z-[61] top-1/2 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <FaAngleRight aria-hidden className="w-6 h-6" />
              </button>
              <Img
                className={cn('object-scale-down w-[80vw] h-[80vh]', {
                  '!h-[70vh]': isMobile,
                })}
                src={gallery.images[previewCurrentPage - 1].formats.medium.url}
                alt={gallery.images[previewCurrentPage - 1].alternativeText}
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
              <div
                className={cn(
                  'fixed z-[61] left-4 bottom-0 bg-dracula-darker w-fit h-8 py-1 px-4 cursor-pointer flex justify-center items-center rounded-t-md text-dracula-dark-300 text-lg sm:text-2xl pt-2 select-none',
                  { hidden: openDesc }
                )}
                onClick={() => {
                  setOpenDesc((prev) => !prev);
                }}
              >
                ⯅
              </div>
              {openDesc && (
                <div className="fixed flex flex-col z-[61] -bottom-[1px] p-4 w-full h-fit rounded-lg text-sm text-gray-400 bg-dracula-darker/80 backdrop-blur-sm break-all">
                  <div className="flex justify-between">
                    <button
                      aria-label="hide"
                      type="button"
                      onClick={() => {
                        setOpenDesc((prev) => !prev);
                      }}
                      className="flex z-[61] mb-2 w-fit h-fit rounded-lg bg-transparent px-4 text-sm text-gray-400 border-dracula-dark-600 border hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      ▼
                    </button>
                    {gallery.images.length > 1 && (
                      <Pagination
                        className="flex self-center mb-2 -mt-2"
                        theme={{
                          pages: {
                            previous: {
                              base: 'rounded-l-lg bg-dracula-dark px-3 text-gray-200 enabled:hover:bg-dracula-gray enabled:hover:text-light',
                              icon: 'h-4 w-4',
                            },
                            next: {
                              base: 'rounded-r-lg bg-dracula-dark px-3 text-gray-200 enabled:hover:bg-dracula-gray enabled:hover:text-light',
                              icon: 'h-4 w-4',
                            },
                            selector: {
                              base: 'w-12 bg-dracula-darker text-gray-500 enabled:hover:bg-dracula-gray-100 enabled:hover:text-gray-700',
                              active:
                                'bg-dracula-purple-200 text-dracula-purple-600 hover:bg-dracula-purple-300 hover:text-dracula-purple-700',
                            },
                          },
                        }}
                        currentPage={previewCurrentPage}
                        layout="navigation"
                        onPageChange={(page) => {
                          setPreviewCurrentPage(page);
                        }}
                        nextLabel="→"
                        previousLabel="←"
                        totalPages={gallery.images.length}
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-between mb-2 sm:flex-row">
                    <div className="font-bold">{gallery.name}</div>
                    <div className="italic">{gallery.updatedAt}</div>
                  </div>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="flex text-xs break-all"
                  >
                    {gallery.captions}
                  </ReactMarkdown>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default GalleryPage;
