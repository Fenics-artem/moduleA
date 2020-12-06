import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import vue from 'rollup-plugin-vue';

import { terser } from 'rollup-plugin-terser';

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'moduleA',
    sourcemap: true,
    exports: 'named',
    globals: {
      vue: 'vue',
      vuex: 'vuex'
    }
  },
  external: ['vue', 'vuex'],
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
      css: true,
      template: { optimizeSSR: false }
    }),
    terser()
  ]
};
