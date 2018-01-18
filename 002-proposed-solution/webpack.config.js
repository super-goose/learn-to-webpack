let path = require('path');
let webpack = require('webpack');

let both = {
    entry: {
        'one': './src/one.js',
        'two': './src/two.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};

module.exports = [
    both
];
