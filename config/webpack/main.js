const appRootPath = require('app-root-path');
const webpackMerge = require('webpack-merge');

let webPackConfig;

console.log('Current environment is ', process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'production':
    webpackConfig = require('./prod.js');
    break;
  case 'development':
    webpackConfig = require('./dev.js');
    break;
};

module.exports = webpackMerge({
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
        loader: 'babel-loader'
      }
    ]
  }
});