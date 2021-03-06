var HtmlWebpackPlugin = require('html-webpack-plugin'); // для работы с html
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // для отделения css в отдельный файл
//const webpack = require("webpack");

module.exports = {
    entry: {
        //'react-hot-loader/patch',
        index: './src/index.jsx'
    },
    output: {
        path: "/dist/",
        publicPath: "/",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader"],
                    publicPath: '/dist/',
                    filename: "[name].[ext]"
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    // Настройки сервера разработки
    devServer: {
        contentBase: "/dist/",
        compress: true, // gzip all files
        host: "0.0.0.0",
        port: 9090,
        stats: 'errors-only', // не показывать весь лог, только ошибки,
        open: true, // Всегда открывать в новом окне,
        historyApiFallback: true,
        //hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Starter',
            hash: true,
            chunks: ['index'],
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        }),
        //new webpack.NamedModulesPlugin(),
        //new webpack.HotModuleReplacementPlugin()
    ]
};