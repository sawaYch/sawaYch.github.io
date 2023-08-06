import ApiFetch from './api-fetch';

interface CategoryData {
  id: number;
  name: string;
  color: string;
}

const fetchCategories = async () => {
  const res = await ApiFetch('/categories');
  const jsonData = await res.json();
  const data: CategoryData[] = jsonData.data.map((it: any) => ({
    id: it.id,
    name: it.attributes.name,
    color: it.attributes.color,
  }));
  return data;
};

export default fetchCategories;
