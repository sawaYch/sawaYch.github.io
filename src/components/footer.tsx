import tw from 'twin.macro';
import { isIPad13, isTablet } from 'react-device-detect';
import cn from 'classnames';
// import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
// import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
// import IconLink from './icon-link';

const BottomBar = tw.div`flex select-none justify-center pl-2 pr-2 pt-1 bg-dracula-darker text-xs items-center`;

const Footer = () => (
  <footer className="z-50">
    <BottomBar className={cn({ 'pb-4': isIPad13 || isTablet })}>
      <div className="items-center justify-center text-center">
        <span className="text-dracula-buffy">Sawa</span>©
        {new Date().getFullYear()} - Built with{' '}
        <span className="text-dracula-purple">Gatsby.js</span>
        <div className="flex items-center justify-center gap-x-2">
          {/* <IconLink
            target="https://github.com/sawaYch"
            isExternalLink
            icon={<FaGithubAlt size="1rem" />}
            ariaLabel="github"
          />
          <IconLink
            target="https://twitter.com/SawaYch"
            isExternalLink
            icon={<FaTwitter size="1rem" />}
            ariaLabel="twitter"
          /> */}
        </div>
      </div>
    </BottomBar>
  </footer>
);

export default Footer;
