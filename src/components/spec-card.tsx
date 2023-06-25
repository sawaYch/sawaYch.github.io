import { StaticImage } from 'gatsby-plugin-image';
import Spec from '../content/spec.mdx';
import PaneContainer from './pane-container';

const SpecCard = () => (
  <PaneContainer className="flex p-4 text-xs select-none pointer-events-none items-center justify-center">
    <div className="flex flex-row items-center justify-center">
      <StaticImage
        src="../images/computer.webp"
        alt="computer"
        layout="fixed"
        width={192}
        height={192}
      />
      <Spec />
    </div>
  </PaneContainer>
);

export default SpecCard;
