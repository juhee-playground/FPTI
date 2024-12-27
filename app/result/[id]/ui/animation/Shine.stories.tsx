import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import PersonalityCard from '../PersonalityCard';
import Shine from './Shine';

const meta: Meta<typeof Shine> = {
  title: 'animation/Shine',
  component: Shine,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: args => (
    <Shine {...args}>
      <PersonalityCard
        fpti='LATE'
        type='쇼맨의 리더형'
        result={{
          목표와_우선순위: { C: 40, E: 60 },
          책임감과_주도성: { L: 57, S: 43 },
          팀에서의_역할: { A: 100, D: 0 },
          플레이_스타일: { T: 52, P: 48 },
        }}
      />
    </Shine>
  ),
};

export const ShineEx: Story = {
  render: args => (
    <Shine {...args}>
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
    </Shine>
  ),
};
