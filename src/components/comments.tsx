import { useEffect, useRef } from 'react';

const Comments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'sawaYch/sawaYch.github.io');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', '💬');
    script.setAttribute('theme', 'photon-dark');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    const copyRef = commentsRef.current;

    return () => {
      if (copyRef) {
        copyRef.innerHTML = '';
      }
    };
  }, []);

  return <div ref={commentsRef} />;
};

export default Comments;
