import { MouseEventHandler, PropsWithChildren, useMemo, useRef } from 'react';

interface BlogPostHeadingProps {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  id: string;
}

const BlogPostHeading = ({
  component,
  children,
  id,
}: PropsWithChildren<BlogPostHeadingProps>) => {
  const ref = useRef<HTMLHeadingElement>(null);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const HeadingComponent = useMemo(() => {
    const link = (
      <a href={id && `#${id}`} onClick={handleClick}>
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
  }, [children, component, id]);

  return <div id={id}>{HeadingComponent}</div>;
};

export default BlogPostHeading;
