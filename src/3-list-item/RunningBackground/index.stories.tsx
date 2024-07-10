import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {RunningBackground as Component} from '.';

const meta: Meta<typeof Component> = {
  title: '3. List Item/RunningBackground',
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
      <div style={{width: '300px'}}>
        <Story />
      </div>
    ),
  ],
};
