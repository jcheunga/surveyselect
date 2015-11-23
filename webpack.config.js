var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles/main.css")
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader?stage=0',
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.json$/,
      loaders: [ 'json' ],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.less$/,
      loader: 'style!css!less',
      exclude: /node_modules/,
      include: __dirname
    }
    ]
  }        
}
