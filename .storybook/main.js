

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    // Ensure proper JSX handling
    config.esbuild = {
      jsx: 'automatic',
    };
    
    // Add proper alias resolution
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // Ensure proper file extensions
    config.resolve.extensions = [
      '.js', '.jsx', '.ts', '.tsx', '.json', '.vue'
    ];
    
    return config;
  },
};
export default config;