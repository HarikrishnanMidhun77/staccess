const path = require("path");
const webpack = require("webpack");
var copyWebpackPlugin = require("copy-webpack-plugin");
const bundleOutputDir = "./dist";

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  return [
    {
      entry: "./src/main.js",
      output: {
        filename: "widget.js",
        path: path.resolve(bundleOutputDir),
      },
      devServer: {
        static: bundleOutputDir,

        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers":
            "X-Requested-With, content-type, Authorization",
        },
      },
      mode: "development",
      plugins: isDevBuild
        ? [
            new webpack.SourceMapDevToolPlugin(),
            new copyWebpackPlugin([{ from: "demo/" }]),
          ]
        : [new webpack.optimize.UglifyJsPlugin()],
      module: {
        rules: [
          { test: /\.html$/i, use: "html-loader" },
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader" + (isDevBuild ? "" : "?minimize"),
            ],
          },
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/env",
                    {
                      targets: {
                        browsers: ["ie 6", "safari 7"],
                      },
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    },
  ];
};
