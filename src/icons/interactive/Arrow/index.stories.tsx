import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import Component from '.';

const meta: Meta<typeof Component> = {
  title: 'Icons/Interactive/Arrow',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    direction: 'u',
  },
  decorators: [
    (Story: any) => (
      <div style={{width: 32, height: 32}}>
        <Story />
      </div>
    ),
  ],
};
