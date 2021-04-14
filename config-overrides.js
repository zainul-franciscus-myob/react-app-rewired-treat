/* config-overrides.js */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = function override(config, env) {
  const newConfig = { ...config };

  // Add treat plugin for treat styles
  newConfig.plugins = [
    new VanillaExtractPlugin(),
    new MiniCssExtractPlugin(),
  ].concat(newConfig.plugins);

  // Overcome issue around babel-loader in react-scripts
  newConfig.resolve = {
    ...newConfig.resolve,
    alias: {
      ...newConfig.resolve.alias,
      "babel-loader": "node_modules/babel-loader/lib/index.js",
    },
  };

  // Transpile my external lib "lib-components"
  newConfig.module.rules = [
    ...newConfig.module.rules,
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules\/(?!lib-components)/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties","@vanilla-extract/babel-plugin"],
          },
        },
      ],
    },
  ];

  return newConfig;
};
