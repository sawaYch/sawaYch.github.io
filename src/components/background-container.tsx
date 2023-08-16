import tw from 'twin.macro';

const BackgroundContainer = tw.div`
  font-primary
  bg-dracula-darker-800
  text-dracula-cullen
  h-screen
  supports-[height:100cqh]:h-[100cqh] 
  supports-[height:100svh]:h-[100svh]
  w-screen
  flex
  flex-col
  overflow-hidden
  fixed
`;

export default BackgroundContainer;
