import ApiFetch from './api-fetch';

const fetchUploadedFiles = async () => {
  const res = await ApiFetch('/upload/files');
  return res.json();
};

export default fetchUploadedFiles;
