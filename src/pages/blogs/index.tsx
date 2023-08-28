import { Badge, Pagination } from 'flowbite-react';
import { motion } from 'framer-motion';
import { BiBookBookmark } from '@react-icons/all-files/bi/BiBookBookmark';
import { FaRegFrownOpen } from '@react-icons/all-files/fa/FaRegFrownOpen';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import cn from 'classnames';
import { navigate } from 'gatsby';
import Layout from '../../components/layout';
import fetchTags from '../../apis/fetch-tags';
import Spinner from '../../components/spinner';
import Cube from '../../components/cube';
import BlogCard from '../../components/blog-card';
import fetchCategories from '../../apis/fetch-categories';
import fetchBlogs, { BlogData } from '../../apis/fetch-blogs';

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: tagData, isLoading: tagDataIsLoading } = useQuery(
    ['tags'],
    fetchTags
  );
  const { data: categoryData, isLoading: categoryDataIsLoading } = useQuery(
    ['categories'],
    fetchCategories
  );

  const defaultPagingSize = 3;

  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleTagSelection = useCallback(
    (tag: string) => {
      if (selectedTag.includes(tag)) {
        setSelectedTag((prev) => prev?.filter((t) => t !== tag));
      } else {
        setSelectedTag((prev) => [...prev, tag]);
      }
    },
    [selectedTag]
  );

  const handleCategorySelection = useCallback(
    (category: string) => {
      if (selectedCategory.includes(category)) {
        setSelectedCategory((prev) => prev?.filter((t) => t !== category));
      } else {
        setSelectedCategory((prev) => [...prev, category]);
      }
    },
    [selectedCategory]
  );

  const { data: blogData, isLoading: blogDataIsLoading } = useQuery(
    [
      `blogs-${currentPage}-${defaultPagingSize}-${selectedTag}-${selectedCategory}`,
    ],
    () =>
      fetchBlogs({
        page: currentPage,
        pageSize: defaultPagingSize,
        tags: selectedTag,
        categories: selectedCategory,
      })
  );

  const viewBlogDetails = useCallback((slug: string, postData: BlogData) => {
    const blogUrl = `/blogs/${slug}`.replace(/\/$/, '');
    navigate(blogUrl, {
      state: {
        postData,
      },
    });
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center select-none">
        <Cube
          color="purple"
          icon={<BiBookBookmark size="3.5rem" />}
          className="!scale-[0.35] -mr-4"
        />
        <div className="flex flex-col">
          <div className="font-sans text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              Void Dojo Log
            </span>
          </div>
          <div className="mt-1 text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Blog = () =`{'>'}` footprint.record();
            <span className="animate-ping">█</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-64 p-4 border rounded-lg border-dracula-dark-600 bg-dracula-dark/10 backdrop-blur-md">
          Tags
          <div className="flex flex-wrap gap-1 pt-2 uppercase">
            {tagDataIsLoading && <Spinner />}
            {tagData?.map((it) => (
              <Badge
                color={it.color}
                key={it.id}
                className={cn(
                  'inline cursor-pointer hover:bg-dracula-dark-300 transition-all select-none',
                  {
                    'shadow-[0_1px_4px_4px_rgba(0,0,0,0.3)] shadow-dracula-pink':
                      selectedTag.includes(it.name),
                  }
                )}
                onClick={() => {
                  handleTagSelection(it.name);
                }}
              >
                {it.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className="w-64 p-4 border rounded-lg border-dracula-dark-600 bg-dracula-dark/10 backdrop-blur-md">
          Categories
          <div className="flex flex-wrap gap-1 pt-2 uppercase">
            {categoryDataIsLoading && <Spinner />}
            {categoryData?.map((it) => (
              <Badge
                color={it.color}
                key={it.id}
                className={cn(
                  'inline cursor-pointer hover:bg-dracula-dark-300 transition-all select-none',
                  {
                    'shadow-[0_1px_4px_4px_rgba(0,0,0,0.3)] shadow-dracula-pink':
                      selectedCategory.includes(it.name),
                  }
                )}
                onClick={() => {
                  handleCategorySelection(it.name);
                }}
              >
                {it.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 text-3xl font-bold uppercase text-dracula-dark-200">
        Catalog
      </div>
      <hr className="w-48 h-1 mx-auto my-2 border-0 rounded bg-gradient-to-r from-pink-500 to-violet-500" />
      {blogDataIsLoading && <Spinner className="!w-12 !h-12 mt-4" />}
      {blogData?.blogData.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full uppercase min-h-[25.5rem]">
          <div className="flex gap-2">
            <FaRegFrownOpen size="1.2rem" />
            No post is found !
          </div>
        </div>
      ) : (
        <motion.div
          variants={{
            open: {
              transition: { staggerChildren: 0.07, delayChildren: 0.2 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
          initial="closed"
          animate="open"
          className="grid grid-cols-1 gap-4 px-10 mt-2 mb-8 md:gap-10 sm:grid-cols-3"
        >
          {blogData?.blogData.map((it) => (
            <BlogCard
              key={it.id}
              data={it}
              onClick={() => viewBlogDetails(it.slug, it)}
            />
          ))}
        </motion.div>
      )}
      {blogData && blogData?.blogData.length > 1 && (
        <Pagination
          className="flex self-center mb-8"
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
          currentPage={currentPage}
          layout="pagination"
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
          nextLabel="→"
          previousLabel="←"
          totalPages={blogData?.pagination.pageCount ?? 1}
        />
      )}
    </Layout>
  );
};

export default BlogsPage;
