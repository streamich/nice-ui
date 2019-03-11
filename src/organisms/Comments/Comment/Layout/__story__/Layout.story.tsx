import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Layout from '..';
import AvatarBlock from '../../../../../molecules/AvatarBlock';
import {action} from '@storybook/addon-actions';

storiesOf('Organisms|Comments/Comment/Layout', module)
  .add('Default', () => {
    return <Layout left={'left'} right={'right'} onLineClick={action('onLineClick')} />;
  })
  .add('With content', () => {
    const left = <AvatarBlock name={'Va Da'} subtext={'Developer'} />;
    return <Layout left={left} right={'right'} />;
  })
  .add('300px', () => {
    return <Layout width={300} left={'left'} right={'right'} />;
  })
  .add('300px, with content', () => {
    const left = <AvatarBlock name={'Va Da'} subtext={'Developer'} />;
    return <Layout width={300} left={left} right={'right'} />;
  });
