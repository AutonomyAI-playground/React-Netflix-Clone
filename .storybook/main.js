/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"], // Serve public assets from the main project
  webpackFinal: async (config) => {
    // Customize CSS loader to handle absolute URL imports
    // This prevents webpack from trying to bundle assets referenced with absolute paths like /images/logo.png
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
