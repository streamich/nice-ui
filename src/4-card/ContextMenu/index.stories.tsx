import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {ContextPane as Component, ContextItem, ContextSep} from '.';

const meta: Meta<typeof Component> = {
  title: '4. Card/ContextMenu',
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
    children: (
      <>
        <ContextSep />
        <ContextItem>Item 1</ContextItem>
        <ContextItem>Item 2</ContextItem>
        <ContextSep line />
        <ContextItem big>Big item 1</ContextItem>
        <ContextItem big>Big item 2</ContextItem>
        <ContextSep />
      </>
    ),
  },
};
