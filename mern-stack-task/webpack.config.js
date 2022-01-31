const path = require("path");

module.exports = {
    devServer:{
        contentBase: path.resolve(__dirname, 'src/public'),
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, 'src/app/index.js'),
    module: {
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
                
            }
        ]
    },
        output:{
            filename: 'bundle.js',
        }
}