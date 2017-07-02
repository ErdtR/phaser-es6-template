var path = require("path")

module.exports = {
    entry: "./src/Game.js",
    output: {
        filename: "Game.js",
        path: path.resolve(__dirname, "dist")
    }
}