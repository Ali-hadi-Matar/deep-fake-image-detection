const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: path.resolve(__dirname, "src/Popup/Popup.js"),
    serviceWorker: path.resolve(
      __dirname,
      "src/ServiceWorker/MessageHandler.js"
    ),
  },

  output: {
    filename: "popup/[name].js",
    path: path.resolve(__dirname, "dist"),
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

  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: path.resolve(__dirname, "src/Popup/popup.html"),
      filename: "popup/popup.html",
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "manifest.json"),
          to: path.resolve(__dirname, "dist"),
        },

        {
          from: path.resolve(__dirname, "src/assets/popup"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
  ],
};
