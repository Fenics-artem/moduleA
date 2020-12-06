import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import vue from 'rollup-plugin-vue';

import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: '@mygenius/vouchers',
    sourcemap: true,
    exports: 'named',
    globals: {
      '@mygenius/api': '@mygenius/api',
      '@mygenius/request': '@mygenius/request',
      vue: 'vue',
      vuex: 'vuex',
      lodash: 'lodash'
    }
  },
  external: ['@mygenius/api', 'vue', 'vuex', 'lodash'],
  plugins: [
    resolve({
      preferBuiltins: false,
      browser: true,
      mainFields: ['main']
    }),
    commonjs({ include: /node_modules/ }),
    babel({
      exclude: 'node_modules/**',
      comments: false,
      presets: [['@babel/env', { modules: false }]]
    }),
    postcss({
      extract: true
    }),
    vue({
      css: false,
      template: { optimizeSSR: false }
    }),
    terser()
  ]
};
