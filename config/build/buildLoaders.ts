import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      !isDev ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]-[hash:base64:8]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
  const typesriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [typesriptLoader, cssLoader];
}
