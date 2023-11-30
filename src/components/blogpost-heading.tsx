import {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Tooltip } from 'flowbite-react';
import delay from '../utils/delay';
import ShareButton from './share-button';

interface BlogPostHeadingProps {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  id: string;
  initAnchor?: string;
  slug: string;
}

const BlogPostHeading = ({
  component,
  children,
  id,
  initAnchor,
  slug,
}: PropsWithChildren<BlogPostHeadingProps>) => {
  const ref = useRef<HTMLHeadingElement>(null);

  const formattedId = useMemo(() => id.replaceAll(' ', '-'), [id]);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (evt) => {
      evt.preventDefault();
      // eslint-disable-next-line no-restricted-globals
      history.replaceState(null, '', `#/${slug}/#${formattedId}`);
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [formattedId, slug]
  );

  useEffect(() => {
    (async () => {
      if (initAnchor) {
        const formattedInitAnchor = `#${initAnchor.replace(' ', '-')}`;
        // eslint-disable-next-line no-restricted-globals
        history.replaceState(
          null,
          '',
          `#/${slug}/#${initAnchor.replace(' ', '-')}`
        );

        // console.log(`anchor formattedId=${formattedId} formattedInitAnchor=${formattedInitAnchor}`);
        await delay(400);
        if (formattedInitAnchor === `#${formattedId}`) {
          ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    })();
  }, [formattedId, handleClick, initAnchor, slug]);

  const HeadingComponent = useMemo(() => {
    const link = (
      <a href={formattedId && `#${formattedId}`} onClick={handleClick}>
        #
      </a>
    );

    const shareButton = (
      <Tooltip content="Copy article section share link">
        <ShareButton slug={slug} anchor={formattedId} className="mt-2" />
      </Tooltip>
    );

    switch (component) {
      case 'h1':
        return (
          <h1 ref={ref} className="flex pr-4 place-content-between">
            <div>
              {children}
              {link}
            </div>
            {shareButton}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref} className="flex pr-4 place-content-between">
            <div>
              {children}
              {link}
            </div>
            {shareButton}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref} className="flex pr-4 place-content-between">
            <div>
              {children}
              {link}
            </div>
            {shareButton}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref} className="flex pr-4 place-content-between">
            <div>
              {children}
              {link}
            </div>
            {shareButton}
          </h4>
        );
      default:
        return (
          <h5 ref={ref} className="flex pr-4 place-content-between">
            <div>
              {children}
              {link}
            </div>
            {shareButton}
          </h5>
        );
    }
  }, [formattedId, handleClick, slug, component, children]);

  return <div id={formattedId}>{HeadingComponent}</div>;
};

export default BlogPostHeading;
