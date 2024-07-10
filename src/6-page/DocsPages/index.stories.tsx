import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {DocsPages as Component} from '.';
import {ContentPage} from './types';
import {augmentContentPages} from './util';

const meta: Meta<typeof Component> = {
  title: '6. Page/DocsPages',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const page: ContentPage = {
  name: 'Home',
  to: '/',
  slug: '',
  children: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      src: async () => 'Hello world',
    },
    {
      slug: 'documentation',
      name: 'Documentation',
      src: async () => 'docs ..',
    },
  ],
};

augmentContentPages(page);

console.log(page);

export const Primary: StoryObj<typeof meta> = {
  render: () => <Component steps={['', 'getting-started']} page={page} />,
};
