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
      Action: appRootPath.resolve('/src/client/action'),
      Reducer: appRootPath.resolve('/src/client/reducer'),
      View: appRootPath.resolve('/src/client/view'),
      Module: appRootPath.resolve('/src/client/view/module'),
      Scene: appRootPath.resolve('/src/client/view/scene'),
      Widget: appRootPath.resolve('/src/client/view/widget'),
    }
  }
});