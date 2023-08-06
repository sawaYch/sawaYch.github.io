import { Badge } from 'flowbite-react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';
import { BlogData } from '../apis/fetch-blogs';

const AuthorSection = tw.div`flex items-center pt-4`;
const TagSection = tw.div`my-1 text-xs flex flex-wrap gap-1`;

interface BlogCardProps {
  data: BlogData;
}

const BlogCard = ({ data }: BlogCardProps) => (
  <motion.div
    variants={{
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 10, velocity: -1000 },
        },
      },
      closed: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 10 },
        },
      },
    }}
    initial="closed"
    animate="open"
    className="flex flex-col p-2 border rounded-lg shadow-inner bg-dracula-dark-900/40 border-dracula-dark-900 backdrop-blur-sm min-w-[20rem] hover:shadow-dracula-pink transition-shadow cursor-pointer"
  >
    <StaticImage
      className="pointer-events-none select-none rounded-xl h-[5rem] w-[5rem] sm:h-[10rem] sm:w-[10rem] self-center"
      src="../images/home.webp"
      alt="blog cover"
      layout="constrained"
      transformOptions={{
        fit: 'cover',
      }}
    />
    <h5 className="px-2 text-lg font-bold tracking-tight">{data.title}</h5>
    <p className="px-2 font-normal line-clamp-4">{data.description}</p>
    <hr className="w-full h-[1px] mx-auto my-2 bg-dracula-dark-800 border-0 rounded" />
    <TagSection>
      {data.tags.map((t) => (
        <Badge color={t.color}>{t.name}</Badge>
      ))}
      {data.categories.map((t) => (
        <Badge color={t.color}>{t.name}</Badge>
      ))}
    </TagSection>
    <AuthorSection className="">
      <div className="w-6 mr-2">
        <StaticImage
          className="rounded-full pointer-events-none select-none"
          src="../images/avatar.webp"
          alt="Void Dojo"
          layout="fullWidth"
        />
      </div>
      <div className="text-[0.65rem]">30 Jul, 2023</div>
    </AuthorSection>
  </motion.div>
);

export default BlogCard;
