import { Button } from 'flowbite-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaShare } from '@react-icons/all-files/fa/FaShare';
import { FaClipboardCheck } from '@react-icons/all-files/fa/FaClipboardCheck';
import cn from 'classnames';
import useCopyToClipboard from '../utils/use-clipboard';
import delay from '../utils/delay';

interface ShareButtonProps {
  className?: string;
  slug: string;
  anchor?: string;
  showLabel?: boolean;
}

const ShareButton = ({
  className,
  slug,
  anchor,
  showLabel = false,
}: ShareButtonProps) => {
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

  return (
    <Button
      color={isCopy ? 'lime' : 'gray'}
      className={cn('w-8 h-8 uppercase transition-all rounded-full', className)}
      onClick={handleClick}
    >
      {isCopy ? <FaClipboardCheck size={12} /> : <FaShare size={12} />}
      {showLabel ? <span className="ml-2">Share</span> : undefined}
    </Button>
  );
};

export default ShareButton;
