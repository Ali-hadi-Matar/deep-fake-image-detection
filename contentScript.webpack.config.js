const path = require("path");

module.exports = {
  entry: {
    contentScript: path.resolve(
      __dirname,
      "src/ContentScript/ImageDetector.js"
    ),
  },

  output: {
    filename: "contentScript/[name].js",
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
};
