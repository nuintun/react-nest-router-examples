/**
 * @module .postcssrc
 * @description PostCSS 配置
 */

import autoprefixer from 'autoprefixer';

const sourceMap = process.env.NODE_ENV !== 'production';

export default {
  sourceMap,
  plugins: [
    autoprefixer({
      flexbox: 'no-2009'
    })
  ]
};
