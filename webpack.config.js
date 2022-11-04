const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    api: "./src/api.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    watchFiles: ["src/*"],
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "App",
      template: "./src/app.html",
      inject: "head",
    }),
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
