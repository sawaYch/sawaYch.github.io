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
  cover: string;
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

interface FetchBlogQueryParam {
  page: number;
  pageSize: number;
  tags: string[];
  categories: string[];
  slug?: string;
}

const fetchBlogs = async ({
  page,
  pageSize,
  tags,
  categories,
  slug,
}: FetchBlogQueryParam) => {
  let res: Response;
  if (!slug) {
    const tagFilter = tags
      .map((t, idx) => `&filters[$or][${idx}][tags][name][$contains]=${t}`)
      .join('');
    const categoryFilter = categories
      .map(
        (c, idx) => `&filters[$or][${idx}][categories][name][$contains]=${c}`
      )
      .join('');
    res = await ApiFetch(
      `/articles?fields[0]=slug&fields[1]=title&fields[2]=slug&fields[3]=updatedAt&populate[0]=tags&populate[1]=categories&populate[2]=cover&sort[0]=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}${tagFilter}${categoryFilter}`
    );
  } else {
    res = await ApiFetch(
      `/articles?populate=*&sort[0]=publishedAt:desc&filters[slug][$eq]=${slug}`
    );
  }
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
    cover: `${process.env.GATSBY_API_BASE_URL?.slice(0, -4)}${
      !slug
        ? it.attributes.cover.data.attributes.formats.thumbnail.url
        : it.attributes.cover.data.attributes.formats.small.url
    }`,
  }));
  const data = {
    blogData,
    pagination: {
      page: jsonData.meta.pagination.page,
      pageSize: jsonData.meta.pagination.pageSize,
      pageCount: jsonData.meta.pagination.pageCount,
      total: jsonData.meta.pagination.total,
    },
  };
  return data;
};

export default fetchBlogs;
