const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css'
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    }
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    priority: 1,
                    chunks: 'initial',
                    minChunks: 1,
                    minSize: 0,
                },
                commons: {
                    name: 'commons',
                    minChunks: 2,
                    chunks: 'initial',
                    minSize: 0,
                }
            }
        }
    }
}); 