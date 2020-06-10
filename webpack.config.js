module.exports = {
  entry: __dirname + '/app/javascript/index.js',

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {test: /\.css$/, use: 'style-loader'},
      {test: /\.css$/, use: 'css-loader'},
      {test: /\.js$/, use: "eslint-loader", exclude: /node_modules/},
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    modules: [
           './node_modules',
           './app'
       ]
  },
  devServer: {
    contentBase: './dist',
    port: '3000',
    inline: true,
  }
}
