'use strict';

const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

let plugins = [
  new HTMLPlugin({template: `${__dirname}/app/entry.js`}),
  new ExtractTextPlugin('bundle.css'),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URI),
    __DEBUG__: JSON.stringify(!production),
  }),
];

if (production){
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
      },
    }),
    new CleanPlugin(),
  ]);
}

module.exports = {
  plugins,
  debug: !production,
  entry: `${__dirname}/app/entry.js`,
  devtool: production ? false : 'eval',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  sassLoader: { includePaths: [`${__dirname}/app/scss/lib`] },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.(eot|ttf|woff)$/,
        url: 'url?limit=10000&name=fonts/[name].[ext]',
      },
      {
        test: /\.(png|jpg|jpeg|tiff|bmp|gif)$/,
        url: 'url?limit=10000&name=image/[hash].[ext]',
      },
    ],
  },
};
