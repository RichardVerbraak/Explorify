const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	devServer: {
		port: 3000,
		static: ['./public'],
		open: true,
		hot: true,
		liveReload: true,
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' },
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}
