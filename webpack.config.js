const webpack = require('webpack')
const path = require('path')

const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: path.resolve(__dirname, 'src'), // contextual root of the project

  // pass an array for several entry points
  entry: {
    main: './app.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      // Babel Loader for ES7 -> ES5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      },
      // need Sass?
      // {
      //   test: /\.(scss)$/,
      //   loader: extract({
      //       loader: 'css-loader!postcss-loader!sass-loader'
      //   }),
      // }
    ],
  },

  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8080,
    publicPath: '/',
    contentBase: './src',
    open: true,
    historyApiFallback: true,
  }
}
