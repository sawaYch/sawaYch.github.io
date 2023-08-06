import ApiFetch from './api-fetch';

interface BlogTag {
  name: string;
  color: string;
}

interface BlogCategory {
  name: string;
  color: string;
}

export interface BlogData {
  id: number;
  title: string;
  slug: string;
  content: string;
  description: string;
  updatedAt: string;
  tags: BlogTag[];
  categories: BlogCategory[];
}

export interface BlogIndexData {
  blogData: BlogData[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const fetchBlogs = async () => {
  const res = await ApiFetch('/articles?populate=*');
  const jsonData = await res.json();
  const blogData: BlogData[] = jsonData.data.map((it: any) => ({
    id: it.id,
    title: it.attributes.title,
    slug: it.attributes.slug,
    content: it.attributes.content,
    description: it.attributes.description,
    updatedAt: it.attributes.updatedAt,
    tags: it.attributes.tags.data.map((t: any) => ({
      name: t.attributes.name,
      color: t.attributes.color,
    })),
    categories: it.attributes.categories.data.map((c: any) => ({
      name: c.attributes.name,
      color: c.attributes.color,
    })),
  }));

  const data = {
    blogData,
    pagination: {
      page: jsonData.meta.pagination.page,
      pageSize: jsonData.meta.pagination.pageSize,
      pageCount: jsonData.meta.pagination.pageCount,
      total: jsonData.meta.pagination.pageTotal,
    },
  };
  return data;
};

export default fetchBlogs;
