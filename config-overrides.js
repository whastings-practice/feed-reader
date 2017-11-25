const cloneDeep = require('lodash.clonedeep');

const cssModulesOptions = {
  modules: true,
  localIdentName: '[local]___[hash:base64:5]',
};

module.exports = (config/*, env*/) => {
  const baseCssConfig = config.module.rules.find(rule => String(rule.test) === String(/\.css$/));
  const cssModulesConfig = cloneDeep(baseCssConfig);
  baseCssConfig.exclude = /\.module\.css$/;

  cssModulesConfig.test = /\.module\.css$/;
  const cssLoaderConfig = cssModulesConfig.use.find(
    (loaderConfig) => loaderConfig.loader === require.resolve('css-loader'),
  );
  Object.assign(cssLoaderConfig.options, cssModulesOptions);
  config.module.rules.push(cssModulesConfig);

  return config;
};
