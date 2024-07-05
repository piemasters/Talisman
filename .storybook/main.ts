import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../@(src|lib)/**/*.mdx",
    "../@(src|lib)/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "storybook-addon-pseudo-states",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
