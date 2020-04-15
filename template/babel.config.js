/**
 * Babel configuration file
 * https://babeljs.io/docs/en/configuration
 */

const alias = {
  '': './src',
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['module-resolver', { alias }]],
  env: {
    production: {
      plugins: [['transform-remove-console', { exclude: ['info'] }]],
    },
  },
};
