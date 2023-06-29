import React, { DragEventHandler, useCallback, useEffect } from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import SEOHead from '../components/head';
import GithubContributionMap from '../components/github-contribution-chart';
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

  const handleDragStart: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  return (
    <Layout>
      <div key="matrixRain" onDragStart={handleDragStart}>
        <MatrixRain size={12} />
      </div>
      <div key="ghMap" onDragStart={handleDragStart}>
        <GithubContributionMap />
      </div>
    </Layout>
  );
};
export default IndexPage;
