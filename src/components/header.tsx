import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { IoMdGitBranch } from '@react-icons/all-files/io/IoMdGitBranch';
import IconLink from './icon-link';

const TopBar = tw.div`flex select-none justify-between bg-dracula-darker shadow-md text-xs`;
const StatusPane = tw.div`flex items-center justify-center gap-x-2 pl-4 pr-4 bg-dracula-pink-400/70`;

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
        <IoMdGitBranch size="1.7rem" />
        <span className="pr-2">VoidDojo</span>
        <div className="flex items-center justify-center h-full pl-2 pr-2 bg-dracula-purple-600/70">
          Master
        </div>
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
          icon={<FaTwitter size="1rem" />}
          ariaLabel="twitter"
        />
      </StatusPane>
    </TopBar>
  </header>
);

export default Header;
