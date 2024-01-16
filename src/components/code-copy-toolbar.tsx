import { FaClipboard } from '@react-icons/all-files/fa/FaClipboard';
import { FaClipboardCheck } from '@react-icons/all-files/fa/FaClipboardCheck';
import { useCallback, useEffect, useState } from 'react';
import { Badge, Button } from '@mantine/core';
import delay from '../utils/delay';
import useCopyToClipboard from '../utils/use-clipboard';

interface CodeCopyToolbarProps {
  lang: string;
  text: string;
}

const CodeCopyToolbar = ({ lang, text }: CodeCopyToolbarProps) => {
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

  const handleCopy = useCallback(async () => {
    const result = await copy(text);
    setIsCopy(result);
  }, [copy, text]);

  return (
    <div>
      <Button
        color={isCopy ? 'lime' : 'rgba(200, 200, 200, 1)'}
        variant="light"
        className="absolute h-[1.5rem] transition-all rounded-full top-2 right-1"
        onClick={handleCopy}
      >
        {isCopy ? <FaClipboardCheck /> : <FaClipboard />}
      </Button>
      <Badge
        color="violet"
        className="absolute h-[1.5rem] uppercase top-2 right-[3.75rem] w-fit"
      >
        {lang}
      </Badge>
    </div>
  );
};

export default CodeCopyToolbar;
