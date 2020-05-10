var path = require("path");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
		libraryTarget: "commonjs2"
	},
	module: {
		rules: [
			{
				test: /\.js(x)$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				},
				resolve: {
					extensions: [".js", ".jsx"]
				}
			},
			{
				test: /\.(sc|c)ss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	externals: {
		react: "commonjs react"
	}
};
