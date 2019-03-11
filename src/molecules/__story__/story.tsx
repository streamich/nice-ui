import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ButtonGoogle from '../ButtonGoogle';
import ButtonFacebook from '../ButtonFacebook';

const buttons = [['ButtonGoogle', ButtonGoogle], ['ButtonFacebook', ButtonFacebook]];

for (const [name, Comp] of buttons) {
  storiesOf('Molecules|' + name, module)
    .add('Default', () => <Comp />)
    .add('[disabled]', () => <Comp disabled />)
    .add('[onlyIcon]', () => <Comp onlyIcon />);
}
