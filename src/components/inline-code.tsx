import { PropsWithChildren, useMemo } from 'react';
import cn from 'classnames';

const InlineCode = ({ children, ...props }: PropsWithChildren<any>) => {
  const { className, ...p } = props;

  console.log('children', children as string[]);

  const formattedContent = useMemo(
    () => (children as string[])?.[0],
    [children]
  );

  return (
    <code
      className={cn(
        'prose-code:before:hidden prose-code:after:hidden p-[6px] bg-dracula-blue-700 border-x-2 border-b-2 rounded-md border-dracula-blue-500',
        className
      )}
      {...p}
    >
      {formattedContent}
    </code>
  );
};

export default InlineCode;
