import {
  FC,
  PropsWithChildren,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Slice } from 'gatsby';
import tw from 'twin.macro';
import { Responsive, WidthProvider } from 'react-grid-layout';
import BackgroundContainer from './background-container';

const StyledMain = tw.main`flex-auto pt-2 pb-2 pr-8 overflow-y-scroll overflow-x-hidden space-y-2`;

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
      <Slice alias="header" />
      <StyledMain
        ref={ref}
        className="bg-sunset bg-cover backdrop-blur bg-center  transition-all ease-in duration-500"
      >
        <div className="backdrop-blur-sm w-screen h-screen mix-blend-normal">
          <ResponsiveGridLayout
            className="layout"
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
        </div>
      </StyledMain>
      <Slice alias="footer" />
    </BackgroundContainer>
  );
};

export default Layout;
