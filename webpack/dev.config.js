import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './config';

// Webpack configuration
export const dev = {
  // context: config.paths.src,
  devtool: 'eval',
  entry: [
    config.paths.client,
    'webpack/hot/only-dev-server', // deactives auto-reload when HMR fails
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: `${config.pkg.name} - ${config.pkg.description}`,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: config.paths.client,
      },
      {
        test: /\.(js|jsx)$/,
        include: config.paths.client,
        use: [
          'babel-loader', 'react-hot-loader/webpack',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // ExtractTextPlugin.extract([
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  // Enable importing JS files without specifying their's extenstion
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    modules: ['client', 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    // contentBase: config.paths.src,
    stats: 'errors-only', // show only bundle errors
    hot: true,
    inline: true,
    progress: true,
    // inline: true,
    // progress: true,
  },
};

export const COMMON_CSSS = [];
