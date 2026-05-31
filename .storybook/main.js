/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Fix for CSS files with absolute URL paths (e.g., url("/images/misc/home-bg.jpg"))
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('css')
    );
    if (cssRule && cssRule.use) {
      cssRule.use.forEach((loader) => {
        if (loader.loader && loader.loader.includes('css-loader')) {
          loader.options = {
            ...loader.options,
            url: {
              filter: (url) => !url.startsWith('/'),
            },
          };
        }
      });
    }
    return config;
  },
};

export default config;
