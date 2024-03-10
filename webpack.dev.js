const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: path.resolve(__dirname, "src/Popup/Popup.js"),
    contentScript: path.resolve(
      __dirname,
      "src/ContentScript/ImageDetector.js"
    ),
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/popup"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: path.resolve(__dirname, "src/Popup/popup.html"),
      filename: "popup.html",
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "manifest.json"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
};
