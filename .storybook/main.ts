import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: config => {
    console.log('Applying Vite alias config');
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
        },
      },
    });
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
