import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { ReactElement, useState, useEffect, useMemo } from 'react';
import { BiBookBookmark } from '@react-icons/all-files/bi/BiBookBookmark';
import { FaPaintBrush } from '@react-icons/all-files/fa/FaPaintBrush';
// import { BsCalendarFill } from '@react-icons/all-files/bs/BsCalendarFill';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { IoIosImages } from '@react-icons/all-files/io/IoIosImages';
import { StaticImage } from 'gatsby-plugin-image';
import { isMobile } from 'react-device-detect';
import MenuItem from './menu-item';
import { CubeColorType } from './cube';
import useCurrentModules from '../hooks/use-current-modules';

interface AppNavigationType {
  id: string;
  name: string;
  cubeColor?: CubeColorType;
  icon?: ReactElement;
  link?: string;
  onClick?: () => void;
  isExternal?: boolean;
}

interface ApplicationPaneProps {
  onPageSelected: (pageKey: string) => void;
  location: any;
}

const ApplicationPane: React.FC<ApplicationPaneProps> = ({
  onPageSelected,
  location,
}: ApplicationPaneProps) => {
  const currentPage = useMemo(
    () => location.pathname.split('/')?.[1] ?? undefined,
    [location.pathname]
  );

  const [selectedPage, setSelectedPage] = useState<string | undefined>(
    currentPage
  );

  useEffect(() => {
    // NOTE: side effect, handle module change when user click browser's back / next
    setSelectedPage(currentPage);
  }, [currentPage]);

  const appNavigationData: AppNavigationType[] = useMemo(
    () => [
      {
        id: 'home',
        cubeColor: 'dark',
        name: 'Home',
        icon: <FaHome size="3.5rem" />,
        link: '/',
        onClick: () => {
          onPageSelected('home');
          setSelectedPage('home');
        },
      },
      // {
      //   id: 'events',
      //   cubeColor: 'green',
      //   name: 'Event',
      //   icon: <BsCalendarFill size="3.5rem" />,
      //   link: '/events',
      //   onClick: () => {
      //     onPageSelected('events');
      //     setSelectedPage('events');
      //   },
      // },
      {
        id: 'blogs',
        cubeColor: 'purple',
        name: 'Blog',
        icon: <BiBookBookmark size="3.5rem" />,
        link: '/blogs',
        onClick: () => {
          onPageSelected('blogs');
          setSelectedPage('blogs');
        },
      },
      // {
      //   id: 'vtubers',
      //   cubeColor: 'cyan',
      //   name: 'Vtubers',
      //   icon: (
      //     <StaticImage
      //       src="../images/vtuber-cube-icon.png"
      //       alt="vtubers cube icon"
      //     />
      //   ),
      //   link: '/vtubers',
      //   onClick: () => {
      //     onPageSelected('vtubers');
      //     setSelectedPage('vtubers');
      //   },
      // },
      {
        id: 'artworks',
        cubeColor: 'buffy',
        name: 'Artwork',
        icon: <FaPaintBrush size="3.5rem" />,
        link: '/artworks',
        onClick: () => {
          onPageSelected('artworks');
          setSelectedPage('artworks');
        },
      },
      {
        id: 'gallery',
        cubeColor: 'yellow',
        name: 'Gallery',
        icon: <IoIosImages size="3.5rem" />,
        link: '/gallery',
        onClick: () => {
          onPageSelected('gallery');
          setSelectedPage('gallery');
        },
      },
      {
        id: 'mya88',
        cubeColor: 'red',
        name: 'Mya88',
        icon: (
          <StaticImage
            src="../images/mya88.webp"
            alt="mya88 module icon"
            width={64}
            height={64}
            placeholder="blurred"
          />
        ),
        link: 'https://mya88.vercel.app/',
        onClick: () => {},
        isExternal: true,
      },
      {
        id: 'myaPoll',
        cubeColor: 'red',
        name: 'MyaPoll',
        icon: (
          <StaticImage
            src="../images/mya-poll.webp"
            alt="mya88 module icon"
            width={64}
            height={64}
            placeholder="blurred"
          />
        ),
        link: 'https://myapoll.vercel.app/',
        onClick: () => {},
        isExternal: true,
      },
    ],
    [onPageSelected]
  );

  const moduleName = useCurrentModules(location, selectedPage);

  return (
    <>
      <motion.div
        id="application-pane-title-component"
        className="mx-8 mb-12 text-2xl tracking-widest bg-opacity-50 select-none purple-text-shadow"
        variants={
          isMobile
            ? {
                open: {
                  opacity: 1,
                },
                closed: {
                  opacity: 0,
                },
              }
            : {
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
              }
        }
      >
        <div className="ml-4 w-fit">
          <div className="h-[1.5rem] -mb-8 -mx-8 bg-dracula-purple-400/30 -skew-x-12 backdrop-blur-sm" />
          <div className="flex">
            <div className="z-50 !text-dracula-purple-100 text-[2.4rem] uppercase">
              Modules<span className="animate-ping">█</span>
            </div>
          </div>
        </div>
      </motion.div>
      <div
        id="application-pane-modules-section"
        className="grid grid-cols-3 h-fit sm:grid-cols-4 sm:pb-10 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 place-items-center"
      >
        {appNavigationData.map((i) => {
          if (!i.isExternal) {
            return (
              <Link key={i.id} to={i.link ?? '/404'}>
                <MenuItem
                  key={i.id}
                  {...i}
                  currentModule={moduleName ?? undefined}
                />
              </Link>
            );
          }

          return (
            <a
              key={i.id}
              href={i.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${i.name} link`}
            >
              <MenuItem
                key={i.id}
                {...i}
                currentModule={moduleName ?? undefined}
              />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default ApplicationPane;
