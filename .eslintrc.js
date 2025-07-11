module.exports = {
  extends: ['@react-native', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  parser: '@babel/eslint-parser',
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'no-case-declarations': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
  },
};