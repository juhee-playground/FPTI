import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Rotator from './Rotator';

const meta: Meta<typeof Rotator> = {
  title: 'animation/Rotator',
  component: Rotator,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RotatorEx: Story = {
  render: args => (
    <Rotator {...args}>
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
    </Rotator>
  ),
};
