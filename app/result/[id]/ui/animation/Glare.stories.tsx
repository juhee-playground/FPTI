import { Meta, StoryObj } from '@storybook/react';

import Glare from './Glare';

const meta: Meta<typeof Glare> = {
  title: 'animation/Glare',
  component: Glare,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GlareCard: Story = {
  render: args => (
    <Glare {...args}>
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
    </Glare>
  ),
};
