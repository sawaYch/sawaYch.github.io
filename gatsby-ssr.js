/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */

import './src/styles/global.css';
import './src/styles/prism-dracula.css';
import './src/styles/prism-plus.css';
import Layout from './src/components/layout';
import RootElement from './src/components/root-element';

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
);

export const wrapPageElement = ({ element, props }) => {
  // Exclude the /404 page
  if (
    /\/404\/?/.test(props.location.pathname) ||
    element?.key === '/404.html'
  ) {
    return element;
  }

  // Apply the layout component to other pages
  return <Layout {...props}>{element}</Layout>;
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/cubic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="cubicFont"
    />,
    <link
      rel="preload"
      href="/fonts/ku.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="kuFont"
    />,
    <link
      rel="preload"
      href="/fonts/kug.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="kuGraphFont"
    />,
    <link
      rel="preload"
      href="/fonts/cubicblock_s.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="cubicBlockFont"
    />,
  ]);
};
