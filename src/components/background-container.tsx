import { PropsWithChildren } from 'react';

const BackgroundContainer = ({ children }: PropsWithChildren) => (
  <div
    className={`
  bg-dracula-darker/70
  text-white
  w-lvw
  bg-glow
`}
  >
    {children}
  </div>
);

export default BackgroundContainer;
