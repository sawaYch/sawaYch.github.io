import ApiFetch from './api-fetch';

const fetchArtworks = async () => {
  const res = await ApiFetch('/upload/files');
  console.log('res',res)
  console.log('env',process.env)
  return res.json();
};

export default fetchArtworks;
