/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { GatsbyImage } from 'gatsby-plugin-image';

import { GiSparkles } from '@react-icons/all-files/gi/GiSparkles';
import { useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import oshinokoData from './oshinoko-data';

import PaneContainer from './pane-container';
import OshinokoCharacter from './oshinoko-character';

interface OshinokoProps {
  data: Queries.AllFileAndSiteDataQuery;
}

const Oshinoko = ({ data }: OshinokoProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<
    (typeof oshinokoData)[0] | undefined
  >();

  const handleClick = useCallback((k: string) => {
    setOpenModal((prev) => !prev);
    setSelectData(oshinokoData.find((it) => it.key === k));
  }, []);

  const onClose = useCallback(() => {
    setOpenModal(false);
    setSelectData(undefined);
  }, []);

  const oshinokoImageNode = useMemo(
    () =>
      oshinokoData.map((item) => {
        const imageNode = data.allFile.edges.find(
          (it) => it.node.name === item.key
        );

        return (
          <div
            onClick={() => handleClick(item.key)}
            className={cn(
              'absolute w-48 h-48 overflow-hidden transition-colors rotate-45 bg-transparent border-2 rounded-lg scale-50 sm:scale-75 my-2 mx-2',
              item.frameColor,
              item.positioning
            )}
          >
            <div className="w-48 h-48 -rotate-45 ">
              {imageNode?.node.childImageSharp?.gatsbyImageData && (
                <GatsbyImage
                  className={`w-48 h-auto -translate-y-12 pointer-events-none select-none ${item.shadowColor}`}
                  image={imageNode?.node.childImageSharp?.gatsbyImageData}
                  alt={item.key}
                />
              )}
            </div>
          </div>
        );
      }),
    [data.allFile.edges, handleClick]
  );

  return (
    <>
      <PaneContainer className="!bg-transparent !border-0 w-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="w-fit">
            <div className="h-[1.5rem] -mb-8 -mx-8 bg-dracula-buffy-400/30 -skew-x-12 backdrop-blur-sm" />
            <div className="flex">
              <h2 className="z-50 !text-dracula-buffy-100">
                推しの子 | HKVtubers
              </h2>{' '}
              <GiSparkles
                size="2rem"
                className="z-50 ml-2 text-dracula-buffy-200"
              />
            </div>
          </div>
          <div className="flex">
            I am&nbsp;
            <a
              href="https://hololive.wiki/wiki/Glossary#DD"
              className="underline hover:text-dracula-dark-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="dd definition"
            >
              DD
            </a>
            &nbsp;😎 !!!
          </div>
        </div>
        <div className="relative w-screen mt-10 h-[24rem]">
          <div className="absolute p-2 left-[50%] -translate-x-72">
            {oshinokoImageNode}
          </div>
        </div>
        <OshinokoCharacter
          isOpen={openModal}
          selectedData={selectData}
          onClose={onClose}
        />
      </PaneContainer>
    </>
  );
};

export default Oshinoko;
