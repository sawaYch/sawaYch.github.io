import React, { useCallback, useEffect } from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import SEOHead from '../components/head';
import MatrixRain from '../components/matrix-rain';
import Layout from '../components/layout';

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      siteUrl: string;
    };
  };
}

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        title
        description
      }
    }
  }
`;

export const Head = (props: PageProps<DataProps>) => {
  const { data } = props;
  return <SEOHead {...data.site.siteMetadata} />;
};

const IndexPage: React.FC<PageProps<DataProps>> = () => {
  const disableContextMenuOfImage = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('contextmenu', disableContextMenuOfImage);
    return () => {
      document.removeEventListener('contextmenu', disableContextMenuOfImage);
    };
  }, [disableContextMenuOfImage]);

  return (
    <Layout>
      <MatrixRain size={12} className="w-full h-full !border-0 opacity-40" />
    </Layout>
  );
};
export default IndexPage;
