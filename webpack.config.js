import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
	filename: 'bundle.js',
	path: resolve(__dirname, 'dist'),
	clean: true,
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
			exclude: /node_modules/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
	],
};
export const devServer = {
	static: './dist',
	compress: true,
	port: 8080,
};
