import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import PokemonCardExample from './CardExample';

const meta: Meta<typeof PokemonCardExample> = {
  title: 'Components/CardExample',
  component: PokemonCardExample,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: () => <PokemonCardExample />,
};
