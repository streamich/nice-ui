const webpack = require('webpack');
const path = require('path');
const {compilerOptions} = require('../tsconfig.json');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const SRC_PATH = path.join(__dirname, '../src');
const APP_ASSETS = process.env.APP_ASSETS_ORIGIN;

const globalVariables = {
  'process.env': {
    ORIGIN: JSON.stringify(process.env.ORIGIN),
    APP_ASSETS: JSON.stringify(APP_ASSETS),
    BUILD_NUM: JSON.stringify('storybook-build'),
    BUILD_VERSION: JSON.stringify(process.env.BUILD_VERSION || ''),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    RENDERING_ENV: JSON.stringify(process.env.RENDERING_ENV || 'browser'),
    GOOGLE_AUTH_CLIENT_ID: JSON.stringify(process.env.GOOGLE_AUTH_CLIENT_ID),
    GQL: JSON.stringify(process.env.GQL),
    GQL_WS: JSON.stringify(process.env.GQL_WS),
    USE_SERVICE_WORKER: !!process.env.USE_SERVICE_WORKER,
    USE_APOLLO_WS_LINK: !!process.env.USE_APOLLO_WS_LINK,
    VERBOSE: !!process.env.VERBOSE,
  },
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [SRC_PATH],
        options: {
          transpileOnly: true, // use transpileOnly mode to speed-up compilation
          compilerOptions: {
            ...compilerOptions,
            declaration: false,
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.gif', '.jpg', '.png'],
    enforceExtension: false,
  },

  plugins: [new ForkTsCheckerWebpackPlugin(), new webpack.DefinePlugin(globalVariables)],
};
