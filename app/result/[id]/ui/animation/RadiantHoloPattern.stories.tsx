import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import HoloPattern from './HoloPattern';
import Radiant from './Radiant';
import RadiantHolo from './RadiantHoloPattern';

import PersonalityCard from '@/app/result/[id]/ui/PersonalityCard';

const meta: Meta<typeof RadiantHolo> = {
  title: 'components/RadiantHolo',
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

export const RadiantEx: Story = {
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
  render: args => (
    <HoloPattern {...args}>
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
    </HoloPattern>
  ),
};
