import { FC } from 'react';
import { Link, HeadFC, PageProps, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage = () => (
  <div className="flex flex-col text-white font-primary bg-dracula-darker/70 w-dvw bg-glow">
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
      <StaticImage
        src="../images/home.webp"
        alt="back to home"
        layout="fixed"
        placeholder="blurred"
      />
      <h1 className="text-[3rem] sm:text-[5rem] mt-4">404 Error</h1>
      <span>Sorry 😔, page not found</span>
      <div className="flex gap-4">
        <Link
          className="pl-2 pr-2 mt-4 border-2 border-dracula-buffy hover:bg-dracula-buffy"
          to="/"
        >
          Home
        </Link>
        <button
          type="button"
          className="pl-2 pr-2 mt-4 border-2 border-dracula-buffy hover:bg-dracula-buffy"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  </div>
);

const NotFoundPageRouter: FC<PageProps> = () => <NotFoundPage />;

export default NotFoundPageRouter;

export const Head: HeadFC = () => <title>Void Dojo | Not found</title>;
