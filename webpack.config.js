var path = require('path');
var webpack = require("webpack");

module.exports = {
    devtool: 'eval-source-map',
    entry:[
        path.resolve(__dirname, 'app/main.js')
    ],
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude:/node_modules/
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // loader: '!css-loader!less-loader',
                exclude:/node_modules/
            }
        ]
    },
    devServer:{
        contentBase: './build',
        historyApiFallback: true,
        inline:false
    }
};

// update webpack https://webpack.js.org/loaders/raw-loader/
// change keyword from loader to rulse
