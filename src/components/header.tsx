import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import IconLink from './icon-link';
import Clock from './clock';

const TopBar = tw.div`flex select-none justify-between pl-2 pr-4 pt-1 pb-1 bg-dracula-darker shadow-md text-xs items-center`;
const StatusPane = tw.div`flex items-center space-x-1.5`;

const Header = () => (
  <header className="z-50">
    <TopBar>
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
      <Clock />
      <StatusPane>
        <div className="flex items-center justify-center gap-x-2">
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
        </div>
      </StatusPane>
    </TopBar>
  </header>
);

export default Header;
