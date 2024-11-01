/**
 * @module app.config
 * @description 应用配置
 */

import path from 'node:path';

const js = path.resolve('app/js');
const css = path.resolve('app/css');
const images = path.resolve('app/images');

/**
 * @type {import('./tools/interface').AppConfig}
 */
export default {
  lang: 'zh-CN',
  publicPath: '/public/',
  name: 'React Nest Router',
  context: path.resolve('app'),
  outputPath: path.resolve('wwwroot/public'),
  entryHTML: path.resolve('wwwroot/app.html'),
  favicon: path.resolve('wwwroot/favicon.ico'),
  entry: [path.resolve('app/js/pages/index.tsx')],
  alias: { '/js': js, '/css': css, '/images': images },
  meta: { viewport: 'width=device-width,initial-scale=1.0' }
};
