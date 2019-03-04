let path = require('path');

let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js",
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]'
                    },
                    {
                        loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
                    }
                ]
            }
        ]
    }
}

module.exports = config;