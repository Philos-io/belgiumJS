var webpack = require("webpack");


var jqueryPlugin = new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
});


module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				exclude: /node_modules/
			},
			{
          test: /\.html$/,
          loader: "raw"
      },
			{
				test: /.*\.(gif|png|jpe?g|svg)$/i,
    		loaders: [
			      'file?hash=sha512&digest=hex&name=[hash].[ext]',
			      'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
			    ]
			},
      {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
      },
      {
          test: "\.jpg$",
          loader: "file"
      },
      {
          test: "\.png$",
          loader: "url-loader"
      }
		]

	},
	plugins: [ jqueryPlugin ]
};
