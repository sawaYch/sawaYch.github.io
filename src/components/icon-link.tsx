import { Link } from 'gatsby';
import { ReactElement } from 'react';
import tw from 'twin.macro';

interface IconLinkProps {
  target: string;
  icon?: ReactElement;
  isExternalLink?: boolean;
  ariaLabel?: string;
}

const LinkContainer = tw.div`
  hover:text-dracula-dracula
  transition-all
  duration-500
  select-none
`;

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
