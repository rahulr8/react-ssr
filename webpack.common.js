module.exports = {
  // Tell webpack to run babel on every file it encounters
  module: {
    rules: [
      // Only apply babel to js files (not css, img, etc.)
      // Define the webpack loader module that executes babel
      // Ignore certain directories to run babel on
      // With options, specify presets for Babel to transpile the code
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0", //Handle async code
            // Run all the transform rules needed to meet the
            // requirements of the last 2 versions of any browser
            // that is encountered
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
