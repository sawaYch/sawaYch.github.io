const path = require('path');

exports.createPages = ({ actions }) => {
  const { createSlice } = actions;
  createSlice({
    id: 'header',
    component: require.resolve('./src/components/powerline.tsx'),
  });
  createSlice({
    id: 'footer',
    component: require.resolve('./src/components/footer.tsx'),
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  });
};

if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/';
}
