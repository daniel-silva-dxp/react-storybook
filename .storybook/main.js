module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    webpackFinal: async config => {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      });
      config.resolve.extensions.push('.ts', '.js');
      return config;
    },
};