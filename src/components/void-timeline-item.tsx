import { Timeline } from 'flowbite-react';
import { motion } from 'framer-motion';
import { FC, ReactElement, SVGProps, useMemo } from 'react';
import { BsFillBriefcaseFill } from '@react-icons/all-files/bs/BsFillBriefcaseFill';
import { isMobile } from 'react-device-detect';

export interface VoidTimeItemProps {
  time: string;
  title: string;
  body: string | ReactElement;
  order?: number;
  icon?: FC<SVGProps<SVGSVGElement>>;
}

const VoidTimelineItem = ({
  icon,
  title,
  body,
  time,
  order,
}: VoidTimeItemProps) => {
  const customPointTheme = useMemo(
    () => ({
      marker: {
        icon: {
          base: 'text-dracula-purple animate-pulse',
          wrapper:
            'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-dracula-dark ring-4 ring-white',
        },
      },
    }),
    []
  );

  const customTimeTheme = useMemo(
    () => ({
      time: 'mb-1 text-sm font-normal leading-none text-gray-300',
    }),
    []
  );

  const customTitleTheme = useMemo(
    () => ({
      title: 'text-lg font-semibold text-white',
    }),
    []
  );

  const customBodyTheme = useMemo(
    () => ({
      body: 'mb-4 text-base font-normal text-gray-400',
    }),
    []
  );

  return (
    <motion.div
      variants={
        isMobile
          ? undefined
          : {
              offscreen: {
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: (order ?? 1) * 0.5,
                },
              },
            }
      }
      initial="offscreen"
      whileInView="onscreen"
      layout="position"
      viewport={{ once: true }}
    >
      <Timeline.Item>
        <Timeline.Point
          icon={icon ?? BsFillBriefcaseFill}
          theme={customPointTheme}
        />
        <Timeline.Content>
          <Timeline.Time theme={customTimeTheme}>{time}</Timeline.Time>
          <Timeline.Title theme={customTitleTheme}>{title}</Timeline.Title>
          <Timeline.Body theme={customBodyTheme}>{body}</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </motion.div>
  );
};

export default VoidTimelineItem;
