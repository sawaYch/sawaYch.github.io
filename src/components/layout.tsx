import {
  FC,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import MatrixRain from './matrix-rain';
import BackgroundContainer from './background-container';
import Header from './header';
import Footer from './footer';

const StyledMain = tw.main`flex-auto overflow-x-hidden z-0`;

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
        <StaticImage
          className="!absolute top-0 left-0 opacity-bg w-screen h-screen pointer-events-none select-none z-10"
          src="../images/girl.webp"
          alt="background images"
          layout="fullWidth"
        />
        <div className="absolute top-0 left-0 z-20 w-screen h-screen pointer-events-none select-none bg-pattern" />
        <MatrixRain
          size={12}
          className="opacity-40 w-screen h-custom absolute !border-0 bottom-0 pointer-events-none select-none z-30"
        />
        <div className="relative z-40 flex flex-col items-center justify-center w-screen">
          {children}
        </div>
      </StyledMain>
      <Footer />
    </BackgroundContainer>
  );
};

export default Layout;
