const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");
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
        new dotenv()
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