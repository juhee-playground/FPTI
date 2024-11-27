import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import RadiantHolo from './RadiantHolo';

import PersonalityCard from '@/app/result/[id]/ui/PersonalityCard';

const meta: Meta<typeof RadiantHolo> = {
  title: 'animation/RadiantHolo',
  component: RadiantHolo,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: args => (
    <RadiantHolo {...args}>
      <PersonalityCard
        fpti='LATE'
        type='쇼맨의 리더형'
        result={{
          목표와_우선순위: { C: 20, E: 80 },
          책임감과_주도성: { L: 40, S: 60 },
          팀에서의_역할: { A: 83.3, D: 16.7 },
          플레이_스타일: { T: 0, P: 100 },
        }}
      />
    </RadiantHolo>
  ),
};
