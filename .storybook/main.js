/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: false,
  },
  staticDirs: ["../public"],
  // Custom webpack config to handle CSS url() references
  // Prevents css-loader from processing absolute URLs starting with '/'
  // so they resolve correctly to Storybook's staticDirs
  webpackFinal: async (config) => {
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("css")
    );
    if (cssRule && cssRule.use) {
      cssRule.use.forEach((loader) => {
        if (loader.loader && loader.loader.includes("css-loader")) {
          loader.options = {
            ...loader.options,
            url: {
              filter: (url) => !url.startsWith("/"),
            },
          };
        }
      });
    }
    return config;
  },
};

export default config;
