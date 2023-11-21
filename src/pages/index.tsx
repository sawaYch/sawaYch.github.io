/* eslint-disable no-undef */
import { useCallback, useEffect } from 'react';
import tw from 'twin.macro';
import CharacterCard from '../components/character-card';
import Banner from '../components/banner';
import VoidTimeline from '../components/void-timeline';
import SpecialThanks from '../components/special-thanks';
// import HobbyKeyboard from '../components/hobby-keyborad';

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

const Placeholder = tw.div`h-[12rem]`;

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
      <Placeholder />
      <VoidTimeline />
      {/* <Placeholder /> */}
      {/* <HobbyKeyboard /> TODO: move to new sections */}
      <Placeholder />
      <SpecialThanks />
      <Placeholder />
    </>
  );
};
export default IndexPage;
