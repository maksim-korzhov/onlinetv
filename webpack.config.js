var HtmlWebpackPlugin = require('html-webpack-plugin'); // для работы с html
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // для отделения css в отдельный файл
const path = require('path'); // для работы с путями

module.exports = {
    entry: {
        index: './src/index.jsx',
    },
    output: {
        //path: path.resolve(__dirname, "dist"),
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
                    //publicPath: __dirname + '/dist/',
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
        //contentBase: path.join(__dirname, "dist"),
        contentBase: "/dist/",
        compress: true, // gzip all files
        host: "0.0.0.0",
        port: 9090,
        stats: 'errors-only', // не показывать весь лог, только ошибки,
        open: true, // Всегда открывать в новом окне,
        historyApiFallback: true
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
            //disabled: false,
            allChunks: true
        })
    ]
};