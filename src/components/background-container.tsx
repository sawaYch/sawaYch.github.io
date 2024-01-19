import { PropsWithChildren } from 'react';

const BackgroundContainer = ({ children }: PropsWithChildren) => (
  <div
    className={`
  font-primary
  bg-dracula-darker/70
  text-white
  h-screen
  supports-[height:100cqh]:h-[100cqh] 
  supports-[height:100svh]:h-[100svh]
  w-screen
  flex
  flex-col
  bg-glow
`}
  >
    {children}
  </div>
);

export default BackgroundContainer;
