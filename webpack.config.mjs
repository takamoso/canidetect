import path from 'path'
import yargs from 'yargs'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import FixStyleOnlyEntriesPlugin from 'webpack-fix-style-only-entries'
import TerserPlugin from 'terser-webpack-plugin'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const {argv} = yargs(process.argv.slice(2)).options({
  'media-query': {
    type: 'array',
    default: [],
    alias: 'mq',
  },
  'pseudo-element': {
    type: 'array',
    default: [],
    alias: 'pe',
  },
  'pseudo-class': {
    type: 'array',
    default: [],
    alias: 'pc',
  },
  'property': {
    type: 'array',
    default: [],
    alias: 'p',
  },
  'value': {
    type: 'array',
    default: [],
    alias: 'v',
  },
  'vendor-prefix': {
    type: 'array',
    default: [],
    alias: 'vp',
  },
})

export default {
  mode: 'development',
  entry: {
    style: path.join(__dirname, 'src/style.scss'),
    script: path.join(__dirname, 'src/script.js'),
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          output: {
            comments: /^!|@preserve|@license|@cc_on|@author/i,
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      css: {
        mediaQueries: JSON.stringify(argv['media-query']),
        pseudoElements: JSON.stringify(argv['pseudo-element']),
        pseudoClasses: JSON.stringify(argv['pseudo-class']),
        properties: JSON.stringify(argv['property']),
        values: JSON.stringify(argv['value']),
        vendorPrefixes: JSON.stringify(argv['vendor-prefix']),
      },
    }),
    new HtmlWebpackPlugin({
      title: '',
      meta: [
        {'charset': 'utf-8'},
        {'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge'},
        {'name': 'viewport', 'content': 'width=device-width, initial-scale=1'},
      ],
      hash: true,
    }),
    new MiniCssExtractPlugin(),
    new FixStyleOnlyEntriesPlugin(),
  ],
}