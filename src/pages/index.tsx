import React, { useCallback, useEffect } from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import SEOHead from '../components/head';
import Layout from '../components/layout';
import SpecCard from '../components/spec-card';
import CharacterCard from '../components/character-card';
import Banner from '../components/banner';

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
      <Banner />
      <SpecCard className="mt-8 transform skew-y-6 shadow-2xl" />
      <CharacterCard className="!w-4/5" />
    </Layout>
  );
};
export default IndexPage;
