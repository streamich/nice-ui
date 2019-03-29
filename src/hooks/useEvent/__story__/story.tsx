import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import useEvent from '..';

const Demo = () => {
  const handler = React.useMemo(
    () => (event) => {
      action(`useEvent(keydown = ${event.key})`)();
    },
    [],
  );
  useEvent('keydown', handler);

  return <div>Press some keys.</div>;
};

storiesOf('Hooks|useEvent', module).add('Default', () => <Demo />);
