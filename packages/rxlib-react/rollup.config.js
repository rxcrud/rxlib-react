import postCSS from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            format: 'cjs',
            file: './lib/cjs/index.js',
        },
        {
            format: 'es',
            file: './lib/esm/index.js',
        },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
        postCSS(),
        commonjs(),
        nodeResolve(),
        typescript({
            typescript: require('typescript'),
        }),
    ],
};