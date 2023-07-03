import React, { useCallback, useEffect } from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import tw from 'twin.macro';
import SEOHead from '../components/head';
import Layout from '../components/layout';
import CharacterCard from '../components/character-card';
import Banner from '../components/banner';
import VoidTimeline from '../components/void-timeline';
import SpecialThanks from '../components/special-thanks';
import HobbyKeyboard from '../components/hobby-keyborad';
import Skills from '../components/skills';

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

const Placeholder = tw.div`h-[12rem]`;

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
      <CharacterCard />
      <Placeholder />
      <Skills />
      <Placeholder />
      <VoidTimeline />
      <Placeholder />
      <HobbyKeyboard />
      <Placeholder />
      <SpecialThanks />
      <Placeholder />
    </Layout>
  );
};
export default IndexPage;
