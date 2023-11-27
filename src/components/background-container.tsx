import { PropsWithChildren } from 'react';

const BackgroundContainer = ({ children }: PropsWithChildren) => (
  <div
    className={`
  font-primary
  bg-dracula-darker-800
  text-dracula-cullen
  h-screen
  supports-[height:100cqh]:h-[100cqh] 
  supports-[height:100svh]:h-[100svh]
  w-screen
  flex
  flex-col
`}
  >
    {children}
  </div>
);

export default BackgroundContainer;
