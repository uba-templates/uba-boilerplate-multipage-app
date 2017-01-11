module.exports = {
  entry: require('./conf/entry.config.js'),

  output: require('./conf/output.config.js'),

  module: require('./conf/module.config.js'),

  resolve: require('./conf/resolve.config.js'),

  plugins: require('./conf/plugins.product.config.js'),

  eslint: require('./conf/vendor/eslint.config.js'),

  postcss: require('./conf/vendor/postcss.config.js'),
};
