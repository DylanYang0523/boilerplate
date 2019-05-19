const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};