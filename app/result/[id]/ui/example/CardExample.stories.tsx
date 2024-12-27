import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import PokemonCardExample from './CardExample';

const meta: Meta<typeof PokemonCardExample> = {
  title: 'Example/Card',
  component: PokemonCardExample,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => <PokemonCardExample />,
};
