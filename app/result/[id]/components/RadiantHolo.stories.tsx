import { Meta, StoryObj } from '@storybook/react';

import PersonalityCard from '../ui/PersonalityCard';

import Holo from '@/app/result/[id]/components/Holo';
import Radiant from '@/app/result/[id]/components/Radiant';
import RadiantHolo from '@/app/result/[id]/components/RadiantHolo';

const meta: Meta<typeof RadiantHolo> = {
  title: 'Components/RadiantHolo',
  component: RadiantHolo,
  argTypes: {
    radiant: { control: 'boolean', defaultValue: true },
    holo: { control: 'boolean', defaultValue: true },
  },
};

export default meta;

type Story = StoryObj<typeof RadiantHolo>;

const SampleCard = () => (
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
);

export const Default: Story = {
  args: {
    radiant: true,
    holo: true,
  },
  render: args => (
    <div>
      <RadiantHolo {...args}>
        <SampleCard />
      </RadiantHolo>
    </div>
  ),
};

export const Darken: Story = {
  args: {
    radiant: true,
    holo: true,
  },
  render: args => (
    <div>
      <RadiantHolo {...args}>
        <div
          style={{
            width: 346,
            height: 491,
            backgroundColor: '#222' /* 어두운 배경 */,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></div>
      </RadiantHolo>
    </div>
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
