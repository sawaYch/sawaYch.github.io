/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import * as mantineCoreStyle from '@mantine/core/styles.css';
import * as mantineSpotLightStyle from '@mantine/spotlight/styles.css';
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
    <MantineProvider
      defaultColorScheme="dark"
      theme={MantineTheme}
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
    >
      <Layout
        {...props}
        style={{
          ...mantineCoreStyle,
          ...mantineSpotLightStyle,
        }}
      >
        {element}
      </Layout>
    </MantineProvider>
  );
};
