const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry:[
        path.join(__dirname, '../src/client/index.jsx')
    ],
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename:" bundle.js",
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                include: path.join(__dirname,"../src/client"),
                loaders: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/',
                }
              },
              {
                test: /\.(otf|ttf)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/',
                }
              },
        ]
    },
    resolve:{
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, '../src/client/components'),
            '@shared': path.resolve(__dirname, '../src/shared'),
            '@assets': path.resolve(__dirname, '../src/client/assets'),
            '@images': path.resolve(__dirname, '../src/client/assets/img'),
            '@fonts': path.resolve(__dirname, '../src/client/assets/fonts')
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/public/index.html",
            filename: "./index.html"
        })
    ]
}