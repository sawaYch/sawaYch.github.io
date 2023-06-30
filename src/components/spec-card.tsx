import { StaticImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import Spec from '../content/spec.mdx';
import PaneContainer from './pane-container';

interface SpecCardProps {
  className?: string;
}

const SpecCard = ({ className }: SpecCardProps) => (
  <PaneContainer
    className={cn(
      'flex items-center justify-center text-xs pointer-events-none select-none',
      className
    )}
    withFrame
  >
    <p>➜ neofetch</p>
    <div className="flex flex-row items-center justify-center">
      <StaticImage
        src="../images/computer.webp"
        alt="computer"
        layout="fixed"
        placeholder="blurred"
        width={160}
        height={160}
      />
      <Spec />
    </div>
    ➜ <span className="animate-ping">█</span>
  </PaneContainer>
);

export default SpecCard;
