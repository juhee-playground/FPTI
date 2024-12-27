import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Holo from './Holo';
import Radiant from './Radiant';
import RadiantHoloPattern from './RadiantHoloPattern';

const meta: Meta<typeof RadiantHoloPattern> = {
  title: 'animation/RadiantHolo',
  component: RadiantHoloPattern,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    fpti: 'SAPC',
    radiant: true,
    holo: true,
  },
  render: args => (
    <RadiantHoloPattern {...args}>
      <div
        style={{
          width: 346,
          height: 491,
          backgroundColor: '#222' /* 어두운 배경 */,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </RadiantHoloPattern>
  ),
};

export const RadiantEx: Story = {
  args: {
    radiant: true,
    holo: false,
  },
  render: args => (
    <Radiant {...args}>
      <div
        style={{
          width: 346,
          height: 491,
          backgroundColor: '#222' /* 어두운 배경 */,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Radiant>
  ),
};

export const HoloEx: Story = {
  args: {
    radiant: false,
    holo: true,
  },
  render: args => (
    <Holo {...args}>
      <div
        style={{
          width: 346,
          height: 491,
          backgroundColor: '#222' /* 어두운 배경 */,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Holo>
  ),
};
