module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    development: {
      plugins: [
        'react-native-paper/babel',
        [
          'module-resolver',
          {
            root: ['./src'],
            extensions: [
              '.js',
              '.jsx',
              '.ts',
              '.tsx',
              '.android.js',
              '.android.tsx',
              '.ios.js',
              '.ios.tsx',
            ],
            alias: {
              '@/*': ['app/*'],
              '@assets/*': ['app/assets/*'],
              '@components/*': ['app/components/*'],
              '@screens/*': ['app/screens/*'],
            },
          },
        ],
      ],
    },
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
