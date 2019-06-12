import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        chunkFilter: chunk => chunk.name === 'vendor',
        parallel: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  performance: {
    hints: 'warning',
  },
  devtool: 'inline-source-map',
  target: 'web',
  stats: {
    hash: false,
    errors: true,
    warnings: true,
    colors: true,
    outputPath: false,
    publicPath: false,
  },
  devServer: {
    compress: true,
    port: 5000,
    contentBase: path.resolve(__dirname, 'build'),
    clientLogLevel: 'error',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
