const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src', 'index'),
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [
          /\.stories\.tsx?$/
        ],
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]']
      }
    ]
  },
  plugins: []
}
