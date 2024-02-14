/* eslint-disable react/no-unstable-nested-components */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { PageProps, navigate, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Img } from 'react-image';
import { StaticImage } from 'gatsby-plugin-image';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import {
  AnimatePresence,
  motion,
  useIsomorphicLayoutEffect,
} from 'framer-motion';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch';
import { Badge, Tooltip } from '@mantine/core';
import Spinner from '../../components/spinner';
import { formatDateMonthName } from '../../utils/format-date';
import CodeCopyToolbar from '../../components/code-copy-toolbar';
import BlogPostHeading from '../../components/blogpost-heading';
import slugify from '../../utils/slugify';
import ListOfContent, { TOCData } from '../../components/list-of-content';
import SEOHead from '../../components/seo-head';
import ImagePanControls from '../../components/image-pan-control';
import ShareButton from '../../components/share-button';
import InlineCode from '../../components/inline-code';
import getImageUrl from '../../utils/getImageUrl';

export const blogPostQuery = graphql`
  query BlogPost($slug: String) {
    allStrapiArticle(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        slug
        title
        description
        content {
          data {
            content
          }
        }
        updatedAt
        publishedAt
        tags {
          name
          color
        }
        categories {
          name
          color
        }
        cover {
          formats {
            thumbnail {
              url
            }
            small {
              url
            }
          }
        }
      }
    }
  }
`;

const Post: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  location,
  ...queryResponse
}) => {
  const finalBlogData = queryResponse.data.allStrapiArticle.nodes[0];

  useEffect(() => {
    const element = document.getElementById('main-container');
    element?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, []);

  const backToPrevPage = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    const blogPageQueryString = (location?.state as any)?.queryString;
    navigate(blogPageQueryString ? `/blogs?${blogPageQueryString}` : '/blogs');
  }, [location?.state]);

  const slug = useMemo(
    () => finalBlogData.slug as string,
    [finalBlogData.slug]
  );

  const anchor = useMemo(
    () => location.hash.replace('#/', '').split('#')[1],
    [location.hash]
  );

  const blogUpdatedDate = useMemo(
    () =>
      finalBlogData
        ? formatDateMonthName(finalBlogData!.updatedAt as string)
        : null,
    [finalBlogData]
  );

  const hastToPlainText = useCallback((node: any) => {
    if (node.type === 'text') {
      return node.value;
    }

    if (node.type === 'element' && node.children) {
      return node.children.map(hastToPlainText).join('');
    }

    return '';
  }, []);

  const tableOfContentData = useRef<TOCData[]>([]);
  const [tocData, setTocData] = useState<TOCData[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (tableOfContentData) {
      setTocData(tableOfContentData.current);
    }
  }, []);

  const variants = useMemo(
    () => ({
      open: {
        transition: {
          duration: 0.2,
          staggerChildren: 0.2,
          delayChildren: 0.5,
        },
      },
      closed: {
        transition: { staggerChildren: 0.01, staggerDirection: -1 },
      },
    }),
    []
  );

  const elementVariants = useMemo(
    () => ({
      open: {
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
      closed: {
        opacity: 0,
        transition: {
          y: { stiffness: 1000 },
        },
      },
    }),
    []
  );

  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  return (
    <>
      <SEOHead
        title="Void Dojo | Post"
        description={
          finalBlogData == null
            ? undefined
            : `✍${finalBlogData?.title}\n${finalBlogData?.description}`
        }
        summaryType={finalBlogData == null ? 'default' : 'large'}
        image={
          finalBlogData?.cover != null
            ? getImageUrl(
                finalBlogData!.cover.formats?.thumbnail?.url as string
              )
            : 'https://www.cms.void-dojo.ninja/uploads/small_mya_27a0bdbaed.webp'
        }
        imageHeight={finalBlogData == null ? undefined : '630'}
        imageWidth={finalBlogData == null ? undefined : '1200'}
      />
      <AnimatePresence>
        <motion.div
          className="contents"
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <button
            aria-label="left"
            type="button"
            onClick={() => {
              backToPrevPage();
            }}
            className="fixed z-[50] top-2 w-fit h-fit left-0 sm:left-2 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <FaAngleLeft aria-hidden className="w-6 h-6" />
          </button>
          {finalBlogData && (
            <>
              <motion.div
                variants={elementVariants}
                className="flex flex-col items-center justify-center gap-2"
              >
                <div className="flex items-center justify-center w-screen my-10 pointer-events-none select-none bg-dracula-darker/30 backdrop-blur-sm">
                  <Img
                    className="object-contain w-full h-[24vh]"
                    src={getImageUrl(
                      (finalBlogData.cover?.formats?.small?.url as string) ??
                        (finalBlogData.cover?.formats?.thumbnail?.url as string)
                    )}
                    alt="blog-cover-image"
                    decode={false}
                    loader={
                      <div className="flex flex-col items-center justify-center w-full h-[24vh]">
                        <Spinner />
                      </div>
                    }
                    unloader={
                      <div className="flex flex-col items-center justify-center w-full h-[24vh]">
                        <StaticImage
                          src="../../images/home.webp"
                          alt="back to home"
                          layout="constrained"
                          height={240}
                          placeholder="blurred"
                        />
                      </div>
                    }
                  />
                </div>
                <div className="flex items-center justify-center w-screen text-2xl sm:text-5xl">
                  <span className="leading-none text-center text-dracula-blue-300">
                    {finalBlogData.title}
                  </span>
                </div>
                <div className="px-[10rem] py-4 gap-y-2 flex flex-col">
                  <div className="flex items-center justify-center w-screen">
                    {blogUpdatedDate}
                  </div>
                  <div className="flex items-center justify-center gap-1 uppercase">
                    {finalBlogData!.tags!.map((t) => (
                      <Badge key={t!.name} color={t!.color as string}>
                        {t!.name}
                      </Badge>
                    ))}
                    {finalBlogData!.categories!.map((t) => (
                      <Badge key={t!.name} color={t!.color as string}>
                        {t!.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <Tooltip
                      className="font-primary"
                      label="Copy article share link"
                    >
                      <ShareButton slug={slug} showLabel className="!w-fit" />
                    </Tooltip>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                  <ListOfContent
                    data={tocData}
                    className="self-center w-full mt-12"
                  />
                </div>
                {/* <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                  <ListOfContent
                    data={tocData}
                    className="self-center w-3/4 mt-12"
                  />
                  <div className="flex flex-col">
                    <div className="flex mt-6">
                      <svg
                        className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </div>
                    <blockquote>
                      <div className="max-w-[40ch] sm:max-w-[40ch] text-dracula-dark-300 text-center px-10">
                        {finalBlogData.description}
                      </div>
                    </blockquote>
                  </div>
                </div> */}
              </motion.div>
              <motion.div variants={elementVariants}>
                <hr className="h-1 mx-auto my-4 border-0 rounded w-[80vw] md:my-10 bg-dracula-dark" />
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[
                    // the plugin order matters
                    rehypeCodeTitles,
                    [rehypePrism, { showLineNumbers: true }],
                    rehypeRaw,
                  ]}
                  components={{
                    h1({ children }) {
                      const id = slugify(String(children[0]));
                      tableOfContentData.current = [
                        ...tableOfContentData.current,
                        {
                          heading: String(children),
                          anchorLink: id,
                          level: 0,
                          slug,
                        },
                      ];
                      return (
                        <BlogPostHeading
                          component="h1"
                          id={id}
                          initAnchor={anchor}
                          slug={slug}
                        >
                          {children}
                        </BlogPostHeading>
                      );
                    },
                    h2({ children }) {
                      const id = slugify(String(children[0]));
                      tableOfContentData.current = [
                        ...tableOfContentData.current,
                        {
                          heading: String(children),
                          anchorLink: id,
                          level: 1,
                          slug,
                        },
                      ];
                      return (
                        <BlogPostHeading
                          component="h2"
                          id={id}
                          initAnchor={anchor}
                          slug={slug}
                        >
                          {children}
                        </BlogPostHeading>
                      );
                    },
                    h3({ children }) {
                      const id = slugify(String(children[0]));
                      tableOfContentData.current = [
                        ...tableOfContentData.current,
                        {
                          heading: String(children),
                          anchorLink: id,
                          level: 2,
                          slug,
                        },
                      ];
                      return (
                        <BlogPostHeading
                          component="h3"
                          id={id}
                          initAnchor={anchor}
                          slug={slug}
                        >
                          {children}
                        </BlogPostHeading>
                      );
                    },
                    h4({ children }) {
                      const id = slugify(String(children[0]));
                      tableOfContentData.current = [
                        ...tableOfContentData.current,
                        {
                          heading: String(children),
                          anchorLink: id,
                          level: 3,
                          slug,
                        },
                      ];
                      return (
                        <BlogPostHeading
                          component="h4"
                          id={id}
                          initAnchor={anchor}
                          slug={slug}
                        >
                          {children}
                        </BlogPostHeading>
                      );
                    },
                    h5({ children }) {
                      const id = slugify(String(children[0]));
                      tableOfContentData.current = [
                        ...tableOfContentData.current,
                        {
                          heading: String(children),
                          anchorLink: id,
                          level: 4,
                          slug,
                        },
                      ];
                      return (
                        <BlogPostHeading
                          component="h5"
                          id={id}
                          initAnchor={anchor}
                          slug={slug}
                        >
                          {children}
                        </BlogPostHeading>
                      );
                    },
                    code({
                      node,
                      inline,
                      className,
                      children,
                      ...componentProps
                    }) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <div className="overflow-x-hidden">
                          <CodeCopyToolbar
                            lang={match[1]}
                            text={hastToPlainText(node)}
                          />
                          <div className="!overflow-x-auto !pb-4 !px-4 mt-6 sm:mt-4">
                            <code
                              className={cn(
                                className,
                                '!whitespace-pre-wrap !text-xs'
                              )}
                              {...componentProps}
                            >
                              {children}
                            </code>
                          </div>
                        </div>
                      ) : (
                        <InlineCode className={className} {...componentProps}>
                          {children}
                        </InlineCode>
                      );
                    },
                    img(imgProps) {
                      const { src, alt, height, width } = imgProps;

                      if (['inline', 'emoji'].includes(alt ?? '')) {
                        return (
                          <Img
                            className="inline float-auto !mt-0 !mb-0"
                            src={src ?? ''}
                            width={width}
                            height={height}
                            alt={`inline ${src}`}
                            loader={
                              <div className="items-center justify-center inline-block w-4 h-4">
                                <Spinner className="!w-4 !h-4" />
                              </div>
                            }
                            unloader={
                              <div className="items-center justify-center inline-block w-4 h-4">
                                <FcRemoveImage size="1.25rem" />
                              </div>
                            }
                          />
                        );
                      }

                      return (
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
                                    'object-cover w-screen rounded-md'
                                  )}
                                  src={src ?? ''}
                                  alt={alt}
                                  loader={
                                    <div className="flex flex-col items-center justify-center w-[46ch] h-[32ch] ipad:w-[80ch] sm:w-[60ch]">
                                      <Spinner />
                                    </div>
                                  }
                                  unloader={
                                    <div className="flex flex-col items-center justify-center w-[46ch] h-[32ch] ipad:w-[80ch] sm:w-[60ch]">
                                      <FcRemoveImage size="5rem" />
                                      <div>Fail to load image</div>
                                    </div>
                                  }
                                />
                              </TransformComponent>
                            </>
                          )}
                        </TransformWrapper>
                      );
                    },
                    p(paragraphProps) {
                      const { children } = paragraphProps;
                      return <span>{children}</span>;
                    },
                  }}
                  className="m-auto pb-20 break-words text-xs sm:text-md leading-[1.65rem] sm:leading-[2.2rem] prose sm:prose-lg prose-invert prose-pink max-w-[54ch] ipad:max-w-[80ch] px-8"
                >
                  {finalBlogData.content?.data?.content as string}
                </ReactMarkdown>
              </motion.div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Post;
