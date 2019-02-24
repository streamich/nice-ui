import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../Markdown';

storiesOf('Markdown|Markdown', module).add('Example', () => <Markdown src="*alpha* __bravo__" />);
