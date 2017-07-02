var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/Game.js",

    output: {
        filename: "Game.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HtmlWebpackPlugin({
            meta: [{charset: "UTF-8"}]
        })
    ],

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }
}