let path = require('path');

let one = {
    entry: './src/one.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'one.js',
    },
};

let two = {
    entry: './src/two.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'two.js',
    },
};

module.exports = [
    one, two
];
