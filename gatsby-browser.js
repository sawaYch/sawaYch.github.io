/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import MantineTheme from './src/theme';

import './src/styles/global.css';
import './src/styles/prism-dracula.css';
import './src/styles/prism-plus.css';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element, props }) => {
  // Exclude the /404 page
  if (
    /\/404\/?/.test(props.location.pathname) ||
    element?.key === '/404.html'
  ) {
    return element;
  }

  // Apply the layout component to other pages
  return (
    <MantineProvider theme={MantineTheme}   withCSSVariables         withGlobalStyles         withNormalizeCSS  >
      <Layout {...props}>{element}</Layout>
    </MantineProvider>
  );
};
