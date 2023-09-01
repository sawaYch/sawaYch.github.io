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
    author: defaultAuthor,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    author: author || defaultAuthor,
  };

  console.log(author, seo.author);

  return (
    <Helmet>
      <html lang="en" className="dark" />
      <meta charSet="utf-8" />
      <title>{seo.title}</title>
      {seo.author ? <meta name="author" content={seo.author} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FF79C6" />
      {/* open graph */}
      {seo.description && (
        <meta
          name="description"
          property="og:description"
          content={seo.description}
        />
      )}
      {seo.image ? <meta property="og:image" content={seo.image} /> : null}
      <meta property="og:image:alt" content={seo.description} />
      <meta property="og:title" content={`${seo.title} | ${seo.author}`} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image:width" content="96" />
      <meta property="og:image:height" content="96" />
      <meta property="og:site_name" content={`${seo.title}`} />
      <meta property="og:type" content="website" />
      {/* twitter */}
      <meta name="twitter:title" content={`${seo.title} | ${seo.author}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:site" content={`@${seo.twitterUsername}`} />
      {seo.image ? <meta name="twitter:image:src" content={seo.image} /> : null}
      {seo.description ? (
        <meta name="twitter:description" content={seo.description} />
      ) : null}
      {image ? <meta name="twitter:image" content={seo.image} /> : null}
    </Helmet>
  );
};

export default SEOHead;
