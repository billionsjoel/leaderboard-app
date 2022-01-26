import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

export const entry = './src/js/index.js';
export const output = {
  filename: 'js/bundle.js',
  path: resolve(__dirname, 'dist'),
};
export const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
  }),
];
export const module = {
  rules: [
    {
      test: /\.scss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
};
export const devServer = {
  static: './dist',
  compress: true,
  port: 8080,
};
