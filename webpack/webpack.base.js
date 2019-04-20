const appRootPath = require('app-root-path');
const webpackMerge = require('webpack-merge');

let webpackConfig;

switch (process.env.NODE_ENV) {
  case 'production':
    webpackConfig = require('./webpack.prod.js');
    break;
  case 'development':
    webpackConfig = require('./webpack.dev.js');
    break;
};

module.exports = webpackMerge(webpackConfig, {
  entry: [
    appRootPath.resolve('/src/client/index.jsx')
  ],
  output: {
    path: appRootPath.resolve('/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Actions: appRootPath.resolve('/src/client/actions'),
      Components: appRootPath.resolve('/src/client/components'),
      Reducers: appRootPath.resolve('/src/client/reducers'),
      Routes: appRootPath.resolve('/src/client/routes'),
    }
  }
});