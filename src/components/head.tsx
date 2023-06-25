interface HeadProps {
  title: string;
  description?: string;
  image?: { url: string };
  author?: string;
}

const Head = ({ title, description, image, author }: HeadProps) => (
  <>
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta property="og:title" content={title} />
    {description && (
      <meta
        name="description"
        property="og:description"
        content={description}
      />
    )}
    {image ? <meta property="og:image" content={image.url} /> : null}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    {description ? (
      <meta name="twitter:description" content={description} />
    ) : null}
    {image ? <meta name="twitter:image" content={image.url} /> : null}
    {author ? <meta name="author" content={author} /> : null}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

export default Head;
