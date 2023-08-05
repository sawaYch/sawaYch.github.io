import ApiFetch from './api-fetch';

interface TagData {
  id: number;
  name: string;
}

const fetchTags = async () => {
  const res = await ApiFetch('/tags');
  const jsonData = await res.json();
  const data: TagData[] = jsonData.data.map((it: any) => ({
    id: it.id,
    name: it.attributes.name,
  }));
  return data;
};

export default fetchTags;
