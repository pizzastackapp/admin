module.exports = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    webpackConfig.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return webpackConfig;
  },
};
