/* eslint-disable no-undef */
import { useCallback, useEffect } from 'react';
import CharacterCard from '../components/character-card';
import Banner from '../components/banner';
import VoidTimeline from '../components/void-timeline';
import SkillCard from '../components/skill-card';
import PinnedProject from '../components/pinned-project';
import LatestPost from '../components/latest-post';

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

const IndexPage = () => {
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
    <>
      <Banner />
      <CharacterCard />
      <SkillCard />
      <LatestPost />
      <PinnedProject />
      <VoidTimeline />
    </>
  );
};
export default IndexPage;
