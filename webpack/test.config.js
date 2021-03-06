import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './config';

// Webpack configuration
export default {
  devtool: 'eval',
  entry: [
    config.paths.client,
    'webpack/hot/only-dev-server', // deactives auto-reload when HMR fails
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: `${config.pkg.name} - ${config.pkg.description}`,
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
        exclude: /node_modules/,
        use: [
          'babel-loader', 'react-hot-loader/webpack',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: { // eslint-disable-next-line
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [// eslint-disable-next-line
                  require('precss'),// eslint-disable-next-line
                  require('autoprefixer')
                ];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['client', 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    stats: 'errors-only', // show only bundle errors
    hot: true,
    inline: true,
    progress: true,
  },
};
