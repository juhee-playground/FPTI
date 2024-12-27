import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Holo from './Holo';
import Radiant from './Radiant';
import RadiantHoloPattern from './RadiantHoloPattern';

import PersonalityCard from '@/app/result/[id]/ui/PersonalityCard';

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
      <PersonalityCard
        fpti='SAPC'
        type='쇼맨의 리더형'
        result={{
          목표와_우선순위: { C: 20, E: 80 },
          책임감과_주도성: { L: 40, S: 60 },
          팀에서의_역할: { A: 83.3, D: 16.7 },
          플레이_스타일: { T: 0, P: 100 },
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
