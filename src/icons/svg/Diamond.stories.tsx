import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import Component from './Diamond';

const meta: Meta<typeof Component> = {
  title: 'Icons/SVG/Diamond',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
  decorators: [
    (Story: any) => (
      <div style={{width: '100px', height: '100px'}}>
        <Story />
      </div>
    ),
  ],
};
