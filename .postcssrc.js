/**
 * @module .postcssrc
 * @description PostCSS 配置
 */

module.exports = {
  sourceMap: process.env.NODE_ENV !== 'production',
  plugins: [['autoprefixer', { flexbox: 'no-2009' }]]
};
