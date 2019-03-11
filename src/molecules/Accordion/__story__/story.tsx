import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Accordion from '..';

const img = 'https://avatars1.githubusercontent.com/u/9773803?s=460&v=4';

storiesOf('Molecules|Accordion', module).add('Default', () => {
  return (
    <Accordion
      tabs={['meta', 'settings', 'more', 'hooks']}
      renderTitle={(tab) => {
        switch (tab) {
          case 'meta':
            return 'Metadata';
          case 'settings':
            return 'Settings';
        }
        return tab;
      }}
      renderBody={() => 'Lalalala...'}
    />
  );
});
