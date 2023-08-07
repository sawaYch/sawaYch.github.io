/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { AiOutlineZoomIn } from '@react-icons/all-files/ai/AiOutlineZoomIn';
import { AiOutlineZoomOut } from '@react-icons/all-files/ai/AiOutlineZoomOut';
import { BiReset } from '@react-icons/all-files/bi/BiReset';

interface ControlProps {
  zoomIn: () => void;
  zoomOut: () => void;
  resetTransform: () => void;
}

const ImagePanControls = ({
  zoomIn,
  zoomOut,
  resetTransform,
}: ControlProps) => (
  <div className="flex">
    <div onClick={() => zoomIn()} className="flex cursor-pointer">
      <AiOutlineZoomIn size="1.5rem" />
    </div>
    <div onClick={() => zoomOut()} className="flex cursor-pointer">
      <AiOutlineZoomOut size="1.5rem" />
    </div>
    <div onClick={() => resetTransform()} className="flex cursor-pointer">
      <BiReset size="1.5rem" />
    </div>
  </div>
);

export default ImagePanControls;
