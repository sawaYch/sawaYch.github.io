/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */

import './src/styles/global.css';

import RootElement from './src/components/root-element';

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
);