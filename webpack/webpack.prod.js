const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
    mode: "production",
    module:{
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                  {
                      loader: MiniCssExtractPlugin.loader,
                  },
                  {
                      loader: 'css-loader',
                      options:{
                          modules: {
                              localIdentName: '[name]__[local]___[hash:base64:5]'
                          },
                          importLoaders: 1,
                          
                      }
                  },
                  {
                      loader: 'sass-loader',
                  },
              ]
            },
            
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        })
      ]
})