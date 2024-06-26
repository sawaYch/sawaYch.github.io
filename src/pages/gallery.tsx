/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  IconPhoto,
  IconX,
  IconDownload,
  IconChevronRight,
  IconChevronLeft,
  IconChevronDown,
  IconChevronUp,
  IconPhotoCancel,
} from '@tabler/icons-react';

import {
  useCallback,
  useMemo,
  useState,
  MouseEventHandler,
  useRef,
} from 'react';
import { Text } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';
import { PageProps, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { isMobile } from 'react-device-detect';
import { Img } from 'react-image';
import { saveAs } from 'file-saver';
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';
import { GalleryData } from '../apis/fetch-gallery';
import Spinner from '../components/spinner';
import LazyImg from '../components/lazyload-img';
import ImagePanControls from '../components/image-pan-control';
import getImageUrl from '../utils/getImageUrl';
import VoidHeading from '../components/void-heading';

export const galleryQuery = graphql`
  query GalleryPage {
    allStrapiGallery(sort: { updatedAt: DESC }) {
      nodes {
        id
        name
        captions
        image {
          name
          alternativeText
          caption
          width
          height
          url
          formats {
            thumbnail {
              name
              width
              height
              url
            }
            small {
              name
              width
              height
              url
            }
            medium {
              name
              width
              height
              url
            }
            large {
              name
              width
              height
              url
            }
          }
        }
        updatedAt
      }
    }
  }
`;

const GalleryPage = ({
  ...queryResponse
}: PageProps<Queries.GalleryPageQuery>) => {
  const data = useMemo(() => {
    const d: GalleryData[] = queryResponse.data.allStrapiGallery
      .nodes as unknown as GalleryData[];
    return d.map((it) => {
      const dd = it;
      dd.image = [...it.image.sort((a, b) => a.name.localeCompare(b.name))];
      return dd;
    });
  }, [queryResponse.data.allStrapiGallery.nodes]);

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
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [gallery, setGallery] = useState<GalleryData | undefined>();
  const [openDesc, setOpenDesc] = useState(true);

  const [previewCurrentPage, setPreviewCurrentPage] = useState(1);

  const handleOpenFullImage = useCallback((d: GalleryData) => {
    setPreviewCurrentPage(1);
    const dGallery: GalleryData = d;
    dGallery.image = [...d.image.sort((a, b) => a.name.localeCompare(b.name))];
    setGallery(dGallery);
  }, []);

  const onArtworkClose: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setGallery(undefined);
    }, []);

  const onArtworkDownload = useCallback((url: string, name: string) => {
    saveAs(url, name);
  }, []);

  return (
    <>
      <VoidHeading
        icon={<IconPhoto size="3.5rem" />}
        text="Gallery"
        color="yellow"
        extra={<Text c="dimmed">Photo of random goods...?</Text>}
      />
      <motion.div
        variants={variants}
        initial="closed"
        animate="open"
        className="grid grid-cols-2 gap-2 px-10 mb-20 sm:grid-cols-4"
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
                  y: 25,
                  opacity: 0,
                  transition: {
                    y: { stiffness: 10 },
                  },
                },
              }}
              key={it.id}
              className="flex flex-col items-center justify-around p-1 cursor-pointer select-none bg-dracula-darker"
              onClick={() => handleOpenFullImage(it as unknown as GalleryData)}
            >
              <LazyImg
                src={getImageUrl(it.image?.[0]?.formats?.thumbnail?.url ?? '')}
                alt={it.image?.[0]?.alternativeText ?? ''}
              />
            </motion.div>
          ))}
      </motion.div>
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
                y: 25,
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
                    data?.[
                      (currentIndex - 1 + data.length) % data.length
                    ] as unknown as GalleryData
                  );
                }}
                className="fixed z-[61] top-1/2 w-fit h-fit left-1 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconChevronLeft aria-hidden className="w-6 h-6" />
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
                  setGallery(
                    data?.[
                      (currentIndex + 1) % data.length
                    ] as unknown as GalleryData
                  );
                }}
                className="fixed z-[61] top-1/2 w-fit h-fit right-1 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconChevronRight aria-hidden className="w-6 h-6" />
              </button>
              <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                ref={transformComponentRef}
              >
                {(utils) => (
                  <>
                    <ImagePanControls
                      zoomIn={utils.zoomIn}
                      zoomOut={utils.zoomOut}
                      resetTransform={utils.resetTransform}
                    />
                    <TransformComponent>
                      <Img
                        className={cn(
                          'object-scale-down w-[80vw] h-[75vh] pb-6',
                          {
                            '!h-[60vh]': isMobile,
                          }
                        )}
                        src={getImageUrl(
                          gallery.image?.[previewCurrentPage - 1].formats?.large
                            ?.url ??
                            gallery.image?.[previewCurrentPage - 1].formats
                              ?.small?.url ??
                            gallery.image?.[previewCurrentPage - 1].formats
                              ?.thumbnail?.url
                        )}
                        alt={
                          gallery.image?.[previewCurrentPage - 1]
                            .alternativeText
                        }
                        loader={
                          <div className="flex flex-col items-center justify-center w-[80vw] h-[70vh]">
                            <Spinner className="!w-24 !h-24" />
                          </div>
                        }
                        unloader={
                          <div className="flex flex-col items-center justify-center h-full">
                            <IconPhotoCancel size="5rem" />
                            <div>Fail to load image</div>
                          </div>
                        }
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
              <div
                className={cn(
                  'fixed z-[61] left-4 bottom-0 bg-dracula-darker w-fit h-fit px-4 cursor-pointer flex pt-1 justify-center items-center rounded-t-md text-dracula-dark-300 select-none',
                  { hidden: openDesc }
                )}
                onClick={() => {
                  setOpenDesc((prev) => !prev);
                }}
              >
                <IconChevronUp
                  size="1.2rem"
                  className="hover:text-dracula-dark-100"
                />
              </div>
              <div className="fixed flex items-center justify-center rounded-lg h-[4.7rem] w-9 top-4 right-4 bg-dracula-darker-800">
                <button
                  aria-label="Close"
                  type="button"
                  onClick={onArtworkClose}
                  className="fixed z-[90] top-4 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <IconX aria-hidden className="w-6 h-6" />
                </button>
                <button
                  aria-label="Download"
                  type="button"
                  onClick={() =>
                    onArtworkDownload(
                      getImageUrl(gallery.image[previewCurrentPage - 1].url),
                      gallery.name
                    )
                  }
                  className="fixed z-[90] top-14 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <IconDownload aria-hidden className="w-6 h-6" />
                </button>
              </div>
              {openDesc && (
                <div className="fixed flex flex-col z-[61] -bottom-[1px] p-4 w-full h-fit rounded-lg text-sm text-gray-400 bg-dracula-darker/80 backdrop-blur-sm break-all">
                  {gallery.image.length > 1 && (
                    <div className="flex w-full p-[2px] mb-2 overflow-x-auto border-2 rounded-md border-dracula-dark-700">
                      {gallery.image.map((it, idx) => (
                        <Img
                          className={cn(
                            'object-contain w-[4rem] h-[2.5rem] hover:border-dracula-purple border-2 border-dracula-dark/0 rounded-md',
                            {
                              'border-dracula-pink':
                                previewCurrentPage === idx + 1,
                            }
                          )}
                          src={getImageUrl(it.formats.thumbnail.url)}
                          alt={`gallery-images ${it.name} thumbnail`}
                          loader={
                            <div className="flex flex-col items-center justify-center object-contain w-[4rem] h-[2.5rem] border-dracula-dark border-2">
                              <Spinner />
                            </div>
                          }
                          unloader={
                            <div className="flex flex-col items-center justify-center object-contain w-[4rem] h-[2.5rem]">
                              <StaticImage
                                src="../images/home.webp"
                                alt="back to home"
                                layout="constrained"
                                height={240}
                                placeholder="blurred"
                              />
                            </div>
                          }
                          onClick={() => {
                            setPreviewCurrentPage(idx + 1);
                          }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="flex justify-between">
                    <button
                      aria-label="hide"
                      type="button"
                      onClick={() => {
                        setOpenDesc((prev) => !prev);
                      }}
                      className="flex z-[61] mb-2 w-fit h-fit rounded-lg bg-transparent px-4 text-sm text-gray-400 border-dracula-dark-600 border hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <IconChevronDown size="1.2rem" />
                    </button>
                    {/* {gallery.image.length > 1 && (
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
                        totalPages={gallery.image.length}
                      />
                    )} */}
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
    </>
  );
};

export default GalleryPage;
