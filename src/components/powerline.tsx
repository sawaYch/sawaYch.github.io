import { PropsWithChildren, useMemo } from 'react';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaRegDotCircle } from '@react-icons/all-files/fa/FaRegDotCircle';
import { IoMdGitBranch } from '@react-icons/all-files/io/IoMdGitBranch';
import { IoMdApps } from '@react-icons/all-files/io/IoMdApps';
import { IoMdReturnRight } from '@react-icons/all-files/io/IoMdReturnRight';
import { isMobile } from 'react-device-detect';
import { Kbd, Tooltip } from '@mantine/core';
import IconLink from './icon-link';
import useCurrentModules from '../utils/use-current-modules';

const StatusPane = ({ children }: PropsWithChildren) => (
  <div className="flex items-center justify-center h-full pl-4 pr-4 gap-x-2 bg-dracula-pink-400/80">
    {children}
  </div>
);

const BottomBar = ({ children }: PropsWithChildren) => (
  <header className="fixed bottom-[20px] w-screen flex justify-between text-xs select-none bg-dracula-darker z-[60]">
    {children}
  </header>
);

interface PowerlineProps {
  onAppIconClick: () => void;
}

const Powerline = ({ onAppIconClick }: PowerlineProps) => {
  const moduleName = useCurrentModules();

  const formatModuleName = useMemo(
    () =>
      isMobile ? moduleName?.toUpperCase()?.[0] : moduleName?.toUpperCase(),
    [moduleName]
  );

  return (
    <BottomBar>
      <div className="flex items-center bg-dracula-dark">
        <div className="flex items-center justify-center !w-12 select-none bg-dracula-blue py-1 h-full">
          <FaRegDotCircle size="0.8rem" />
        </div>
        <IoMdGitBranch
          size="1rem"
          className="ml-2 mr-1 pointer-events-none select-none"
        />
        <span className="pr-2 pointer-events-none select-none">master</span>
        <StatusPane>
          <IconLink
            target="https://github.com/sawaYch"
            isExternalLink
            icon={<FaGithubAlt size="1rem" />}
            ariaLabel="github"
          />
          |
          <IconLink
            target="https://twitter.com/SawaYch"
            isExternalLink
            icon={
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            }
            ariaLabel="twitter"
          />
        </StatusPane>
        <div className="flex h-full gap-1 px-2 pt-1 bg-dracula-[#9ece6a]">
          <IoMdReturnRight className="mt-[0.1rem]" />
          <div className="text-[0.5rem] rounded-sm bg-dracula-dark px-1 mb-1">
            {formatModuleName}
          </div>
        </div>
      </div>
      <div className="flex">
        <StatusPane>{isMobile ? 'VD' : 'VoidDojo'}</StatusPane>
        <Tooltip
          label={
            <>
              <Kbd>Space</Kbd>
            </>
          }
        >
          <button
            onClick={onAppIconClick}
            type="button"
            className="flex items-center justify-center w-12 bg-dracula-dark"
          >
            <svg width="0" height="0">
              <linearGradient
                id="dracula-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#ff79c6" offset="0%" />
                <stop stopColor="#bd93f9" offset="100%" />
              </linearGradient>
            </svg>
            <IoMdApps size="1rem" style={{ fill: 'url(#dracula-gradient)' }} />
          </button>
        </Tooltip>
      </div>
    </BottomBar>
  );
};

export default Powerline;
