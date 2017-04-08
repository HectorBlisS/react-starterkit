import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true', //hot reloading
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']
      },
      {
        // test: /\.css$/, loaders: ['style-loader','css-loader?modules&localIdentName=[local]---[hash:base64:5]']
        test: /\.css$/, loaders: ['style-loader','css-loader']
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    // eliminate duplicate packages
    new webpack.optimize.DedupePlugin(),
    //Minify JS
    new webpack.HotModuleReplacementPlugin()
  ],
  watch: true
};
