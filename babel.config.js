module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@store': './src/store',
          '@components': './src/components',
          '@common': './src/common',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
