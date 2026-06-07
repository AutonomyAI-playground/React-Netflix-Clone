/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  // Customize webpack to handle absolute URL paths in CSS correctly.
  // Filters out URLs starting with '/' to prevent css-loader from
  // attempting to resolve them as module imports, allowing them to
  // reference files in the static public directory instead.
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
