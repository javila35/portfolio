const HtmlWebpackPlugin = require("html-webpack-plugin");
const dontenv = require("dontenv-webpack");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        contentBase: "./dist",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new dontenv()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}