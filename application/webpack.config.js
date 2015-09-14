module.exports = {
	entry: './index.js', 
	output: {
		path: __dirname,
		filename: "build.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			}
		]
	
	}	
};




