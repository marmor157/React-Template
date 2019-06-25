const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    mode: "development",
    module:{
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                        options:{
                            sourceMap: true
                        }
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
    }
})