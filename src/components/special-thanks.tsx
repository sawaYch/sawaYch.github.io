import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube';
import PaneContainer from './pane-container';

const SpecialThanks = () => (
  <motion.div
    className="!w-screen !h-fit flex justify-center items-center"
    variants={{
      offscreen: {
        x: 100,
        rotate: 270,
        opacity: 0,
      },
      onscreen: {
        x: 0,
        opacity: 1,
        rotate: 0,
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
    <PaneContainer className="!w-3/4 !p-4 !backdrop-blur-sm !bg-dracula-green/10 !rounded-xl">
      <h3>Special thanks to Kuiro!</h3>
      <div className="flex">
        <div className="flex flex-col items-start justify-center flex-1">
          <div>
            The Background &quot;Matrix Rain&quot; text are using{' '}
            <strong className="text-dracula-green bold">Ku-font Graph</strong> —
            a cutie font created by HKVtuber Kuiro! Kuiro is the cutest
            crocodile!
          </div>
          <div className="mt-2">
            <a
              className="underline hover:text-dracula-darker-300"
              href="https://www.youtube.com/redirect?event=backstage_event&redir_token=QUFFLUhqbW5GeTVyejJ0Xy1jZHNGM2JKcVVwckhVODJpZ3xBQ3Jtc0trTFNkVU1SUzRjZGNxY1I2dHZEalBwelJneGtNVXVuejFiOEFVN3lHcmsyUlpyUHFNMHladE13dUxQRlN3Qk9NUGZ4Z1JaTkR3NWQ4RUdwR3A3Y09iemx6amtpdi1ITGI5TWZBSmVCdkdzWjVHa2MzNA&q=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1reo7qWBulakQZJT5sCmIGOOYA8Ynu3In%3Fusp%3Dsharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ku font download link"
            >
              Download (Google Drive)
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[8rem] h-[8rem] rounded-full bg-dracula-green-100 overflow-auto inline select-none pointer-events-none">
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
            <a
              className="flex items-center justify-center underline"
              href="https://youtube.com/@kuiro0723"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kurio youtube channel link"
            >
              <AiFillYoutube size="2rem" className="text-dracula-red" />
              Youtube Channel Link
            </a>
          </div>
        </div>
      </div>
      <h4>Sample:</h4>
      <h5>Ku</h5>
      <div>
        <span className="text-2xl font-ku">Lorem&nbsp;</span>
        <span className="text-xl font-ku">ipsum&nbsp;</span>
        <span className="text-lg font-ku">dolor&nbsp;</span>
        <span className="text-md font-ku">sit&nbsp;</span>
        <span className="text-sm font-ku">amet&nbsp;</span>
      </div>
      <h5>Ku Graph</h5>
      <div>
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
