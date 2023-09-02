/* eslint-disable react/no-unstable-nested-components */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { PageProps, navigate } from 'gatsby';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Img } from 'react-image';
import { StaticImage } from 'gatsby-plugin-image';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import { Badge } from 'flowbite-react';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import {
  AnimatePresence,
  motion,
  useIsomorphicLayoutEffect,
} from 'framer-motion';
import Spinner from '../components/spinner';
import fetchBlogs, { BlogData } from '../apis/fetch-blogs';
import { formatDateMonthName } from '../utils/format-date';
import CodeCopyToolbar from '../components/code-copy-toolbar';
import BlogPostHeading from '../components/blogpost-heading';
import slugify from '../utils/slugify';
import ListOfContent, { TOCData } from '../components/list-of-content';

const Post: React.FC<PageProps> = (props) => {
  const { location } = props;
  const backToPrevPage = useCallback(() => {
    navigate('/blogs');
  }, []);

  const slug = useMemo(
    () => location.hash.replace('#/', '').split('#')[0],
    [location.hash]
  );

  const anchor = useMemo(
    () => location.hash.replace('#/', '').split('#')[1],
    [location.hash]
  );

  const postDataPassingIn = useMemo(() => {
    if ((location?.state as { postData: BlogData })?.postData == null)
      return null;

    return (location.state as { postData: BlogData }).postData;
  }, [location]);

  const { data, isLoading, isError } = useQuery(
    [`post/#/${slug}`],
    () => fetchBlogs({ page: 1, pageSize: 1, tags: [], categories: [], slug }),
    { enabled: postDataPassingIn == null && slug !== '' && slug != null }
  );

  const finalBlogData = useMemo(() => {
    if (postDataPassingIn) return postDataPassingIn;
    return data?.blogData[0];
  }, [data, postDataPassingIn]);

  const blogUpdatedDate = useMemo(
    () => (finalBlogData ? formatDateMonthName(finalBlogData.updatedAt) : null),
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

  useEffect(() => {
    if (isLoading) return;
    if (!finalBlogData || !slug) {
      navigate('/404');
    }
  }, [finalBlogData, isLoading, slug]);

  useIsomorphicLayoutEffect(() => {
    if (tableOfContentData) {
      setTocData(tableOfContentData.current);
    }
  }, [isLoading]);

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
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
      closed: {
        y: 25,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 },
        },
      },
    }),
    []
  );
  return (
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
          className="fixed z-[50] top-8 w-fit h-fit left-0 sm:left-2 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <FaAngleLeft aria-hidden className="w-6 h-6" />
        </button>
        {!postDataPassingIn && isLoading && (
          <div className="flex flex-col items-center justify-center w-full mt-10">
            <Spinner />
          </div>
        )}
        {isError && <div>API Error.</div>}
        {finalBlogData && (
          <>
            <motion.div
              variants={elementVariants}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="flex items-center justify-center w-screen my-10 pointer-events-none select-none bg-dracula-darker/30 backdrop-blur-sm">
                <Img
                  className="object-cover"
                  src={finalBlogData.cover}
                  alt="blog-cover-image"
                  loader={
                    <div className="flex flex-col items-center justify-center w-full h-[10vh]">
                      <Spinner />
                    </div>
                  }
                  unloader={
                    <div className="flex flex-col items-center justify-center h-full">
                      <StaticImage
                        src="../../images/home.webp"
                        alt="back to home"
                        layout="constrained"
                        height={240}
                      />
                    </div>
                  }
                />
              </div>
              <div className="flex items-center justify-center w-screen font-sans text-5xl font-extrabold">
                <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                  {finalBlogData.title}
                </span>
              </div>
              <div className="px-[10rem] py-4 gap-y-2 flex flex-col">
                <div className="flex items-center justify-center w-screen">
                  {blogUpdatedDate}
                </div>
                <div className="flex items-center justify-center gap-1 uppercase">
                  {finalBlogData.tags.map((t) => (
                    <Badge key={t.name} color={t.color}>
                      {t.name}
                    </Badge>
                  ))}
                  {finalBlogData.categories.map((t) => (
                    <Badge key={t.name} color={t.color}>
                      {t.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                <ListOfContent data={tocData} className="mt-12" />
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
                    <div className="max-w-[40ch] sm:max-w-[40ch] text-dracula-dark-300">
                      {finalBlogData.description}
                    </div>
                  </blockquote>
                </div>
              </div>
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
                            className={cn(className, '!whitespace-pre-wrap')}
                            {...componentProps}
                          >
                            {children}
                          </code>
                        </div>
                      </div>
                    ) : (
                      <code className={className} {...componentProps}>
                        {children}
                      </code>
                    );
                  },
                }}
                className="m-auto pb-20 text-xs prose sm:prose-lg prose-invert prose-pink max-w-[60ch] ipad:max-w-[80ch] px-8"
              >
                {finalBlogData.content}
              </ReactMarkdown>
            </motion.div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Post;
