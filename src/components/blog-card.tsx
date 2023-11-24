import { Badge } from 'flowbite-react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import tw from 'twin.macro';
import { Img } from 'react-image';
import { BlogData } from '../apis/fetch-blogs';
import { formatDateMonthName } from '../utils/format-date';
import Spinner from './spinner';

const DateTimeSection = tw.div`flex items-center text-[0.65rem] self-end`;
const TagCatSection = tw.div`flex flex-wrap gap-1 uppercase`;

interface BlogCardProps {
  data: BlogData;
  onClick: () => void;
}

const SmallBadeCustomTheme = {
  root: {
    base: 'flex h-fit items-center gap-1 font-semibold',
    color: {
      info: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
      gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600',
      failure:
        'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
      success:
        'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
      warning:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
      indigo:
        'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
      purple:
        'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300',
      blue: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
      cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
      dark: 'bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700',
      light:
        'bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500',
      green:
        'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
      lime: 'bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300',
      red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
      teal: 'bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300',
      yellow:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
    },
    href: 'group',
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
