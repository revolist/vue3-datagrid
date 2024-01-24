const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'none',
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [
    'vue',
    '@revolist/revogrid',
    /^@revolist\/revogrid\//,
    '@stencil/core',
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
