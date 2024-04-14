import cn from 'classnames';
import { Img } from 'react-image';
import { IconPhotoCancel } from '@tabler/icons-react';
import Spinner from './spinner';

interface LazyImgProps {
  alt: string;
  src: string;
}

const LazyImg = ({ alt, src }: LazyImgProps) => (
  <>
    <div className={cn('flex justify-center w-32 h-32 bg-dracula-dark/20')}>
      <Img
        className={cn('object-cover')}
        src={src}
        alt={alt}
        loader={
          <div className="flex flex-col items-center justify-center w-full h-32">
            <Spinner />
          </div>
        }
        unloader={
          <div className="flex flex-col items-center justify-center h-full">
            <IconPhotoCancel size="5rem" />
            <div>Fail to load image</div>
          </div>
        }
      />
    </div>
  </>
);

export default LazyImg;
