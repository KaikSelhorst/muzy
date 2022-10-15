const path = require("path");

module.exports = {
  entry: "./script/script.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js",
  },
};
