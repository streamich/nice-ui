import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Paper as Component} from '.';

const meta: Meta<typeof Component> = {
  title: '4. Card/Paper',
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
    children: <div style={{padding: 32}}>content ...</div>,
  },
};
