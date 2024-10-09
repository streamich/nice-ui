// import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {PillButton as Component} from '.';

const meta: Meta<typeof Component> = {
  title: '2. Inline Block/PillButton',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: 'Click me',
  },
};
