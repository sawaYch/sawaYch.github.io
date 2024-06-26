import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import cn from 'classnames';
import { Badge } from '@mantine/core';
import { PageProps, navigate, graphql } from 'gatsby';
import { AutoSizer, List, ListRowProps } from 'react-virtualized';
import { IconNotebook, IconMoodSad } from '@tabler/icons-react';
import Cube from '../components/cube';
import BlogRowRenderer from '../components/blog-row-renderer';

export const blogsQuery = graphql`
  query BlogsPage {
    allStrapiTag {
      nodes {
        id
        name
        color
      }
    }
    allStrapiArticle(sort: { publishedAt: DESC }) {
      nodes {
        id
        title
        slug
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

const BlogsPage = ({
  location,
  ...queryResponse
}: // eslint-disable-next-line no-undef
PageProps<Queries.BlogsPageQuery>) => {
  const tagData = (
    queryResponse.data.allStrapiTag.nodes as {
      id: string;
      name: string;
      color: string;
    }[]
  ).sort((prev, next) => {
    if (prev.name === next.name) return 0;
    if (prev.name > next.name) return 1;
    return -1;
  });

  const blogData = queryResponse.data.allStrapiArticle.nodes;

  const parsedQueryString = queryString.parse(location.search);

  const paramTags: string[] = useMemo(() => {
    if (parsedQueryString.tags == null) return [];
    if (!Array.isArray(parsedQueryString.tags)) return [parsedQueryString.tags];
    const removedNullQueryString: string[] = (
      parsedQueryString.tags as string[]
    )?.filter((it) => it != null);
    return removedNullQueryString;
  }, [parsedQueryString.tags]);

  const [selectedTag, setSelectedTag] = useState<string[]>(paramTags);

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

  useEffect(() => {
    const queryParams = queryString.stringify({
      tags: selectedTag,
    });
    if (queryParams == null || queryParams.length === 0) {
      // eslint-disable-next-line no-restricted-globals
      history.replaceState(null, '', location.pathname);
      return;
    }
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(null, '', `?${queryParams}`);
  }, [location.pathname, selectedTag]);

  const viewBlogDetails = useCallback(
    (slug: string) => {
      const blogUrl = `/blog/${slug}`.replace(/\/$/, '');
      const blogListQueryParam = queryString.stringify({
        tags: selectedTag,
      });
      navigate(blogUrl, {
        state: { queryString: blogListQueryParam },
      });
    },
    [selectedTag]
  );

  const filteredBlogData = useMemo(
    () =>
      selectedTag.length === 0
        ? blogData
        : blogData.filter((it) =>
            selectedTag.some((st) => it.tags?.map((i) => i?.name).includes(st))
          ),
    [blogData, selectedTag]
  );

  const rowRenderer = useCallback(
    (props: ListRowProps) => (
      <BlogRowRenderer
        {...props}
        key={props.key}
        childKey={props.key}
        blogItems={filteredBlogData}
        onViewBlogDetails={viewBlogDetails}
      />
    ),
    [filteredBlogData, viewBlogDetails]
  );

  return (
    <>
      <div
        id="blog-page-heading"
        className="flex items-center justify-center select-none"
      >
        <Cube
          color="purple"
          icon={<IconNotebook size="3.5rem" />}
          className="!scale-[0.35] m-4  w-32 h-24"
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
      <div
        id="blog-page-tag-section"
        className="flex flex-col items-center gap-1 ipad:flex-row"
      >
        <div className="px-4 py-1 mx-4 border rounded-lg w-fit border-dracula-dark-600 bg-dracula-dark/10 backdrop-blur-md">
          <div className="absolute w-10 text-center -translate-y-4 -skew-x-12 border rounded-lg bg-dracula-dark backdrop-blur-sm border-dracula-dark-600">
            <div className="skew-x-12">TAG</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1 pt-2 pb-1 mt-2 uppercase">
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
      </div>
      <hr
        id="blog-page-separator"
        className="w-48 h-1 mx-auto my-2 border-0 rounded bg-gradient-to-r from-pink-500 to-violet-500"
      />
      {filteredBlogData?.length === 0 || filteredBlogData == null ? (
        <div className="flex flex-col items-center justify-center flex-1 w-full h-full pb-24 uppercase">
          <IconMoodSad size="1.2rem" />
          No post is found !
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            id="blog-page-list-container"
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
            className="flex flex-col flex-1 w-screen gap-2 mt-2 mb-20 ipad:w-2/3" // NOTE: tweak: not using card grid
          >
            <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={height}
                  rowCount={filteredBlogData.length}
                  rowHeight={120}
                  overscanRowCount={3}
                  rowRenderer={rowRenderer}
                />
              )}
            </AutoSizer>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default BlogsPage;
