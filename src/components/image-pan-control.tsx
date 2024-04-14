/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconZoomIn, IconZoomOut, IconZoomReset } from '@tabler/icons-react';

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
      <IconZoomIn size="1.5rem" />
    </div>
    <div onClick={() => zoomOut()} className="flex cursor-pointer">
      <IconZoomOut size="1.5rem" />
    </div>
    <div onClick={() => resetTransform()} className="flex cursor-pointer">
      <IconZoomReset size="1.5rem" />
    </div>
  </div>
);

export default ImagePanControls;
