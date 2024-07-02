import { IconClipboard, IconClipboardCheck } from '@tabler/icons-react';
import { useCallback, useEffect, useState } from 'react';
import { Badge, Button } from '@mantine/core';
import delay from '../utils/delay';
import useCopyToClipboard from '../hooks/use-clipboard';

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
        {isCopy ? (
          <IconClipboardCheck size={14} />
        ) : (
          <IconClipboard size={14} />
        )}
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
