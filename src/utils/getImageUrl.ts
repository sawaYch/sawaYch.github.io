function getImageUrl(url: string): string {
  return `${process.env.GATSBY_API_BASE_URL?.slice(0, -4)}${url}`;
}

export default getImageUrl;
