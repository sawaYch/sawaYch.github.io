import {
  FC,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundContainer from './background-container';
import Header from './header';
import Footer from './footer';

const StyledMain = tw.main`flex-auto overflow-x-hidden overscroll-none`;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if (ref.current != null) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [height, width]);

  return (
    <BackgroundContainer>
      <Header />
      <StyledMain ref={ref}>
        <div className="!absolute top-0 left-0 w-screen h-screen bg-pattern pointer-events-none select-none" />
        <StaticImage
          className="!absolute top-0 left-0 opacity-bg w-screen h-screen pointer-events-none select-none"
          src="../images/girl.webp"
          alt="background images"
          layout="fullWidth"
        />
        {children}
      </StyledMain>
      <Footer />
    </BackgroundContainer>
  );
};

export default Layout;
