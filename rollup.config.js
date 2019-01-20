import { terser } from "rollup-plugin-terser";

module.exports = [
  {
    input: './index.js',
    plugins: [terser({ecma: 5})],
    output: {
      file: 'dist/index.min.js',
      format: 'esm',
      name: "irishPubSub"
    }
  },
  {
    input: './index.js',
    plugins: [terser({ecma: 5})],
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: "irishPubSub"
    }
  }
]
