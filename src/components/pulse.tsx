import { FaReact } from '@react-icons/all-files/fa/FaReact';
import PaneContainer from './pane-container';

const Pulse = () => (
  <div className="w-fit">
    <div className="flex">
      <div className="flex flex-col items-center justify-start">
        <div className="w-[18rem] h-[1.5rem] -mb-10 bg-dracula-green-400/30 -skew-x-12 backdrop-blur-sm" />
        <div className="flex">
          <h2 className="z-50 !text-dracula-green-300">Pulse</h2>{' '}
          <FaReact size="2rem" className="z-50 ml-2 text-dracula-dark-200" />
        </div>
      </div>
    </div>
    <PaneContainer className="!w-fit !h-fit xs:w-screen !bg-dracula-dark/30 !backdrop-blur-sm p-4">
      <img
        src="https://raw.githubusercontent.com/sawaYch/sawaYch/main/github-metrics.svg"
        alt="metrics"
        loading="lazy"
      />
    </PaneContainer>
  </div>
);

export default Pulse;
