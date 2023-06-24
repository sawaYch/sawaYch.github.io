import {
  FC,
  PropsWithChildren,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundContainer from './background-container';
import Header from './header';
import Footer from './footer';

const StyledMain = tw.main`flex-auto overflow-x-hidden`;

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

  const layoutWidth = useMemo(() => width, [width]);
  const rowHeight = useMemo(() => height / 10, [height]);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <BackgroundContainer>
      <Header />
      <StyledMain ref={ref} className="bg-pattern">
        <StaticImage
          className="!absolute top-0 left-0 opacity-05 w-screen h-screen"
          src="../images/girl.webp"
          alt="background images"
          layout="fullWidth"
        />
        <ResponsiveGridLayout
          className="layout relative"
          layouts={{
            lg: [
              {
                i: 'matrixRain',
                x: 0,
                y: 0,
                w: 4,
                h: 2,
                minW: 1,
                maxW: 12,
              },
              {
                i: 'location',
                x: 4,
                y: 0,
                w: 2,
                h: 2,
                minW: 2,
                maxW: 4,
                minH: 2,
              },
              {
                i: 'specCard',
                x: 4,
                y: 0,
                w: 4,
                h: 3,
                minW: 4,
                maxW: 6,
                minH: 3,
              },
              {
                i: 'ghMap',
                x: 0,
                y: 1,
                w: 4,
                h: 2,
                minH: 2,
                maxH: 2,
                maxW: 4,
                minW: 4,
              },
            ],
          }}
          width={layoutWidth}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={rowHeight}
        >
          {children}
        </ResponsiveGridLayout>
      </StyledMain>
      <Footer />
    </BackgroundContainer>
  );
};

export default Layout;
