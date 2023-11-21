import { useEffect } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';

interface SectionTitleProps {
  text: string;
  icon: ReactElement;
}

const SectionTitle = ({ text, icon }: SectionTitleProps) => {
  useEffect(() => {
    // TODO redesign section title
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-fit">
        <div className="h-[1.5rem] -mb-8 -mx-10 bg-dracula-buffy-400/30 -skew-x-12 backdrop-blur-sm" />
        <div className="flex">
          <h2 className="z-50 !text-dracula-buffy-100">{text}</h2>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
