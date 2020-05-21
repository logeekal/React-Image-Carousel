const path = require("path");
module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "index.js",
    publicPath: "/",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  "externals": {
    "react": "commonjs2 react"
  }
};
