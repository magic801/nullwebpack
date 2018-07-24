const PrepackWebpackPlugin = require('prepack-webpack-plugin').default

module.exports = {
	devtool: 'source-map',
	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/public',
		filename: 'oo.js'
	},
	module: {
		loaders: [{
			test: /\.json$/,
			loader: "json"
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [
    new PrepackWebpackPlugin({})
  ],
	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true
	}
}