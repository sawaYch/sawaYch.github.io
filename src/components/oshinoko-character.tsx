/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  MouseEventHandler,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { HiOutlineX } from '@react-icons/all-files/hi/HiOutlineX';
import { AnimatePresence, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';
import { Badge } from '@mantine/core';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import ReactPlayer from 'react-player/lazy';
import Spinner from './spinner';
import oshinokoData, { StreamTypeEnum } from './oshinoko-data';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface OshinokoCharacterPaneProps {
  isOpen: boolean;
  selectedData: (typeof oshinokoData)[0] | undefined;
  onClose: () => void;
}

interface SocialLinkProps {
  youtube?: string;
  twitter?: string;
  instagram?: string;
  className?: string;
}

interface StatChartProps {
  data: number[];
  color: string;
  chartDownloadFileName: string;
}

interface IStatChartHandler {
  downloadChart: MouseEventHandler<HTMLDivElement>;
}

interface StreamTypeBadgesProps {
  data: StreamTypeEnum[];
}

const SocialLink = ({
  youtube,
  twitter,
  instagram,
  className,
}: SocialLinkProps) => (
  <div className={cn('flex gap-x-0.5', className)}>
    {youtube ? (
      <div className="flex">
        <a
          className="underline hover:text-dracula-darker-300"
          href={youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube link"
        >
          <FaYoutubeSquare size="3rem" className="text-dracula-red" />
        </a>
      </div>
    ) : null}
    {twitter ? (
      <div className="flex">
        <a
          className="underline hover:text-dracula-darker-300"
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter link"
        >
          <FaTwitterSquare size="3rem" className="text-dracula-cyan" />
        </a>
      </div>
    ) : null}
    {instagram ? (
      <div className="flex">
        <a
          className="underline hover:text-dracula-darker-300"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram link"
        >
          <FaInstagramSquare size="3rem" className="text-dracula-purple" />
        </a>
      </div>
    ) : null}
  </div>
);

const StreamTypeBadges = ({ data }: StreamTypeBadgesProps) => {
  const mapColor = useCallback((input: StreamTypeEnum) => {
    switch (input) {
      case StreamTypeEnum.Sing:
        return 'red';
      case StreamTypeEnum.Game:
        return 'lime';
      case StreamTypeEnum.Chat:
        return 'grape';
      case StreamTypeEnum.Collab:
        return 'yellow';
      case StreamTypeEnum.Project:
        return 'green';
      case StreamTypeEnum.MusicalComposition:
        return 'indigo';
      case StreamTypeEnum.Drawing:
        return 'pink';
      default:
        return 'violet';
    }
  }, []);

  const StreamTypeEnumOrder = useMemo(() => Object.values(StreamTypeEnum), []);

  return (
    <div className="grid grid-cols-4 gap-1 mt-2">
      {data
        .sort(
          (a, b) =>
            StreamTypeEnumOrder.indexOf(a) - StreamTypeEnumOrder.indexOf(b)
        )
        .map((it) => (
          <Badge color={mapColor(it)}>{it}</Badge>
        ))}
    </div>
  );
};

const StatChart = forwardRef<IStatChartHandler, StatChartProps>(
  ({ data, chartDownloadFileName, color }: StatChartProps, ref) => {
    const rgb = useMemo(() => {
      let colorHex = color;
      colorHex = color.replace(/[[\]#-]+|bg/g, '');
      const r = parseInt(colorHex.slice(0, 2), 16);
      const g = parseInt(colorHex.slice(2, 4), 16);
      const b = parseInt(colorHex.slice(4, 6), 16);
      return { r, g, b };
    }, [color]);

    const mappedData = useMemo(() => {
      const category = [
        'キャラ絵',
        '雜談力',
        '企画力',
        '頭脳',
        '笑い',
        '魅力',
        '好感度',
        '声',
      ];

      return {
        labels: category,
        datasets: [
          {
            label: 'Level',
            data,
            fill: true,
            backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`,
            borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            pointBackgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b})`,
          },
        ],
      };
    }, [data, rgb.b, rgb.g, rgb.r]);

    const chartRef = useRef<any>(null);

    const downloadChart: MouseEventHandler<HTMLDivElement> = useCallback(
      (evt) => {
        evt.stopPropagation();
        if (chartRef?.current == null) {
          return;
        }
        const link = document.createElement('a');
        link.download = `${chartDownloadFileName}-stat.png`;
        link.href = chartRef?.current.toBase64Image();
        link.click();
      },
      [chartDownloadFileName, chartRef]
    );

    useImperativeHandle(
      ref,
      () => ({
        downloadChart,
      }),
      [downloadChart]
    );

    return (
      <div className="flex w-80 h-80">
        <Radar
          ref={chartRef}
          data={mappedData}
          options={{
            responsive: true,
            scales: {
              r: {
                max: 5,
                min: 0,
                beginAtZero: true,
                grid: {
                  color: '#222',
                },
                angleLines: {
                  color: '#555',
                },
                pointLabels: {
                  font: {
                    size: 14,
                    weight: '700',
                  },
                  color: '#ddd',
                },
                ticks: {
                  stepSize: 1,
                  display: false,
                },
              },
            },
            plugins: { legend: { display: false } },
          }}
        />
      </div>
    );
  }
);

const OshinokoCharacterPane = ({
  isOpen,
  selectedData,
  onClose,
}: OshinokoCharacterPaneProps) => {
  const [videoReady, setVideoReady] = useState(false);

  const container = useMemo(
    () => ({
      offscreen: {
        x: 10,
        opacity: 0,
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          staggerChildren: 0.5,
          delayChildren: 0.2,
        },
      },
      exit: {
        opacity: 0,
      },
    }),
    []
  );

  const retroTvItem = useMemo(
    () => ({
      offscreen: {
        y: 0,
        opacity: 0,
      },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
      exit: {
        opacity: 0,
      },
    }),
    []
  );

  const stopPropagation: MouseEventHandler<HTMLDivElement> = useCallback(
    (evt) => {
      if (isMobile) return;
      evt.stopPropagation();
    },
    []
  );

  const forceStopPropagation: MouseEventHandler<HTMLDivElement> = useCallback(
    (evt) => {
      evt.stopPropagation();
    },
    []
  );

  const chartRef = useRef<IStatChartHandler>(null);

  const handleDownloadChart: MouseEventHandler<HTMLDivElement> = useCallback(
    (evt) => {
      evt.stopPropagation();
      if (chartRef?.current == null) {
        return;
      }
      chartRef.current.downloadChart(evt);
    },
    []
  );

  return (
    <AnimatePresence>
      {!isOpen || selectedData == null ? null : (
        <div>
          <motion.div variants={container} exit="exit">
            <button
              aria-label="Close"
              type="button"
              onClick={onClose}
              className="fixed z-[61] top-10 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <HiOutlineX aria-hidden className="w-6 h-6" />
            </button>
          </motion.div>
          <motion.div
            onClick={onClose}
            variants={container}
            initial="offscreen"
            animate="onscreen"
            exit="exit"
            className={`overscroll-none touch-none pb-[10rem] fixed right-0 left-0 h-[calc(100%-1.7rem)] bottom-0 overflow-y-auto !overflow-x-hidden backdrop-blur-md ${selectedData.modalColor} bg-opacity-50 z-[60]`}
          >
            <div className="touch-scroll min-h-[100vh] w-screen overflow-auto z-[61]">
              <motion.div className="flex items-center justify-center w-screen h-[12rem]">
                <motion.div variants={retroTvItem}>
                  {isOpen ? (
                    <div className="absolute">
                      <StaticImage
                        className="absolute pointer-events-none select-none rounded-xl grayscale w-[22rem] -translate-x-1/2"
                        src="../images/retro-tv.png"
                        alt="Void Dojo"
                        layout="fullWidth"
                        placeholder="blurred"
                      />
                      <div
                        className={`absolute left-[1.75rem] top-[2rem] rounded-2xl w-[calc(22rem-7.4rem)] h-[11.35rem] ${selectedData.modalColor} -translate-x-[75%]`}
                      >
                        {!videoReady && (
                          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transform-gpu z-[62]">
                            <Spinner className="fill-dracula-light" />
                          </div>
                        )}
                        <ReactPlayer
                          className="absolute z-[61]"
                          url={selectedData.video}
                          pip
                          width="100%"
                          height="100%"
                          style={{
                            display: videoReady ? 'flex' : 'none',
                          }}
                          onReady={() => setVideoReady(true)}
                          onError={() => setVideoReady(false)}
                        />
                      </div>
                    </div>
                  ) : null}
                </motion.div>
              </motion.div>

              <div className="absolute w-screen mt-[10rem] flex flex-col justify-center items-center">
                <motion.div
                  variants={retroTvItem}
                  onClick={stopPropagation}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="flex px-4 text-lg uppercase -skew-x-12 bg-dracula-dark">
                      <span>Bio</span>
                    </div>
                    <hr className="flex w-72" />
                  </div>
                  <div
                    className="rounded-lg bg-dracula-dark"
                    onClick={forceStopPropagation}
                  >
                    <SocialLink
                      twitter={selectedData?.twitterUrl}
                      instagram={selectedData?.instagramUrl}
                      youtube={selectedData?.youtubeUrl}
                    />
                  </div>
                  <div className="p-4 m-4 rounded-lg sm:px-20 bg-dracula-dark">
                    {selectedData.content}
                  </div>
                </motion.div>
                <motion.div
                  onClick={stopPropagation}
                  variants={retroTvItem}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex items-center justify-center gap-x-2">
                    <div className="flex px-4 text-lg uppercase -skew-x-12 bg-dracula-dark">
                      <span>Type</span>
                    </div>
                    <hr className="flex w-64" />
                  </div>
                  <div>
                    <StreamTypeBadges data={selectedData.streamType} />
                  </div>
                </motion.div>
                <motion.div
                  onClick={stopPropagation}
                  variants={retroTvItem}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex items-center justify-center my-4 gap-x-2">
                    <div className="flex px-4 text-lg uppercase -skew-x-12 bg-dracula-dark">
                      <span>Stat</span>
                    </div>
                    <hr className="flex w-64" />
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 text-xs italic">
                    p.s. Personal subjective opinion, categories ref. to
                    <a
                      className="underline"
                      href="https://tuber-review.com/youtubers/1503"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yotuber世論調查
                    </a>
                    <div
                      className="px-2 my-2 underline uppercase cursor-pointer bg-dracula-dark"
                      onClick={handleDownloadChart}
                    >
                      *Export Chart*
                    </div>
                    <StatChart
                      ref={chartRef}
                      data={selectedData.stat}
                      color={selectedData.modalColor ?? '#222'}
                      chartDownloadFileName={selectedData.name ?? 'chart'}
                    />
                  </div>
                </motion.div>
              </div>
              <motion.div className="absolute left-1/2 -translate-x-1/2 top-10 text-[2rem] sm:text-[3rem] z-[51] oshinoko-character-name whitespace-nowrap uppercase">
                {selectedData?.name}
              </motion.div>
              <motion.div className="absolute left-1/2 -translate-x-1/2 top-12 text-[1rem] sm:text-[1.5rem] z-[51] italic whitespace-nowrap uppercase">
                {selectedData?.name}
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OshinokoCharacterPane;
