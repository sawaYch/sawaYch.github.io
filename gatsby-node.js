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
}
