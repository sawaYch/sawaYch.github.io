import { Badge } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/layout';
import fetchTags from '../apis/fetch-tags';

const BlogsPage = () => {
  const { data } = useQuery(['tags'], fetchTags);

  return (
    <Layout>
      <div className="text-3xl font-bold uppercase">Latest posts</div>
      <div className="p-4 border rounded-lg border-dracula-dark-600 bg-dracula-dark/10 backdrop-blur-md">
        Filter by Tags
        <div className="flex w-1/2 gap-1 pt-2">
          {data?.map((it) => (
            <Badge
              color="pink"
              key={it.id}
              className="inline cursor-pointer hover:bg-dracula-dark-300"
            >
              {it.name}
            </Badge>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsPage;
