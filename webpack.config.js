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
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "source-map"
};
