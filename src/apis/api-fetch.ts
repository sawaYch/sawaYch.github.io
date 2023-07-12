const ApiFetch = (endpoint: string) =>
  fetch(`${process.env.GATSBY_API_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.GATSBY_API_TOKEN}`,
    },
  });

export default ApiFetch;
