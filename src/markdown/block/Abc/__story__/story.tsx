import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Abc from '../async';

storiesOf('Markdown|Block/Abc', module).add('Example', () => <Abc source="agh" />);
