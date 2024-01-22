import { PropsWithChildren } from 'react';
import { isIPad13, isTablet } from 'react-device-detect';
import cn from 'classnames';

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
        <span className="text-dracula-buffy">Sawa</span> built with❤️🐧🐼
      </div>
    </BottomBar>
  </footer>
);

export default Footer;
