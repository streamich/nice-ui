import * as React from 'react';
import {storiesOf} from '@storybook/react';
import PagePost from '..';
import {asset1} from '../../../__tests__/mocks/assets';

storiesOf('Pages|PagePost', module).add('Basic', () => <PagePost asset={asset1} />);
