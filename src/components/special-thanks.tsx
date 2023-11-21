import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import PaneContainer from './pane-container';

const SpecialThanks = () => (
  <motion.div
    className="!w-fit !h-fit flex justify-center items-center"
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
    viewport={{ once: true, amount: 0 }}
  >
    <PaneContainer className="!w-[40ch] sm:!w-[64ch] !p-4 !backdrop-blur-sm !bg-dracula-green/10 !rounded-xl">
      <h3 className="text-center">Special thanks to Kuiro!</h3>
      <div className="flex">
        <div className="flex flex-col items-start justify-center flex-1">
          <div className="self-center inline w-12 h-12 overflow-auto rounded-full bg-dracula-green-100">
            <a
              href="https://youtube.com/@kuiro0723"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kurio youtube link"
            >
              <StaticImage
                src="../images/ar_ku.webp"
                alt="kurio"
                layout="fullWidth"
                placeholder="blurred"
              />
            </a>
          </div>
          <div className="mt-4">
            The Background &quot;Matrix Rain&quot; text are using{' '}
            <strong className="text-dracula-green bold">
              <a
                className="text-center underline hover:text-dracula-darker-300"
                href="https://drive.google.com/drive/folders/1reo7qWBulakQZJT5sCmIGOOYA8Ynu3In"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ku font download link"
              >
                Ku-font Graph
              </a>
            </strong>
            — a cutie font created by HKVtuber Kuiro! Kuiro is the cutest
            crocodile!
          </div>
        </div>
      </div>
      <h4 className="mt-4">Preview:</h4>
      <h5 className="text-center">Ku</h5>
      <div className="flex flex-wrap items-center justify-center w-full">
        <span className="text-2xl font-ku">Lorem&nbsp;</span>
        <span className="text-xl font-ku">ipsum&nbsp;</span>
        <span className="text-lg font-ku">dolor&nbsp;</span>
        <span className="text-md font-ku">sit&nbsp;</span>
        <span className="text-sm font-ku">amet&nbsp;</span>
      </div>
      <h5 className="text-center">Ku Graph</h5>
      <div className="flex flex-wrap items-center justify-center w-full">
        <span className="text-2xl font-graph">Lorem&nbsp;</span>
        <span className="text-xl font-graph">ipsum&nbsp;</span>
        <span className="text-lg font-graph">dolor&nbsp;</span>
        <span className="text-md font-graph">sit&nbsp;</span>
        <span className="text-sm font-graph">amet&nbsp;</span>
      </div>
    </PaneContainer>
  </motion.div>
);

export default SpecialThanks;
