const path = require('path');

exports.createPages = ({ actions }) => {
  const { createSlice } = actions;
  createSlice({
    id: 'header',
    component: require.resolve('./src/components/header.tsx'),
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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/blogs\/([A-Za-z-+=]+).*/)) {
    // eslint-disable-next-line no-param-reassign
    page.matchPath = `/blogs/*`;
    createPage(page);
  }
};
