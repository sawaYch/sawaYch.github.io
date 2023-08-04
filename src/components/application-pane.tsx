import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { ReactElement, useMemo } from 'react';
import { BiBookBookmark } from '@react-icons/all-files/bi/BiBookBookmark';
import { GiVampireDracula } from '@react-icons/all-files/gi/GiVampireDracula';
import { FaPaintBrush } from '@react-icons/all-files/fa/FaPaintBrush';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { IoIosImages } from '@react-icons/all-files/io/IoIosImages';
import MenuItem from './menu-item';
import { CubeColorType } from './cube';

interface AppNavigationType {
  id: string;
  name: string;
  cubeColor?: CubeColorType;
  icon?: ReactElement;
  link?: string;
}

const ApplicationPane = () => {
  const variants = useMemo(
    () => ({
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }),
    []
  );

  const appNavigationData: AppNavigationType[] = [
    {
      id: 'home',
      cubeColor: 'dark',
      name: 'Home',
      icon: <FaHome size="3.5rem" />,
      link: '/',
    },
    {
      id: 'blog',
      cubeColor: 'purple',
      name: 'Blog',
      icon: <BiBookBookmark size="3.5rem" />,
      link: '/blogs',
    },
    {
      id: 'artwork',
      cubeColor: 'buffy',
      name: 'Artwork',
      icon: <FaPaintBrush size="3.5rem" />,
      link: '/artworks',
    },
    {
      id: 'gallery',
      cubeColor: 'yellow',
      name: 'Gallery',
      icon: <IoIosImages size="3.5rem" />,
      link: '/gallery',
    },
    {
      id: 'reserved_1',
      cubeColor: 'red',
      name: 'Reserved',
      icon: <GiVampireDracula size="3.5rem" />,
    },
  ];

  return (
    <div>
      <motion.div variants={variants}>
        <motion.div
          className="mx-8 mt-4 mb-12 text-2xl tracking-widest bg-opacity-50 select-none purple-text-shadow"
          variants={{
            open: {
              x: 0,
              opacity: 1,
              transition: {
                x: { stiffness: 1000, velocity: -100 },
              },
            },
            closed: {
              x: 100,
              opacity: 0,
              transition: {
                x: { stiffness: 1000 },
              },
            },
          }}
        >
          <div className="w-fit">
            <div className="h-[1.5rem] -mb-8 -mx-8 bg-dracula-purple-400/30 -skew-x-12 backdrop-blur-sm" />
            <div className="flex">
              <div className="z-50 !text-dracula-purple-100 text-[2.4rem] uppercase">
                Modules<span className="animate-ping">█</span>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-4 place-items-center">
          {appNavigationData.map((i) => (
            <Link key={i.id} to={i.link ?? '/404'}>
              <MenuItem key={i.id} {...i} />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationPane;
