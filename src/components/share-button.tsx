import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { ActionIcon, Button } from '@mantine/core';
import { IconClipboardCheck, IconLink } from '@tabler/icons-react';
import useCopyToClipboard from '../hooks/use-clipboard';
import delay from '../utils/delay';

interface ShareButtonProps {
  className?: string;
  slug: string;
  anchor?: string;
  showLabel?: boolean;
  isIconButton?: boolean;
}

const ShareButton = forwardRef<HTMLButtonElement, ShareButtonProps>(
  (
    {
      className,
      slug,
      anchor,
      showLabel = false,
      isIconButton = false,
    }: ShareButtonProps,
    ref
  ) => {
    // construct share post url (via proxy)
    const sharePostUrl = useMemo(
      () =>
        `${process.env.GATSBY_VOID_DOJO_PROXY_URL}/${slug}${
          anchor ? `.${anchor}` : ''
        }`,
      [anchor, slug]
    );

    const [isCopy, setIsCopy] = useState(false);
    const [, copy] = useCopyToClipboard();

    useEffect(() => {
      (async () => {
        if (isCopy) {
          await delay(2000);
          setIsCopy(false);
        }
      })();
    }, [isCopy]);

    const handleClick = useCallback(async () => {
      const result = await copy(sharePostUrl);
      setIsCopy(result);
    }, [copy, sharePostUrl]);

    const StyledButton = useMemo(
      () => (isIconButton ? ActionIcon : Button),
      [isIconButton]
    );

    return (
      <StyledButton
        ref={ref}
        color={isCopy ? 'lime' : 'rgba(100,100,100,0.5)'}
        className={cn(
          'flex w-fit h-6 uppercase transition-all rounded-full',
          className
        )}
        onClick={handleClick}
      >
        {isCopy ? <IconClipboardCheck size={14} /> : <IconLink size={18} />}
        {showLabel ? <span className="ml-2">Share</span> : undefined}
      </StyledButton>
    );
  }
);

export default ShareButton;
