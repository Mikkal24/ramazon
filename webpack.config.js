const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require("webpack");

module.exports = {
  // This is the entry point or start of our react applicaton
  entry: "./app/app.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /app/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/,
        include: /app/,
        use: [
          // {
          //   loader: "style-loader"
          // },

          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader"
          }
          // use: [{ loader: "style-loader" }, { loader: "css-loader" }]
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css"
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "source-map"
};
