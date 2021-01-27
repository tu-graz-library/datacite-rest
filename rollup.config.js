import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import json from "@rollup/plugin-json";

import pkg from './package.json';

export default {
  input: 'src/lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      strict: false,
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
      modules: true,
    }),
    localResolve(),
    resolve(),
    babel({
      presets: ['react-app'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    commonjs(),
        // rollup json files - example.json
        json(),
  ],
  // Skip certain warnings
    onwarn: function(warning) {

      // should intercept ... but doesn't in some rollup versions
      if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

      // console.warn everything else
      console.warn( warning.message );
  }
};
