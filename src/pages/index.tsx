/* eslint-disable no-undef */
import React, { useCallback, useEffect } from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import tw from 'twin.macro';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/layout';
import CharacterCard from '../components/character-card';
import Banner from '../components/banner';
import VoidTimeline from '../components/void-timeline';
import SpecialThanks from '../components/special-thanks';
import HobbyKeyboard from '../components/hobby-keyborad';
import Pulse from '../components/pulse';
import Events from '../components/events';
import Oshinoko from '../components/oshinoko';
import fetchUploadedFiles from '../apis/fetch-uploaded-files';

export interface DataProps {
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
  query AllFileAndSiteData {
    allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativeDirectory: { eq: "oshinoko" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(
              width: 196
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
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

const IndexPage: React.FC<PageProps<Queries.AllFileAndSiteDataQuery>> = ({
  data,
}: PageProps<Queries.AllFileAndSiteDataQuery>) => {
  const disableContextMenuOfImage = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  // test cms api
  useQuery(['users'], fetchUploadedFiles);

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
      <Pulse />
      <Placeholder />
      <VoidTimeline />
      <Placeholder />
      <Events />
      <Placeholder />
      <HobbyKeyboard />
      <Placeholder />
      <Oshinoko data={data} />
      <Placeholder />
      <Placeholder />
      <SpecialThanks />
      <Placeholder />
    </Layout>
  );
};
export default IndexPage;
