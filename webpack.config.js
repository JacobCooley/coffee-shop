const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')
module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'css-hot-loader',
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/,
				use: {
					loader: 'file-loader?name=/src/assets/icons/[name].[ext]'
				}
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		disableHostCheck: true
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new CopyWebpackPlugin([
			{ from: './src/assets/icons/favicon.ico' },
		])
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@app': path.resolve(__dirname, 'src/modules/app'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@components': path.resolve(__dirname, 'src/common/components/'),
			'@modules': path.resolve(__dirname, 'src/modules/'),
			'@common': path.resolve(__dirname, 'src/common/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@home': path.resolve(__dirname, 'src/modules/home/'),
			'@dapps': path.resolve(__dirname, 'src/modules/dapps/'),
			'@deploy': path.resolve(__dirname, 'src/modules/deploy/'),
			'@ethereum': path.resolve(__dirname, 'src/modules/dapps/components/Ethereum/'),
			'@eos': path.resolve(__dirname, 'src/modules/dapps/components/Eos/'),
			'@src': path.resolve(__dirname, 'src/'),
			styles: path.resolve(__dirname, 'src/common/styles'),
			'@utils': path.resolve(__dirname, 'src/common/utils')
		}
	}
}