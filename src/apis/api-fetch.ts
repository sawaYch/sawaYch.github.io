const ApiFetch = (endpoint: string) =>
  fetch(`${process.env.API_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

export default ApiFetch;
