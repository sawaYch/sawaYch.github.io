import React, { ReactElement } from 'react';
import IntroMya from '../content/intro-mya.mdx';
import IntroGummy from '../content/intro-gummy.mdx';
import IntroRuri from '../content/intro-ruri.mdx';
import IntroUno from '../content/intro-uno.mdx';
import IntroMiho from '../content/intro-miho.mdx';
import IntroJune from '../content/intro-june.mdx';
import IntroSora from '../content/intro-sora.mdx';
import IntroKuiro from '../content/intro-kuiro.mdx';

interface OshinokoData {
  imageData?: any;
  key: string;
  positioning?: string;
  modalColor?: string;
  frameColor?: string;
  shadowColor?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  name?: string;
  video?: string;
  content?: ReactElement | React.JSX.Element;
}

const oshinokoData: OshinokoData[] = [
  {
    key: 'mya',
    modalColor: 'bg-[#fd9a98]',
    frameColor: 'border-[#fd9a98] hover:bg-[#fd9a98] active:bg-[#fd9a98]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(253,154,152,0.5)]',
    twitterUrl: 'https://twitter.com/MyaVtuber',
    youtubeUrl: 'https://www.youtube.com/@mya.',
    instagramUrl: 'https://www.instagram.com/mya_vtuber',
    name: '米亞 | Mya',
    video: 'https://www.youtube.com/watch?v=47mJVG8LNfE',
    content: <IntroMya />,
  },
  {
    key: 'gummy',
    modalColor: 'bg-[#805e5a]',
    positioning: 'top-20 left-20 sm:top-28 sm:left-[7.25rem]',
    frameColor: 'border-[#805e5a] hover:bg-[#805e5a] active:bg-[#805e5a]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(128,94,90,0.5)]',
    twitterUrl: 'https://twitter.com/gummy_forest',
    youtubeUrl: 'https://www.youtube.com/@gummyz',
    instagramUrl: 'https://www.instagram.com/gummy_forest',
    name: '甘米 | Gummy',
    video: 'https://www.youtube.com/watch?v=x7-X9snnEZI',
    content: <IntroGummy />,
  },
  {
    key: 'june',
    modalColor: 'bg-[#bd93f9]',
    positioning: 'left-[9.375rem] sm:left-56',
    frameColor: 'border-[#bd93f9] hover:bg-[#bd93f9] active:bg-[#bd93f9]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(189,147,249,0.5)]',
    twitterUrl: 'https://twitter.com/June_Tgtk',
    youtubeUrl: 'https://www.youtube.com/@june_tgtk',
    instagramUrl: 'https://www.instagram.com/june_tgtk',
    name: '咎月ジュネ | June',
    video: 'https://www.youtube.com/watch?v=ne3C7IQBco8',
    content: <IntroJune />,
  },
  {
    key: 'uno',
    modalColor: 'bg-[#8be9fd]',
    positioning: 'top-[9.5rem] sm:top-28 sm:left-[20.75rem]',
    frameColor: 'border-[#8be9fd] hover:bg-[#8be9fd] active:bg-[#8be9fd]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(139,233,253,0.5)]',
    twitterUrl: 'https://twitter.com/kami46UNO',
    youtubeUrl: 'https://www.youtube.com/@kami46UNO',
    instagramUrl: 'https://www.instagram.com/kami46uno',
    name: '神白ウノ | Uno',
    video: 'https://www.youtube.com/watch?v=moSy45_zn0c',
    content: <IntroUno />,
  },
  {
    key: 'ruri',
    modalColor: 'bg-[#f8f8f2]',
    positioning: 'top-56 left-20 sm:top-[13.5rem] sm:left-2',
    frameColor: 'border-[#f8f8f2] hover:bg-[#f8f8f2] active:bg-[#f8f8f2]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(255,255,255,0.5)]',
    twitterUrl: 'https://twitter.com/ruri_mashiro',
    youtubeUrl: 'https://www.youtube.com/@MashiroRuri',
    instagramUrl: 'https://www.instagram.com/mashirorurii',
    name: '真白瑠璃 | Ruri',
    video: 'https://www.youtube.com/watch?v=qf3b1_gT4SI',
    content: <IntroRuri />,
  },
  {
    key: 'miho',
    modalColor: 'bg-[#d3b6fc]',
    positioning:
      'left-[9.375rem] top-[9.5rem] sm:top-[20rem] sm:left-[7.25rem]',
    frameColor: 'border-[#d3b6fc] hover:bg-[#d3b6fc] active:bg-[#d3b6fc]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(211,182,252,0.5)]',
    twitterUrl: 'https://twitter.com/kurohatamiho',
    youtubeUrl: 'https://www.youtube.com/@kurohatamiho',
    name: '黑佃みほ | Miho',
    video: 'https://www.youtube.com/watch?v=6shSnZrVhL0',
    content: <IntroMiho />,
  },
  {
    key: 'kurio',
    modalColor: 'bg-[#97feb1]',
    positioning: 'top-[18.5rem] sm:top-[13.5rem] sm:left-[14rem]',
    frameColor: 'border-[#97feb1] hover:bg-[#97feb1] active:bg-[#97feb1]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(145,254,178,0.5)]',
    twitterUrl: 'https://twitter.com/kuiro0723',
    youtubeUrl: 'https://www.youtube.com/@kuiro0723',
    instagramUrl: 'https://www.instagram.com/kub_live_',
    name: '古洢蘿 | Kuiro',
    video: 'https://www.youtube.com/watch?v=KeJB2RvxPwE',
    content: <IntroKuiro />,
  },
  {
    key: 'sora',
    modalColor: 'bg-[#8f9bc3]',
    positioning:
      'left-[9.375rem] top-[18.5rem] sm:top-[20rem] sm:left-[20.75rem]',
    frameColor: 'border-[#8f9bc3] hover:bg-[#8f9bc3] active:bg-[#8f9bc3]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(143,155,195,0.5)]',
    twitterUrl: 'https://twitter.com/hasakaki_sora',
    youtubeUrl: 'https://www.youtube.com/@hasakakisora',
    instagramUrl: 'https://www.instagram.com/hasakaki_sora',
    name: '羽榊そら | Sora',
    video: 'https://www.youtube.com/watch?v=e293yhqB8Jo',
    content: <IntroSora />,
  },
];

export default oshinokoData;
