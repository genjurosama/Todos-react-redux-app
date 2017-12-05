import path from "path";

// webpack.config.js
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  // Tell webpack to start bundling our app at app/index.js
  entry: "./src/index.jsx",
  // Output our app to the dist/ directory
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    historyApiFallback: true,
  },
  // Emit source maps so we can debug our code in the browser
  devtool: "source-map",
  // Tell webpack to run our source code through Babel
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, use: [{
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "sass-loader" // compiles Sass to CSS
    }]},
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.
  plugins: [
    // Configure HtmlPlugin to use our own index.html file
    // as a template.
    // Check out https://github.com/jantimon/html-webpack-plugin
    // for the full list of options.
    new HtmlPlugin({
      template: "src/index.html"
    })
  ]
};
