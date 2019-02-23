import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Avatar} from '..';

const img = 'https://avatars1.githubusercontent.com/u/9773803?s=460&v=4';

storiesOf('Atoms|Avatar', module)
  .add('Default', () => <Avatar src={img} onClick={action('onClick')} />)
  .add('[square]', () => <Avatar square src={img} onClick={action('onClick')} />)
  .add('On error', () => <Avatar src="http://example.com/error" />)
  .add('[name=Va]', () => <Avatar name="Va Da" />)
  .add('Centering', () => (
    <>
      <Avatar name="Va Da" />
      <Avatar name="Maga" />
      <Avatar name="Mg" />
      <Avatar name="Joly" />
      <Avatar name="Labar" />
      <br />
      <Avatar name="Va Da" />
      <br />
      <Avatar name="Maga" />
      <br />
      <Avatar name="Mg" />
      <br />
      <Avatar name="Joly" />
      <br />
      <Avatar name="Labar" />
      <br />
    </>
  ))
  .add('Size scale', () => (
    <div>
      {[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((size) => (
        <Avatar key={size} size={size as any} src={img} />
      ))}
    </div>
  ))
  .add('Size scale - 2', () => (
    <div>
      {[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((size) => (
        <Avatar key={size} size={size as any} name="Mw go" />
      ))}
    </div>
  ))
  .add('Any size: 66px', () => <Avatar width={66} name="Mw go" />);
