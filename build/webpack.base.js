const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'static/js/[name].[contenthash:8].js',
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
        clean: true,
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, '../node_modules')]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: ['thread-loader', 'babel-loader'],
                include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10kb
                    }
                },
                generator: {
                    filename: 'static/images/[name].[contenthash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, '../public'), // 复制public下文件
                to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
                filter: source => {
                  return !source.includes('index.html') // 忽略index.html
                }
              },
            ],
        }),
    ],
    cache: {
        type: 'filesystem', // 使用文件缓存
    },
}