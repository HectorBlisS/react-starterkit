import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// cache busting
import WebpackMd5Hash from 'webpack-md5-hash';
// css extract
import ExtractTextPlugin from 'extract-text-webpack-plugin'
export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor')

},
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']
      },
      // {
      //   // test: /\.css$/, loaders: ['style-loader','css-loader?modules&localIdentName=[local]---[hash:base64:5]']
      //   test: /\.css$/, loaders: ['style-loader','css-loader']
      // },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    //css extractor
    new ExtractTextPlugin('[name].[hash].css'),
    //ache busting
    new WebpackMd5Hash(),
    // use common chunk plugin to create a separate bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // create HTML file that includes reference to bundle JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // injectamos track js para produccion
      trackJSToken: '87beb377dfb84cb19d40ec85704d4f9b'
    }),
    // eliminate duplicate packages
    new webpack.optimize.DedupePlugin(),
    //Minify JS
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  watch: true
};
