import * as React from 'react';
import {storiesOf} from '@storybook/react';
import StramMetadata from '..';
import {P4Asset} from '../../../../util/types';
import Box from '../../Box';
import {Value} from 'libreact/lib/Value';
import SizerStream from '../../../atoms/SizerStream';

const stream: P4Asset = {
  id: '1',
  prn: 's:1',
  type: 's',
  name: 'Geological Observation',
  slug: 'geological-observation',
  creator: {
    id: '2',
    prn: 'u:2',
    type: 'u',
    name: 'Howard Jefferson',
    slug: 'hjefferson',
  },
};

storiesOf('Organisms|StramMetadata', module)
  .add('Default', () => {
    return <StramMetadata stream={stream} />;
  })
  .add('With <Box>', () => {
    return (
      <SizerStream>
        {({width}) => (
          <>
            <StramMetadata stream={stream} width={width} />
            <Value>
              {({value, set}) => (
                <div>
                  <Box value={value} placeholder="Type here..." onChange={(e) => set(e.target.value)} />
                </div>
              )}
            </Value>
          </>
        )}
      </SizerStream>
    );
  });
