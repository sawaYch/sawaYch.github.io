import ApiFetch from './api-fetch';

export interface TagData {
  id: number;
  name: string;
  color: string;
}

const fetchTags = async () => {
  const res = await ApiFetch('/tags');
  const jsonData = await res.json();
  const data: TagData[] = jsonData.data.map((it: any) => ({
    id: it.id,
    name: it.attributes.name,
    color: it.attributes.color,
  }));
  return data;
};

export default fetchTags;
