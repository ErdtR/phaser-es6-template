var path = require("path")

module.exports = {
    entry: "./src/Game.js",
    output: {
        filename: "Game.js",
        path: path.resolve(__dirname, "dist")
    },
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
                    loader: 'babel-loader'
                }
            }
        ]
    }
}