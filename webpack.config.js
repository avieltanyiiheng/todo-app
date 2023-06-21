const path = require("path");

{
  mode: "development";
  // the rest of your webpack.config.js
}
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devtool: "inline-source-map",
  mode: "development",
};
