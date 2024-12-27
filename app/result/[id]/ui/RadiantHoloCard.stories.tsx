import RadiantHoloCard from './RadiantHoloCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/RadiantHoloGlareCard',
  component: RadiantHoloCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RadiantHoloCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    fpti: 'SAPC',
    type: '쇼맨의 리더형',
    result: {
      '책임감과 주도성': {
        L: 57,
        S: 43,
      },
      '팀에서의 역할': {
        A: 100,
        D: 0,
      },
      '플레이 스타일': {
        T: 52,
        P: 48,
      },
      '목표와 우선순위': {
        C: 40,
        E: 60,
      },
    },
  },
};
