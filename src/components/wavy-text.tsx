import { FC } from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'> {
  text: string;
  delay?: number;
  replay: boolean;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  replay = true,
  ...props
}: Props) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {},
    visible: (i: number = 1) => ({
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        repeat: Infinity,
        repeatDelay: 2,
        repeatType: 'loop',
      },
    },
    hidden: {
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        repeat: Infinity,
        repeatDelay: 2,
        repeatType: 'loop',
      },
    },
  };

  return (
    <motion.div
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate={replay ? 'visible' : 'hidden'}
      viewport={{ once: false }}
      layout
      {...props}
    >
      {letters.map((letter, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WavyText;
