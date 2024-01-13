import { Link } from 'gatsby';
import { PropsWithChildren, ReactElement } from 'react';

interface IconLinkProps {
  target: string;
  icon?: ReactElement;
  isExternalLink?: boolean;
  ariaLabel?: string;
}

const LinkContainer = ({ children }: PropsWithChildren) => (
  <div className="flex items-center justify-center transition-all duration-500 select-none hover:text-dracula-dracula-200">
    {children}
  </div>
);

const IconLink = ({
  target,
  icon,
  isExternalLink = false,
  ariaLabel,
}: IconLinkProps): ReactElement => (
  <LinkContainer>
    {isExternalLink ? (
      <a
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    ) : (
      <Link to={target}>{icon}</Link>
    )}
  </LinkContainer>
);

export default IconLink;
