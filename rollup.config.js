import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

module.exports = {
  input: './index.ts',
  output: [
    {
      file: 'dist/index.min.js',
      format: 'esm',
      name: "irishPubSub"
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: "irishPubSub"
    }
  ],
  plugins: [
    typescript(),
    terser()
  ]
}
