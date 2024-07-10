import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {BasicTooltip as Component} from '.';

const meta: Meta<typeof Component> = {
  title: '4. Card/BasicTooltip',
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
    renderTooltip: () => <div style={{padding: 10}}>Hello world</div>,
    children: 'Hover me!',
  },
};
