const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
        hot: true,
        compress: false,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, '../public')
        }
    },
    plugins: [
        new reactRefreshWebpackPlugin()
    ]
});