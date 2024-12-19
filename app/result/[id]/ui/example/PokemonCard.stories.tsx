import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import PokemonCard from './PokemonCard'; // PocketmonCard 컴포넌트

const meta: Meta<typeof PokemonCard> = {
  title: 'Components/PocketmonCard', // Storybook에서 컴포넌트가 나타날 위치
  component: PokemonCard,
  parameters: {
    layout: 'fullscreen', // 전체 화면 레이아웃
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PokemonCard />, // PocketmonCard 기본 렌더링
};
