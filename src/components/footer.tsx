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
  <footer
    className={cn(
      'z-[60] flex items-center justify-center pt-1 pl-2 pr-2 text-xs select-none bg-dracula-darker fixed bottom-0 w-screen left-0 right-0',
      className
    )}
  >
    {children}
  </footer>
);

const Footer = () => (
  <BottomBar className={cn({ 'pb-4': isIPad13 || isTablet })}>
    <div className="items-center justify-center text-center">
      ©{new Date().getFullYear()}{' '}
      <span className="text-dracula-buffy">Sawa</span> built with❤️🐧🐼
    </div>
  </BottomBar>
);

export default Footer;
