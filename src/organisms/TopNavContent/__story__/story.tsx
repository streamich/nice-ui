import * as React from 'react';
import {storiesOf} from '@storybook/react';
import TopNavContent from '..';

storiesOf('Organisms|TopNavContent', module).add('Default', () => (
  <div style={{border: '1px solid red'}}>
    <TopNavContent />
  </div>
));
