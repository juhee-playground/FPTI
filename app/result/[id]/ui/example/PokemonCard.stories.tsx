import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import PokemonCard from './PokemonCard';

const meta: Meta<typeof PokemonCard> = {
  title: 'Components/PockemonCard',
  component: PokemonCard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PokemonCard />,
};
