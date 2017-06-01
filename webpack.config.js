var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./src/js/main.js',
	output:{
		path:"/mealMenu/dist",
		filename:'js/[chunkhash].bundle.js'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:"index.html",
			inject:'head'  // head 标签还是body标签

		})
	]
}