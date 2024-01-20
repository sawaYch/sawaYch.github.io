import { PropsWithChildren } from 'react';

const BackgroundContainer = ({ children }: PropsWithChildren) => (
  <div
    className={`
  bg-dracula-darker/70
  text-white
  w-[calc(100vw-1_px)]
  flex
  flex-col
  bg-glow
`}
  >
    {children}
  </div>
);

export default BackgroundContainer;
