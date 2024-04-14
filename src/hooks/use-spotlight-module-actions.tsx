import { useMemo } from 'react';
import {
  IconBook2,
  IconBrush,
  // IconCalendar,
  IconHome,
  IconPhoto,
} from '@tabler/icons-react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  SpotlightActionData,
  SpotlightActionGroupData,
} from '@mantine/spotlight';
import { navigate } from 'gatsby';
import MenuItem from '../components/menu-item';

type AppNavigationType =
  | ({
      id: string;
      label: string;
      link?: string;
      isExternal?: boolean;
    } & SpotlightActionData)
  | SpotlightActionGroupData;

const useSpotlightModuleActions = () => {
  const spotlightModuleActions: AppNavigationType[] = useMemo(
    () => [
      {
        group: 'Pages',
        id: 'home',
        label: 'Home',
        description: 'Void Dojo parking apron',
        leftSection: (
          <MenuItem
            icon={<IconHome size="3.5rem" color="white" />}
            name="home"
            id="home"
            cubeColor="dark"
          />
        ),
        onClick: () => {
          navigate('/');
        },
      },
      // {
      //   id: 'events',
      //   label: 'Event',
      //   description: 'Recent event participated',
      //   leftSection: (
      //     <MenuItem
      //       icon={<IconCalendar size="3.5rem" color="white" />}
      //       name="event"
      //       id="event"
      //       cubeColor="green"
      //     />
      //   ),
      //   onClick: () => {
      //     navigate('/events');
      //   },
      // },
      {
        group: 'Pages',
        id: 'blogs',
        label: 'Blog',
        description: 'Navigating the Realm of Reflection',
        leftSection: (
          <MenuItem
            icon={<IconBook2 size="3.5rem" color="white" />}
            name="blogs"
            id="blogs"
            cubeColor="purple"
          />
        ),
        onClick: () => {
          navigate('/blogs');
        },
      },
      // {
      //   id: 'vtubers',
      //   label: 'Vtubers',
      //   description: 'Vtubers',
      //   leftSection: (
      //     <MenuItem
      //       icon={
      //         <StaticImage
      //           src="../images/vtuber-cube-icon.png"
      //           alt="vtubers cube icon"
      //         />
      //       }
      //       name="vtubers"
      //       id="vtubers"
      //       cubeColor="cyan"
      //     />
      //   ),
      //   onClick: () => {
      //     navigate('/vtubers');
      //   },
      // },
      {
        group: 'Pages',
        id: 'artworks',
        label: 'Artwork',
        description: 'Draw something!',
        leftSection: (
          <MenuItem
            icon={<IconBrush size="3.5rem" color="white" />}
            name="Artwork"
            id="artworks"
            cubeColor="buffy"
          />
        ),
        onClick: () => {
          navigate('/artworks');
        },
      },
      {
        group: 'Pages',
        id: 'gallery',
        label: 'Gallery',
        description: 'Photo of random goods...?',
        leftSection: (
          <MenuItem
            icon={<IconPhoto size="3.5rem" color="white" />}
            name="Gallery"
            id="gallery"
            cubeColor="yellow"
          />
        ),
        onClick: () => {
          navigate('/gallery');
        },
      },
      {
        group: 'Apps',
        id: 'mya88',
        label: 'Mya88',
        description:
          'Youtube live stream chat message viewer powered by Next & official data APIv3',
        leftSection: (
          <MenuItem
            icon={
              <StaticImage
                src="../images/mya88.webp"
                alt="mya88 module icon"
                width={72}
                height={72}
                className="pointer-events-none select-none"
                placeholder="blurred"
              />
            }
            name="Mya88"
            id="mya88"
            cubeColor="red"
          />
        ),
        onClick: () => {
          navigate('https://mya88.vercel.app/');
        },
      },
      {
        group: 'Apps',
        id: 'myaPoll',
        label: 'MyaPoll',
        description:
          'Youtube live stream poll app powered by Next & official data APIv3',
        leftSection: (
          <MenuItem
            icon={
              <StaticImage
                src="../images/mya-poll.webp"
                alt="myaPoll module icon"
                width={72}
                height={72}
                className="pointer-events-none select-none"
                placeholder="blurred"
              />
            }
            name="MyaPoll"
            id="myaPoll"
            cubeColor="red"
          />
        ),
        onClick: () => {
          navigate('https://myapoll.vercel.app/');
        },
      },
    ],
    []
  );

  return spotlightModuleActions;
};

export default useSpotlightModuleActions;
