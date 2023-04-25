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
              '@/*': ['src/*'],
              '@assets/*': ['src/assets/*'],
              '@components/*': ['src/components/*'],
              '@navigation/*': ['src/navigation/*'],
              '@scenes/*': ['src/scenes/*'],
              '@store/*': ['src/store/*'],
              '@services/*': ['src/services/*'],
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
