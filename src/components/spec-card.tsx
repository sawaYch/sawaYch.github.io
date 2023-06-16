import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Spec from '../content/spec.mdx';

const CardContainer = tw.div`backdrop-blur-md bg-dracula-darker h-full p-4 text-xs border select-none pointer-events-none border-dracula-aro`;

const SpecCard = () => (
  <CardContainer>
    <div className="flex flex-row items-center justify-center">
      <StaticImage
        src="../images/computer.png"
        alt="computer"
        layout="fixed"
        width={192}
        height={192}
      />
      <Spec />
    </div>
  </CardContainer>
);

export default SpecCard;
