import { motion } from 'framer-motion';
import { ReactElement, ReactNode } from 'react';
import { BsFillBriefcaseFill } from '@react-icons/all-files/bs/BsFillBriefcaseFill';
import { isMobile } from 'react-device-detect';
import { Timeline, Text } from '@mantine/core';

export interface VoidTimeItemProps {
  time: string;
  title: string;
  body: string | ReactElement;
  order?: number;
  icon?: ReactNode;
}

const VoidTimelineItem = ({
  icon,
  title,
  body,
  time,
  order,
}: VoidTimeItemProps) => (
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
    <Timeline.Item bullet={icon ?? <BsFillBriefcaseFill />}>
      <Text c="dimmed" size="sm">
        {time}
      </Text>
      <Text size="xs" mt={4}>
        {title}
      </Text>
      <Text>{body}</Text>
    </Timeline.Item>
  </motion.div>
);

export default VoidTimelineItem;
