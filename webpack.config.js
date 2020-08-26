const path = require('path');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    chunkFilename: '[name].js',
  },
  target: 'node',
};
