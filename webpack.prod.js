const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  optimization: {
    providedExports: true,
    usedExports: true,
    sideEffects: false,
    minimize: true,
    splitChunks: {
      chunks: 'async'
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[name].[hash].css"
    }),
    // new OptimizeCSSAssetsPlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
