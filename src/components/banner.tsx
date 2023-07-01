import { motion } from 'framer-motion';

const Banner = () => (
  <div className="flex flex-row items-center justify-center w-full h-screen">
    <div className="flex flex-col items-center self-center justify-center pb-64 pointer-events-none select-none justify-items-center">
      <motion.div
        className="px-8 py-1 text-2xl tracking-widest bg-opacity-50 wt-text-shadow"
        variants={{
          offscreen: {
            x: 100,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 100,
            },
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0 }}
      >
        Welcome To
      </motion.div>
      <motion.div
        className="flex items-start justify-center h-full mt-2 md:mt-6 text-[4rem] md:text-[8rem] vd-text-shadow font-block"
        variants={{
          offscreen: {
            y: 100,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.7,
              type: 'spring',
              stiffness: 50,
            },
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0 }}
      >
        void dojo
      </motion.div>
    </div>
  </div>
);

export default Banner;
