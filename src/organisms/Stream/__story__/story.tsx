import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Stream from '..';
import {list1} from '../../../__tests__/mocks/assets';

storiesOf('Organisms|Stream', module).add('Default', () => {
  return <Stream assets={list1.list} />;
});
