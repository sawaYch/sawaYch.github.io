import IntroMya from '../content/intro-mya.mdx';
import IntroGummy from '../content/intro-gummy.mdx';
import IntroRuri from '../content/intro-ruri.mdx';
import IntroUno from '../content/intro-uno.mdx';
import IntroMiho from '../content/intro-miho.mdx';
import IntroJune from '../content/intro-june.mdx';
import IntroSora from '../content/intro-sora.mdx';
import IntroKuiro from '../content/intro-kuiro.mdx';

const oshinokoData = [
  {
    key: 'mya',
    frameColor: 'border-[#fd9a98] hover:bg-[#fd9a98] active:bg-[#fd9a98]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(253,154,152,0.5)]',
    twitterUrl: 'https://twitter.com/MyaVtuber',
    youtubeUrl: 'https://www.youtube.com/@mya.',
    instagramUrl: 'https://www.instagram.com/mya_vtuber',
    name: '米亞 | Mya',
    video: '47mJVG8LNfE',
    content: <IntroMya />,
  },
  {
    key: 'gummy',
    positioning: 'top-28 left-[7.25rem]',
    frameColor: 'border-[#805e5a] hover:bg-[#805e5a] active:bg-[#805e5a]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(128,94,90,0.5)]',
    twitterUrl: 'https://twitter.com/gummy_forest',
    youtubeUrl: 'https://www.youtube.com/@gummyz',
    instagramUrl: 'https://www.instagram.com/gummy_forest',
    name: '甘米 | Gummy',
    video: 'x7-X9snnEZI',
    content: <IntroGummy />,
  },
  {
    key: 'june',
    positioning: 'left-56',
    frameColor: 'border-[#bd93f9] hover:bg-[#bd93f9] active:bg-[#bd93f9]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(189,147,249,0.5)]',
    twitterUrl: 'https://twitter.com/June_Tgtk',
    youtubeUrl: 'https://www.youtube.com/@june_tgtk',
    instagramUrl: 'https://www.instagram.com/june_tgtk',
    name: '咎月ジュネ | June',
    video: 'ne3C7IQBco8',
    content: <IntroJune />,
  },
  {
    key: 'uno',
    positioning: 'top-28 left-[20.75rem]',
    frameColor: 'border-[#8be9fd] hover:bg-[#8be9fd] active:bg-[#8be9fd]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(139,233,253,0.5)]',
    twitterUrl: 'https://twitter.com/kami46UNO',
    youtubeUrl: 'https://www.youtube.com/@kami46UNO',
    instagramUrl: 'https://www.instagram.com/kami46uno',
    name: '神白ウノ | Uno',
    video: 'moSy45_zn0c',
    content: <IntroUno />,
  },
  {
    key: 'ruri',
    positioning: 'top-[13.5rem]',
    frameColor: 'border-[#f8f8f2] hover:bg-[#f8f8f2] active:bg-[#f8f8f2]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(255,255,255,0.5)]',
    twitterUrl: 'https://twitter.com/ruri_mashiro',
    youtubeUrl: 'https://www.youtube.com/@MashiroRuri',
    instagramUrl: 'https://www.instagram.com/mashirorurii',
    name: '真白瑠璃 | Ruri',
    video: 'qf3b1_gT4SI',
    content: <IntroRuri />,
  },
  {
    key: 'miho',
    positioning: 'top-[20rem] left-[7.25rem]',
    frameColor: 'border-[#d3b6fc] hover:bg-[#d3b6fc] active:bg-[#d3b6fc]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(211,182,252,0.5)]',
    twitterUrl: 'https://twitter.com/kurohatamiho',
    youtubeUrl: 'https://www.youtube.com/@kurohatamiho',
    name: '黑佃みほ | Miho',
    video: '6shSnZrVhL0',
    content: <IntroMiho />,
  },
  {
    key: 'kurio',
    positioning: 'top-[13.5rem] left-[14rem]',
    frameColor: 'border-[#97feb1] hover:bg-[#97feb1] active:bg-[#97feb1]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(145,254,178,0.5)]',
    twitterUrl: 'https://twitter.com/kuiro0723',
    youtubeUrl: 'https://www.youtube.com/@kuiro0723',
    instagramUrl: 'https://www.instagram.com/kub_live_',
    name: '古洢蘿 | Kuiro',
    video: 'KeJB2RvxPwE',
    content: <IntroKuiro />,
  },
  {
    key: 'sora',
    positioning: 'top-[20rem] left-[20.75rem]',
    frameColor: 'border-[#8f9bc3] hover:bg-[#8f9bc3] active:bg-[#8f9bc3]',
    shadowColor: 'drop-shadow-[8px_0px_0px_rgba(143,155,195,0.5)]',
    twitterUrl: 'https://twitter.com/hasakaki_sora',
    youtubeUrl: 'https://www.youtube.com/@hasakakisora',
    instagramUrl: 'https://www.instagram.com/hasakaki_sora',
    name: '羽榊そら | 羽榊天音 | Sora',
    video: 'e293yhqB8Jo',
    content: <IntroSora />,
  },
];

export default oshinokoData;
