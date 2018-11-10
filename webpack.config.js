const path = require("path");
module.exports = {
    entry: {
        index: ["babel-polyfill", "./src/index.js"],
        about: ["babel-polyfill", "./src/about.js"],
        contact: ["babel-polyfill", "./src/contact.js"],
        request: ["babel-polyfill", "./src/request.js"],
        services: ["babel-polyfill", "./src/services.js"]
    },
    output: {
        path: path.resolve(__dirname, "docs/scripts"),
        filename: "[name]-bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "docs"),
        publicPath: "/scripts/",
        watchContentBase: true
    },
    devtool: "source-map"
}