/**
 * @module webpack.config.dev
 * @listens MIT
 * @author nuintun
 * @description Webpack development configure
 * @see https://github.com/facebook/create-react-app
 */

const mode = 'development';

process.env.NODE_ENV = mode;
process.env.BABEL_ENV = mode;

import webpack from 'webpack';
import configure from '../configure.js';
import resolveConfigure from './webpack.config.base.js';

const { watchOptions } = configure;

(async () => {
  const configure = await resolveConfigure(mode);

  configure.watchOptions = watchOptions;
  configure.devtool = 'eval-cheap-module-source-map';

  configure.plugins.push(new webpack.SourceMapDevToolPlugin());

  const compiler = webpack(configure);

  compiler.run((error, stats) => {
    compiler.close(() => {
      if (error) {
        console.error(error);
      } else {
        console.log(stats.toString(compiler.options.stats));
      }
    });
  });
})();
