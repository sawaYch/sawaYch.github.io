import { FC, PropsWithChildren } from 'react';
import { Slice } from 'gatsby';
import tw from 'twin.macro';
import BackgroundContainer from './background-container';

const StyledMain = tw.main`flex-auto ml-4 mt-4 mb-4 pr-4 overflow-hidden hover:overflow-y-auto space-y-2`;

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <BackgroundContainer>
    <Slice alias="header" />
    <StyledMain>{children}</StyledMain>
    <Slice alias="footer" />
  </BackgroundContainer>
);

export default Layout;
