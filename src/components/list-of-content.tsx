import cn from 'classnames';
import { useCallback } from 'react';

export interface TOCData {
  slug: string;
  heading: string;
  anchorLink: string;
  level: number;
}

interface ListOfContentProps {
  data: TOCData[];
  className?: string;
}

const ListOfContent = ({ data, className }: ListOfContentProps) => {
  const handleClick = useCallback(
    (
      evt: { preventDefault: () => void },
      formattedId: string,
      slug: string
    ) => {
      evt.preventDefault();
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, '', `#/${slug}/#${formattedId}`);
      const element = document.getElementById(formattedId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    []
  );

  return (
    <div
      className={cn(
        'flex flex-col bg-dracula-dark rounded-xl p-4 px-6 font-ku',
        className
      )}
    >
      <span className="absolute text-4xl -ml-[3rem] -mt-[2rem] pt-1 -rotate-[20deg] rounded-full bg-dracula-purple w-12 h-12 text-center">
        🐼
      </span>
      <span className="mb-4 text-2xl text-bold text-dracula-pink">
        Table of Content
      </span>
      <ul>
        {data.map((it) => (
          <li key={it.anchorLink}>
            <a
              href={`#${it.anchorLink}`}
              className="max-w-sm leading-tight uppercase font-display"
              onClick={(evt) => handleClick(evt, it.anchorLink, it.slug)}
            >
              {'\u00a0\u00a0\u00a0\u00a0'.repeat(it.level)}
              <span className="link link-underline link-underline-black">
                {it.heading}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfContent;
