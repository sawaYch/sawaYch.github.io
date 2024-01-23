import { PropsWithChildren } from 'react';

const BackgroundContainer = ({ children }: PropsWithChildren) => (
  <div
    className={`
  font-primary
  bg-dracula-darker/70
  text-white
  flex
  flex-col
  w-dvw
  bg-glow
`}
  >
    {children}
  </div>
);

export default BackgroundContainer;
