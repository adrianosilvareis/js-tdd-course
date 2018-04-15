const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    filename: './src/main.js',
  },
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
    ],
  },
};
