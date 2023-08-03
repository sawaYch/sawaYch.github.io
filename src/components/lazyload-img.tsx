import { useState } from 'react';
import cn from 'classnames';
import Spinner from './spinner';

interface LazyImgProps {
  alt: string;
  src: string;
}

const LazyImg = ({ alt, src }: LazyImgProps) => {
  const [load, setLoad] = useState(false);

  return (
    <>
      {!load && (
        <div className="flex flex-col items-center justify-center w-full h-32">
          <Spinner />
        </div>
      )}
      <div
        className={cn('flex justify-center w-full h-32 bg-dracula-dark/20', {
          hidden: !load,
        })}
      >
        <img
          className={cn('object-cover')}
          src={src}
          alt={alt}
          onLoad={() => {
            setLoad(true);
          }}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default LazyImg;
