import tw from 'twin.macro';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import IconLink from './icon-link';

const BottomBar = tw.div`flex select-none justify-center pl-2 pr-2 pt-1 pb-1 bg-dracula-darker shadow-md text-xs items-center`;

const Footer = () => (
  <footer>
    <BottomBar>
      <div className="items-center justify-center text-center">
        © {new Date().getFullYear()},
        <span className="text-dracula-buffy">Sawa</span>
        <br />
        Built with <span className="text-dracula-purple">Gatsby.js</span>
        <br />
        <div className="flex items-center justify-center gap-x-2">
          <IconLink
            target="https://github.com/sawaYch"
            isExternalLink
            icon={<FaGithubAlt size="1rem" />}
          />
          <IconLink
            target="https://twitter.com/SawaYch"
            isExternalLink
            icon={<FaTwitter size="1rem" />}
          />
        </div>
      </div>
    </BottomBar>
  </footer>
);

export default Footer;
