import ApiFetch from './api-fetch';

const fetchArtworks = async () => {
  const res = await ApiFetch('/upload/files');
  return res.json();
};

export default fetchArtworks;
