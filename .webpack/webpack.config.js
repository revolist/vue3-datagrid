const path = require('path');

let libraryName = 'vgrid';
module.exports = {
  entry: {
    [libraryName]: './src/vgrid.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'none',
    filename: '[name].js',
    library: 'VGrid',
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
