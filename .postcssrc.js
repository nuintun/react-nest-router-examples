/**
 * @module .postcssrc
 * @description PostCSS 配置
 */

const autoprefixer = require('autoprefixer');

const sourceMap = process.env.NODE_ENV !== 'production';

module.exports = {
  sourceMap,
  plugins: [
    autoprefixer({
      flexbox: 'no-2009'
    })
  ]
};
