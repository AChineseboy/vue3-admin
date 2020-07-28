const path = require('path');

module.exports = {
  entry: path.resolve('./index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [{ loader: './loader.js' }],
      },
    ],
  },
  output: {
    path: path.resolve('./'),
    filename: 'build.js',
  },
};
