import { PropsWithChildren } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaRegDotCircle } from '@react-icons/all-files/fa/FaRegDotCircle';
import { IoMdGitBranch } from '@react-icons/all-files/io/IoMdGitBranch';
import IconLink from './icon-link';

const StatusPane = ({ children }: PropsWithChildren) => (
  <div className="flex items-center justify-center pl-4 pr-4 gap-x-2 bg-dracula-pink-400/70">
    {children}
  </div>
);

const TopBar = ({ children }: PropsWithChildren) => (
  <nav className="sticky top-0 flex justify-between text-xs shadow-md select-none bg-dracula-darker">
    {children}
  </nav>
);

const Header = () => (
  <header className="z-50">
    <TopBar>
      <div className="flex items-center bg-dracula-pink-400/70 rounded-l-md">
        <div className="transition-transform border-2 rounded-md active:scale-125 border-dracula-dark-600 bg-dracula bg-dracula-buffy-200">
          <StaticImage
            className="pointer-events-none select-none "
            src="../images/favicon.webp"
            alt="Void Dojo"
            layout="fixed"
            width={24}
            height={24}
          />
        </div>
        <IoMdGitBranch
          size="1.7rem"
          className="pointer-events-none select-none"
        />
        <span className="pr-2 pointer-events-none select-none">VoidDojo</span>
        <div className="flex items-center justify-center h-full pl-2 pr-2 pointer-events-none select-none bg-dracula-purple-600/70">
          Master
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center justify-center !w-12 select-none bg-dracula-darker-800">
          <FaRegDotCircle size="1rem" />
        </div>
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
      </div>
    </TopBar>
  </header>
);

export default Header;
