/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
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
