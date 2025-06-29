module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
        root: ['.'],
        alias: {
          '@rootDir': '.',
          '@assets': './assets',
          '@src': './src',
          '@launch': './src/launch',
          '@types': './src/types',
          '@components': './src/components',
          '@redux': './src/redux',
          '@features': './src/features',
          '@core': './src/core',
          '@services': './src/core/services',
          '@models': './src/core/models',
          '@apis': './src/core/apis',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@styles': './src/styles',
          '@navigator': './src/navigator',
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};