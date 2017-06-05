const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    filename: 'app.js',
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
  plugins: ([
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {collapseWhitespace: true},
    }),
  ]),
}
