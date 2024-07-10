import * as React from 'react';
import type {Preview} from '@storybook/react';
import {useStoryContext} from '@storybook/addons';
import {NiceUiProvider} from '../src/context';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => {
      const color = useStoryContext()?.globals?.backgrounds?.value;
      const isDark = color ? String(color)[1].toLowerCase() !== 'f' : false;
      return (
        <NiceUiProvider theme={isDark ? 'dark' : 'light'}>
          <Story />
        </NiceUiProvider>
      );
    },
  ],

  tags: ['autodocs']
};

export default preview;
