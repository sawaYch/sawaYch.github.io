import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundContainer from '../components/background-container';

const NotFoundPage: React.FC<PageProps> = () => (
  <BackgroundContainer>
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
      <StaticImage
        src="../images/home.webp"
        alt="back to home"
        layout="fixed"
      />
      <h1 className="text-[3rem] sm:text-[5rem] mt-4">404 Error</h1>
      <span>Sorry 😔, page not found</span>
      <Link
        className="pl-2 pr-2 mt-4 border-2 border-dracula-buffy hover:bg-dracula-buffy"
        to="/"
      >
        Back to home
      </Link>
    </div>
  </BackgroundContainer>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
