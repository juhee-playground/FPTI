import Rotator from './animation/Rotator';
import Shine from './animation/Shine';
import PersonalityCard from './PersonalityCard';

import type { Meta, StoryObj } from '@storybook/react';

interface IEffectsStoryProps {
  rotationProps: TRotation;
  fpti?: string;
  type?: string;
  result?: { [group: string]: IScaleValue };
}

const meta = {
  title: 'Components/ShineGlareCard',
  component: PersonalityCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PersonalityCard>;

export default meta;
type Story = StoryObj<IEffectsStoryProps>;

export const ShineGlare: Story = {
  args: {
    fpti: 'LATE',
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

export const EmptyDivWithInteractiveEffects: Story = {
  args: {
    rotationProps: { x: 0, y: 0 },
  },
  render: ({ rotationProps }) => (
    <Rotator rotationProps={rotationProps}>
      <Shine>
        <div
          style={{
            width: 320,
            height: 491,
            backgroundColor: '#444',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            borderRadius: '15px',
            border: '1px solid #ccc',
          }}
        />
      </Shine>
    </Rotator>
  ),
};
