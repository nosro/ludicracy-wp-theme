// Credit to Constantine Kiriaze for webpack configuration for WP starter theme.
// https://github.com/kiriaze/wordpress-starter

const config               = require('./config.js');
const webpack              = require('webpack');
const path                 = require('path');
const autoprefixer         = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Theme namespace
const themename = path.join(__dirname, '../../').match(/([^/]*)\/*$/)[1];

let entry = {};
for (const e of config.entry) entry[e] = `./${config.assets}/js/${e}.js`;

module.exports = {

  mode: 'production',

  context: path.resolve(__dirname, config.src),

  optimization: {
    minimize: true
  },

  entry: entry,

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, config.dist),
    filename: `${config.assets}/js/[name].bundle.js`
  },

  performance: {
    hints: "warning"
  },

  plugins: [
    new webpack.ProvidePlugin(config.dependencies),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: `${config.assets}/css/[name].bundle.css`
    })
  ],

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|mp4|mp3)$/,
        loader: 'url-loader',
        options: {
          limit: 8192, // 10000
          name: `[path][name].[ext]`
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        // exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          name: `${config.assets}/fonts/[name].[ext]`
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../', // so bg images that are referenced like ../images/name.png work in prod
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }

};