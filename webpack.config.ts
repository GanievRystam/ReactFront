import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
const config: webpack.Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
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
};
module.exports = config;