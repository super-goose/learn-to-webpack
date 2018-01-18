let path = require('path');
let webpack = require('webpack');

let both = {
    entry: {
        'one': './src/one.js',
        'two': './src/two.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commonGround',
        }),

    ],
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};

module.exports = [
    both
];
