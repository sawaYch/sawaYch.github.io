import { Helmet } from 'react-helmet';
import useSiteMetadata from '../utils/use-site-metadata';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: { url: string };
  author?: string;
  pathname?: string;
}

const SEOHead = ({
  title,
  description,
  image,
  author,
  pathname,
}: SEOHeadProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <Helmet>
      <html lang="en" className="dark" />
      <meta charSet="utf-8" />
      <title>{seo.title}</title>
      {seo.description && (
        <meta
          name="description"
          property="og:description"
          content={seo.description}
        />
      )}
      {image ? <meta property="og:image" content={seo.image} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {seo.description ? (
        <meta name="twitter:description" content={seo.description} />
      ) : null}
      {image ? <meta name="twitter:image" content={seo.image} /> : null}
      {author ? <meta name="author" content={author} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ff79c6" />
    </Helmet>
  );
};

export default SEOHead;
