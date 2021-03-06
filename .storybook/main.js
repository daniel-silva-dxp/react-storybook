const path = require('path');

module.exports = {
	stories: [ '../src/**/*.stories.tsx', '../src/**/*.stories.[tj]s' ],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			include: [ path.resolve(__dirname, '..') ],
			use: [
				{
					loader: require.resolve('ts-loader')
				},
				{
					loader: require.resolve('react-docgen-typescript-loader')
				}
			]
		});
		config.resolve.extensions.push('.ts', '.tsx');
		return config;
	}
};
