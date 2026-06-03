/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: { autodocs: "tag" },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // Handle absolute URL paths in CSS (e.g., url("/images/..."))
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
