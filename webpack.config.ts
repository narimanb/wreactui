import path from 'path';

module.exports = {
	entry: './src/index.ts',
	output: {
		globalObject: 'this',
		// the target directory for all output files
		path: path.resolve(__dirname, 'dist'),
		// the filename template for entry chunks
		filename: 'index.js',
		// the name of the exported library
		library: '@narimanb/wreactui',
		// the name of the exported library
		libraryTarget: 'umd', // universal module definition
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
};
