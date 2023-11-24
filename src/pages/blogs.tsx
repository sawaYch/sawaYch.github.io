import { Badge, Pagination } from 'flowbite-react';
import { AnimatePresence, motion } from 'framer-motion';
import { BiBookBookmark } from '@react-icons/all-files/bi/BiBookBookmark';
import { FaRegFrownOpen } from '@react-icons/all-files/fa/FaRegFrownOpen';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import cn from 'classnames';
import { navigate } from 'gatsby';
import fetchTags from '../apis/fetch-tags';
import Spinner from '../components/spinner';
import Cube from '../components/cube';
import BlogCard from '../components/blog-card';
import fetchCategories from '../apis/fetch-categories';
import fetchBlogs from '../apis/fetch-blogs';

const BlogsPage = () => {
  const { data: tagData, isLoading: tagDataIsLoading } = useQuery(
    ['tags'],
    fetchTags
  );
  const { data: categoryData, isLoading: categoryDataIsLoading } = useQuery(
    ['categories'],
    fetchCategories
  );

  const defaultPagingSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleTagSelection = useCallback(
    (tag: string) => {
      if (selectedTag.includes(tag)) {
        setSelectedTag((prev) => prev?.filter((t) => t !== tag));
      } else {
        setSelectedTag((prev) => [...prev, tag]);
      }
      setCurrentPage(1);
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
      setCurrentPage(1);
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

  const viewBlogDetails = useCallback((slug: string) => {
    const blogUrl = `/post/#/${slug}`.replace(/\/$/, '');
    navigate(blogUrl);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center select-none">
        <Cube
          color="purple"
          icon={<BiBookBookmark size="3.5rem" />}
          className="!scale-[0.35] -mr-4 w-32 h-24"
        />
        <div className="flex flex-col">
          <div className="font-sans text-xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              Navigating the Realm of Reflection
            </span>
          </div>
          <div className="mt-1 text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Blog = () =`{'>'}` footprint.record();
            <span className="animate-ping">█</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 sm:flex-row">
        <div className="px-4 py-1 border rounded-lg w-fit border-dracula-dark-600 bg-dracula-dark/10 backdrop-blur-md">
          <div className="absolute w-10 text-center -translate-y-4 -skew-x-12 border rounded-lg bg-dracula-dark backdrop-blur-sm border-dracula-dark-600">
            <div className="skew-x-12">TAG</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1 pt-2 pb-1 uppercase">
            {tagDataIsLoading ? <Spinner /> : null}
            {tagData?.map((it) => (
              <Badge
                // style={{backgroundColor: it.color}} //need handle bg and font color, prefer flowbite react preset
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
        <div className="px-4 py-1 border rounded-lg w-fit border-dracula-dark-600 bg-dracula-dark/10 backdrop-blur-md">
          <div className="absolute w-20 text-center -translate-y-4 border rounded-lg bg-dracula-dark backdrop-blur-sm border-dracula-dark-600">
            CATEGORY
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1 pt-2 pb-1 uppercase">
            {categoryDataIsLoading ? <Spinner /> : null}
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
      <hr className="w-48 h-1 mx-auto my-2 border-0 rounded bg-gradient-to-r from-pink-500 to-violet-500" />
      {blogDataIsLoading ? <Spinner className="!w-12 !h-12 mt-4" /> : null}
      <AnimatePresence>
        {blogData?.blogData.length === 0 || blogData == null ? (
          <div className="flex flex-col items-center justify-center w-full uppercase min-h-[25.5rem]">
            <div className="flex gap-2">
              <FaRegFrownOpen size="1.2rem" />
              No post is found !
            </div>
          </div>
        ) : (
          <motion.div
            variants={{
              hidden: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
              visible: {
                rotate: 0,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="flex flex-col w-full gap-2 px-10 mt-2 mb-2 sm:w-1/2" // NOTE: tweak: not using card grid
          >
            {blogData.blogData.map((it) => (
              <BlogCard
                key={it.id}
                data={it}
                onClick={() => viewBlogDetails(it.slug)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {blogData && blogData.pagination.pageCount > 1 && (
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
    </>
  );
};

export default BlogsPage;
