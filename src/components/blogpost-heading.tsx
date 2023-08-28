import {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import delay from '../utils/delay';

interface BlogPostHeadingProps {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  id: string;
  initAnchor?: string;
}

const BlogPostHeading = ({
  component,
  children,
  id,
  initAnchor,
}: PropsWithChildren<BlogPostHeadingProps>) => {
  const ref = useRef<HTMLHeadingElement>(null);

  const formattedId = useMemo(() => id.replaceAll(' ', '-'), [id]);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (evt) => {
      evt.preventDefault();
      // eslint-disable-next-line no-restricted-globals
      history.replaceState(null, '', `#${formattedId}`);
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [formattedId]
  );

  useEffect(() => {
    (async () => {
      if (initAnchor) {
        const formattedInitAnchor = `#${initAnchor.replace(' ', '-')}`;
        // eslint-disable-next-line no-restricted-globals
        history.replaceState(null, '', `#${initAnchor.replace(' ', '-')}`);

        // console.log(`anchor formattedId=${formattedId} formattedInitAnchor=${formattedInitAnchor}`);
        await delay(400);
        if (formattedInitAnchor === `#${formattedId}`) {
          ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    })();
  }, [formattedId, handleClick, initAnchor]);

  const HeadingComponent = useMemo(() => {
    const link = (
      <a href={formattedId && `#${formattedId}`} onClick={handleClick}>
        #
      </a>
    );

    switch (component) {
      case 'h1':
        return (
          <h1 ref={ref}>
            {children}
            {link}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref}>
            {children}
            {link}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref}>
            {children}
            {link}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref}>
            {children}
            {link}
          </h4>
        );
      default:
        return (
          <h5 ref={ref}>
            {children}
            {link}
          </h5>
        );
    }
  }, [children, component, handleClick, formattedId]);

  return <div id={formattedId}>{HeadingComponent}</div>;
};

export default BlogPostHeading;
