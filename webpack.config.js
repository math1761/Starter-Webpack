'use strict';
const path = require('path');
const webpack = require('webpack');
const config = require('./build/config');

let webpack_base = {
  entry: config.entry,
  output: {
    path: config.assets_path,
    filename: '[name].js',
    publicPath: config.assets_url
  },
  resolve: {
    extensions: ['', '.js', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '/app/js'),
      components: path.join(__dirname, 'app/js/components')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: [/node_modules/,/libs/]
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /libs/]
      },
      {
        test: /\.scss$/,
        loaders: ['css', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  },
  babel: {
    babelrc: false,
    presets: [
      'es2015',
      'stage-2'
    ],
    plugins: ["transform-runtime"]
  },
  plugins: [],
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  }
};

if (config.html) {
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  webpack_base.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'app/index.html',
      inject: true
    })
  )
}

module.exports = webpack_base;
