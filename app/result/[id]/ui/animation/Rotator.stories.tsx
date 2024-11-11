import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import PersonalityCard from '../PersonalityCard';
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

export const Card: Story = {
  render: args => (
    <Rotator {...args}>
      <PersonalityCard
        fpti='SAPE'
        type='지원형 크리에이터'
        result={{
          목표와_우선순위: { C: 20, E: 80 },
          책임감과_주도성: { L: 40, S: 60 },
          팀에서의_역할: { A: 83.3, D: 16.7 },
          플레이_스타일: { T: 0, P: 100 },
        }}
      />
    </Rotator>
  ),
};
