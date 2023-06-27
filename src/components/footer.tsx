import tw from 'twin.macro';
import { isIPad13, isTablet } from 'react-device-detect';
import cn from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

const BottomBar = tw.div`flex select-none justify-center pl-2 pr-2 pt-1 bg-dracula-darker text-xs items-center`;

const Footer = () => (
  <footer className="z-50">
    <BottomBar className={cn({ 'pb-4': isIPad13 || isTablet })}>
      <div className="items-center justify-center text-center">
        ©{new Date().getFullYear()}{' '}
        <span className="text-dracula-buffy">Sawa</span> built with{' '}
        <a
          href="https://github.com/sawaYch/sawaYch.github.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="sawaYch.github.io link"
        >
          <StaticImage
            className="inline-block align-text-top"
            src="../images/gatsby.svg"
            alt="gatsby"
            layout="fixed"
            width={12}
            height={12}
          />
        </a>{' '}
        ❤️🐧🐼
      </div>
    </BottomBar>
  </footer>
);

export default Footer;
