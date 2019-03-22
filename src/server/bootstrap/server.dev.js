import appRootPath from 'app-root-path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const webpackConfig = require(appRootPath.resolve('/webpack/webpack.base.js'));
const webpackCompiler = webpack(webpackConfig);

export default (app) => {
  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  }));
  app.use(webpackHotMiddleware(webpackCompiler, {}));
};
