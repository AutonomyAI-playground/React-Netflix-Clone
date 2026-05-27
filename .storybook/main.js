/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  // Configure webpack to handle absolute paths in CSS url() — prevents errors from root-relative imports
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
              // Only process relative URLs, ignore root-relative paths (e.g., /images/logo.png)
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
