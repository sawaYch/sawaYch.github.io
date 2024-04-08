import { motion } from 'framer-motion';
import { ListRowProps } from 'react-virtualized';
import BlogCard from './blog-card';

type BlogItemType = Omit<
  Pick<Queries.BlogPostQuery['allStrapiArticle'], 'nodes'>['nodes'][0],
  'description' | 'updatedAt' | 'content'
>[];

interface RowRendererProps extends ListRowProps {
  blogItems: Readonly<BlogItemType>;
  childKey: string;
  onViewBlogDetails: (slug: string) => void;
}

const BlogRowRenderer = ({
  blogItems,
  index,
  childKey,
  style,
  onViewBlogDetails,
}: RowRendererProps) => {
  // get single row
  const blogItem = blogItems[index];

  return (
    <motion.div
      key={childKey}
      layout
      style={{
        ...style,
      }}
      className="flex flex-col items-end justify-center gap-4 p-4 whitespace-pre-wrap"
    >
      <BlogCard
        key={blogItem.id}
        data={blogItem}
        onClick={() => onViewBlogDetails(blogItem!.slug as string)}
      />
    </motion.div>
  );
};

export default BlogRowRenderer;
