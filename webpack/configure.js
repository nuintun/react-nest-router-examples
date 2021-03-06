/**
 * @module configure
 * @listens MIT
 * @author nuintun
 * @description Webpack project configure
 */

import path from 'path';

const js = path.resolve('Assets/js');
const css = path.resolve('Assets/css');
const mods = path.resolve('node_modules');
const images = path.resolve('Assets/images');

export default {
  lang: 'en',
  publicPath: '/public/',
  name: 'React Nest Router',
  context: path.resolve('Assets'),
  outputPath: path.resolve('wwwroot/public'),
  entryHTML: path.resolve('wwwroot/app.html'),
  theme: path.resolve('Assets/css/theme.less'),
  favicon: path.resolve('wwwroot/favicon.ico'),
  entry: [path.resolve('Assets/js/pages/index.tsx')],
  alias: { '/js': js, '/css': css, '/mods': mods, '/images': images },
  meta: { 'theme-color': '#4285f4', viewport: 'width=device-width,initial-scale=1.0' }
};
