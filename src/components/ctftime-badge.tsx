import { StaticImage } from 'gatsby-plugin-image';

interface CTFTimeBadgeProps {
  link: string;
}

const CTFTimeBadge = ({ link }: CTFTimeBadgeProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Kurio youtube link"
  >
    <StaticImage
      src="../images/ctftime-logo.svg"
      alt="ctftime"
      width={78}
      placeholder="blurred"
    />
  </a>
);

export default CTFTimeBadge;
