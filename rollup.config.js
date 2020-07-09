import { terser } from "rollup-plugin-terser";

module.exports = {
  input: './index.js',
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
    terser({ ecma: 5})
  ]
}
