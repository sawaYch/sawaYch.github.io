import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { FcRemoveImage } from '@react-icons/all-files/fc/FcRemoveImage';
import { Img } from 'react-image';
import Spinner from './spinner';
import PaneContainer from './pane-container';

const Pulse = () => (
  <div className="w-fit">
    <div className="flex items-center justify-center">
      <div className="w-fit">
        <div className="-mx-10 h-[1.5rem] -mb-8 bg-dracula-green-400/30 -skew-x-12 backdrop-blur-sm" />
        <div className="flex">
          <h2 className="z-50 !text-dracula-green-300">Pulse</h2>{' '}
          <FaReact size="2rem" className="z-50 ml-2 text-dracula-dark-200" />
        </div>
      </div>
    </div>
    <PaneContainer className="!w-fit !h-fit xs:w-screen !bg-dracula-dark/30 !backdrop-blur-sm p-4">
      <Img
        src="https://raw.githubusercontent.com/sawaYch/sawaYch/main/github-metrics.svg"
        alt="metrics"
        loader={
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Spinner className="!w-24 !h-24" />
          </div>
        }
        unloader={
          <div className="flex flex-col items-center justify-center h-full">
            <FcRemoveImage size="5rem" />
            <div>Fail to load pulse statistic</div>
          </div>
        }
        loading="lazy"
      />
    </PaneContainer>
  </div>
);

export default Pulse;
