module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // Prevent css-loader from treating absolute URL paths as module imports.
    // The project uses absolute paths like url("/images/misc/home-bg.jpg") in CSS,
    // which should be served from the static directory, not processed as modules.
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
