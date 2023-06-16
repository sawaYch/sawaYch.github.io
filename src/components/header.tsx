import { StaticImage } from 'gatsby-plugin-image';
import { BsBatteryCharging } from '@react-icons/all-files/bs/BsBatteryCharging';
import { BsWifi } from '@react-icons/all-files/bs/BsWifi';
import { IoMdCellular } from '@react-icons/all-files/Io/IoMdCellular';
import tw from 'twin.macro';
import Clock from './clock';

const TopBar = tw.div`flex select-none justify-between pl-2 pr-2 pt-1 pb-1 bg-dracula-darker shadow-md text-xs items-center`;
const StatusPane = tw.div`flex items-center space-x-1.5`;

const Header = () => (
    <header>
      <TopBar>
        <StaticImage
          className="border-2 rounded-md border-dracula-dark-600 bg-dracula-buffy-200"
          src="../images/favicon.png"
          alt="Void Dojo"
          layout="fixed"
          width={24}
          height={24}
        />
        <Clock />
        <StatusPane>
          <IoMdCellular size="1.5em" />
          <BsWifi size="1.5em" />
          <BsBatteryCharging size="1.5em" />
        </StatusPane>
      </TopBar>
    </header>
  );

export default Header;
