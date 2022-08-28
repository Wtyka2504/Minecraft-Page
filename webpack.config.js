require("dotenv").config();
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  mode: process.env.NODE_ENV || "development",
  context: resolve(__dirname, "app"),
  entry: {
    index: {
      import: "./scripts/index/main.js",
      filename: "scripts/[contenthash:6].js",
    },
  },
  output: {
    path: resolve(__dirname, "public"),
    assetModuleFilename: "[path]/[name][ext]",
    clean: true,
  },
  stats: {
    loggingDebug: ["sass-loader"],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: resolve(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 200,
    poll: 1000,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash:6].css",
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      template: "./pages/index.html",
      filename: "./pages/index.html",
      chunks: ["index"],
    }),
  ],
};
