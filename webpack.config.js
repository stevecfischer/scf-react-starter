var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.jsx",

    output: {
        path: "build",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
