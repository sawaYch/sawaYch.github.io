import { Button, Badge } from 'flowbite-react';
import { FaClipboard } from '@react-icons/all-files/fa/FaClipboard';
import { FaClipboardCheck } from '@react-icons/all-files/fa/FaClipboardCheck';
import { useCallback, useEffect, useState } from 'react';
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
    <>
      <Button
        color={isCopy ? 'green' : 'dark'}
        className="absolute w-10 h-8 transition-all rounded-full top-1 right-1"
        onClick={handleCopy}
      >
        {isCopy ? <FaClipboardCheck /> : <FaClipboard />}
      </Button>
      <Badge
        color="purple"
        className="absolute uppercase top-2 right-12 w-fit h-fit"
      >
        {lang}
      </Badge>
    </>
  );
};

export default CodeCopyToolbar;
