import { PropsWithChildren } from 'react';
import { Badge } from 'flowbite-react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import { Img } from 'react-image';
import { BlogData } from '../apis/fetch-blogs';
import { formatDateMonthName } from '../utils/format-date';
import Spinner from './spinner';
import BadgeTheme from './badge-theme';

const DateTimeSection = ({ children }: PropsWithChildren) => (
  <div className="flex items-center text-[0.65rem] self-end">{children}</div>
);

const TagCatSection = ({ children }: PropsWithChildren) => (
  <div className="flex flex-wrap gap-1 uppercase">{children}</div>
);

interface BlogCardProps {
  data: BlogData;
  onClick: () => void;
}

const SmallBadeCustomTheme = {
  root: {
    ...BadgeTheme.root,
    size: {
      xs: 'text-[0.55rem]',
    },
  },
  icon: {
    off: 'rounded px-0.5 py-0.5',
    on: 'rounded-full p-1.5',
    size: {
      xs: 'w-fit h-fit',
      sm: 'w-3.5 h-3.5',
    },
  },
};

const BlogCard = ({ data, onClick }: BlogCardProps) => (
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
    onClick={onClick}
    className="flex gap-x-2 mb-1 w-full items-center rounded-lg shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] cursor-pointer bg-dracula-dark-900 border-dracula-dark-900 hover:shadow-dracula-pink hover:!scale-105 transition-shadow"
  >
    {data.cover ? (
      <Img
        className="object-cover w-[5.5rem] h-28 sm:w-[11rem] rounded-l-lg sm:h-28"
        src={data.cover}
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
        transformOptions={{
          fit: 'cover',
        }}
      />
    )}
    <div className="flex flex-col pl-2 pr-4 grow">
      <h5 className="mb-1 font-bold tracking-tight">{data.title}</h5>
      <TagCatSection>
        {data.tags.map((t) => (
          <Badge
            key={t.name}
            color={t.color}
            theme={SmallBadeCustomTheme}
            size="xs"
          >
            {t.name}
          </Badge>
        ))}
        {data.categories.map((t) => (
          <Badge
            key={t.name}
            color={t.color}
            theme={SmallBadeCustomTheme}
            size="xs"
          >
            {t.name}
          </Badge>
        ))}
      </TagCatSection>
      <DateTimeSection>{formatDateMonthName(data.updatedAt)}</DateTimeSection>
    </div>
  </motion.div>
);

export default BlogCard;
