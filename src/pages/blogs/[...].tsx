import React, { useCallback, useMemo } from 'react';
import { PageProps, navigate } from 'gatsby';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import Layout from '../../components/layout';
import Spinner from '../../components/spinner';
import fetchBlogs, { BlogData } from '../../apis/fetch-blogs';

const Post: React.FC<PageProps> = (props) => {
  const { location } = props;
  const backToPrevPage = useCallback(() => {
    navigate('/blogs');
  }, []);

  const slug = useMemo(
    () => location.pathname.replace('/blogs/', '').replace('/', ''),
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

  return (
    <Layout>
      Testing {location.pathname}
      <button
        aria-label="left"
        type="button"
        onClick={() => {
          backToPrevPage();
        }}
        className="fixed top-1/2 w-fit h-fit left-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="p-20 text-xs">
          {finalBlogData.content}
        </ReactMarkdown>
      )}
    </Layout>
  );
};

export default Post;
