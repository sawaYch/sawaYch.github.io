import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import SEOHead from '../components/head';
import Layout from '../components/layout';
import MatrixRain from '../components/matrix-rain';
import SpecCard from '../components/spec-card';

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

const IndexPage: React.FC<PageProps<DataProps>> = () => (
  <Layout>
    <MatrixRain width={360} height={240} size={12} />
    <SpecCard />
  </Layout>
);
export default IndexPage;
