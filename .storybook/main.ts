import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
	framework: '@storybook/react-webpack5',
	core: { builder: '@storybook/builder-webpack5' },
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	async webpackFinal(config) {
		config.module?.rules?.push({
			test: /\.css$/,
			use: [
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [require('tailwindcss'), require('autoprefixer')],
						},
					},
				},
			],
			include: path.resolve(__dirname, '../'),
		});
		return config;
	},
	docs: {
		autodocs: 'tag',
	},
};
export default config;
