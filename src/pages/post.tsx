import React, { useCallback, useMemo } from 'react';
import { PageProps, navigate } from 'gatsby';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Img } from 'react-image';
import { StaticImage } from 'gatsby-plugin-image';
import { Badge } from 'flowbite-react';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import Layout from '../components/layout';
import Spinner from '../components/spinner';
import fetchBlogs, { BlogData } from '../apis/fetch-blogs';
import { formatDateMonthName } from '../utils/format-date';
import SEOHead from '../components/seo-head';

export const Head = () => <SEOHead />;

const Post: React.FC<PageProps> = (props) => {
  const { location } = props;
  const backToPrevPage = useCallback(() => {
    navigate('/blogs');
  }, []);

  const slug = useMemo(
    () => location.pathname.replace('/blogs/', '').split('/')?.[0],
    [location.pathname]
  );

  const postDataPassingIn = useMemo(() => {
    if ((location?.state as { postData: BlogData })?.postData == null)
      return null;

    return (location.state as { postData: BlogData }).postData;
  }, [location]);

  const { data, isLoading, isError } = useQuery(
    [`blogs/${slug}`],
    () => fetchBlogs({ page: 1, pageSize: 1, tags: [], categories: [], slug }),
    { enabled: postDataPassingIn == null }
  );

  const finalBlogData = useMemo(() => {
    if (postDataPassingIn) return postDataPassingIn;
    return data?.blogData[0];
  }, [data, postDataPassingIn]);

  const blogUpdatedDate = useMemo(
    () => (finalBlogData ? formatDateMonthName(finalBlogData.updatedAt) : null),
    [finalBlogData]
  );

  return (
    <Layout>
      <button
        aria-label="left"
        type="button"
        onClick={() => {
          backToPrevPage();
        }}
        className="fixed z-[61] top-8 w-fit h-fit left-0 sm:left-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
          <div className="flex flex-col items-center justify-center gap-2">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                {finalBlogData.title}
              </span>
            </div>
            <div className="px-[10rem] py-4 gap-y-2 flex flex-col">
              <div className="flex items-center justify-center w-screen">
                {blogUpdatedDate}
              </div>
              <div className="flex items-center justify-center gap-1">
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
              <div className="max-w-[40ch] sm:max-w-[80ch] text-dracula-dark-300">
                {finalBlogData.description}
              </div>
            </blockquote>
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            className="py-20 text-xs prose sm:prose-lg prose-invert prose-pink max-w-[60ch] sm:max-w-[80ch] px-8"
          >
            {finalBlogData.content}
          </ReactMarkdown>
        </>
      )}
    </Layout>
  );
};

export default Post;
