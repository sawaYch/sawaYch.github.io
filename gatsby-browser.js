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
  if (/\/404\/?/.test(props.location.pathname)) {
    return element;
  }

  // Apply the layout component to other pages
  return <Layout {...props}>{element}</Layout>;
};

