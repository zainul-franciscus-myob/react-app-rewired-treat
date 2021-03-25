/* config-overrides.js */
const TreatPlugin = require("treat/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = function override(config, env) {
  const newConfig = { ...config };

  // Add treat plugin for treat styles
  newConfig.plugins = [
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader],
      localIdentName: "_[name]-[local]_[hash:base64:5]",
      themeIdentName: "__[name]-[local]_[hash:base64:4]",
    }),
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
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      ],
    },
  ];

  return newConfig;
};
