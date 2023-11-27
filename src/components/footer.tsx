import { PropsWithChildren } from 'react';
import { isIPad13, isTablet } from 'react-device-detect';
import cn from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

interface BottomBarProps {
  className: string;
}
const BottomBar = ({
  children,
  className,
}: PropsWithChildren<BottomBarProps>) => (
  <div
    className={cn(
      'flex items-center justify-center pt-1 pl-2 pr-2 text-xs select-none bg-dracula-darker',
      className
    )}
  >
    {children}
  </div>
);

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
