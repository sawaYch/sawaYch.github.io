import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { StaticImage } from 'gatsby-plugin-image';
import { IoMdCube } from '@react-icons/all-files/io/IoMdCube';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { GridLoader } from 'react-spinners';
import BackgroundContainer from './background-container';
import Header from './header';
import Footer from './footer';
import delay from '../utils/delay';

const StyledMain = tw.main`flex-auto overflow-x-hidden overscroll-none`;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);

  const [, setMainSectionReload] = useState(0);

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

  const handleRefresh = useCallback(async () => {
    await delay(1000);
    setMainSectionReload((prev) => prev + 1);
  }, []);

  const disableContextMenuOfBgPattern = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    currentRef?.addEventListener('contextmenu', disableContextMenuOfBgPattern);

    return () => {
      currentRef?.removeEventListener(
        'contextmenu',
        disableContextMenuOfBgPattern
      );
    };
  }, [disableContextMenuOfBgPattern]);

  return (
    <BackgroundContainer>
      <Header />
      <StyledMain ref={ref}>
        <div className="!absolute top-0 left-0 w-screen h-screen bg-pattern pointer-events-none select-none" />
        <StaticImage
          className="!absolute top-0 left-0 opacity-05 w-screen h-screen pointer-events-none select-none"
          src="../images/girl.webp"
          alt="background images"
          layout="fullWidth"
        />
        <PullToRefresh
          onRefresh={handleRefresh}
          pullDownThreshold={70}
          maxPullDownDistance={80}
          resistance={2}
          refreshingContent={
            <div className="flex items-center justify-center mt-4">
              <GridLoader size={8} color="#d3b6fc" />
            </div>
          }
          pullingContent={
            <div className="flex items-center justify-center mt-4">
              <IoMdCube
                size="2rem"
                className="text-dracula-purple-200 animate-bounce"
              />
            </div>
          }
        >
          <ResponsiveGridLayout
            className="relative layout"
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
        </PullToRefresh>
      </StyledMain>
      <Footer />
    </BackgroundContainer>
  );
};

export default Layout;
