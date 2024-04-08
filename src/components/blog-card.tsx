import { PropsWithChildren, useMemo } from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import { Img } from 'react-image';
import { Badge } from '@mantine/core';
import { formatDateMonthName } from '../utils/format-date';
import getImageUrl from '../utils/getImageUrl';
import Spinner from './spinner';

const DateTimeSection = ({ children }: PropsWithChildren) => (
  <div className="flex items-center text-[0.65rem] self-end">{children}</div>
);

const TagCatSection = ({ children }: PropsWithChildren) => (
  <div className="flex flex-wrap gap-1 uppercase">{children}</div>
);

interface BlogCardProps {
  data: Queries.BlogsPageQuery['allStrapiArticle']['nodes'][0];
  onClick: () => void;
}

const BlogCard = ({ data, onClick }: BlogCardProps) => {
  const sortedTag = useMemo(() => {
    const tags = (
      data.tags as {
        name: string;
        color: string;
      }[]
    ).sort((prev, next) => {
      if (prev.name === next.name) return 0;
      if (prev.name > next.name) return 1;
      return -1;
    });
    return tags;
  }, [data.tags]);

  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: 50,
        },
      }}
      initial="hidden"
      whileInView="visible"
      onClick={onClick}
      className="flex w-full px-10"
    >
      <div className="flex w-full gap-x-2 items-center rounded-lg shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] cursor-pointer bg-dracula-dark-900 border-dracula-dark-900 hover:shadow-dracula-pink hover:!scale-105 transition-shadow">
        {data.cover ? (
          <Img
            className="object-cover w-[5.5rem] h-28 sm:w-[11rem] rounded-l-lg sm:h-28 items-center justify-center"
            src={getImageUrl(data.cover.formats?.thumbnail?.url ?? '')}
            alt={`${data.title} thumbnail`}
            loader={
              <div className="flex flex-col items-center justify-center w-[5.5rem] h-28 sm:w-[11rem] sm:h-28 object-cover">
                <Spinner />
              </div>
            }
            unloader={
              <div className="flex flex-col items-center justify-center w-[5.5rem] h-28 sm:w-[11rem] sm:h-28 object-cover">
                <FcRemoveImage size="2.5rem" />
              </div>
            }
          />
        ) : (
          <StaticImage
            className="self-center object-cover w-[5.5rem] h-28 sm:w-[11rem] sm:h-28 pointer-events-none select-none rounded-xl"
            src="../images/home.webp"
            alt="blog cover"
            layout="constrained"
            placeholder="blurred"
            transformOptions={{
              fit: 'cover',
            }}
          />
        )}
        <div className="flex flex-col pl-2 pr-4 grow">
          <span className="mb-1 text-xs font-bold tracking-tight sm:text-md">
            {data.title}
          </span>
          <TagCatSection>
            {sortedTag != null &&
              sortedTag.length !== 0 &&
              // eslint-disable-next-line no-nested-ternary
              sortedTag.map((t) => (
                <Badge key={t!.name} color={t!.color as string} size="xs">
                  {t!.name as string}
                </Badge>
              ))}
            {/* {data?.categories != null &&
          data.categories.map((t) => (
            <Badge key={t!.name} color={t!.color as string} size="xs">
              {t!.name as string}
            </Badge>
          ))} */}
          </TagCatSection>
          <DateTimeSection>
            {formatDateMonthName(data.publishedAt ?? '')}
          </DateTimeSection>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
