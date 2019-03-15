import * as React from 'react';
import {storiesOf} from '@storybook/react';
import StramMetadata from '..';
import {P4Asset} from '../../../util/types';
import Box from '../../Box';
import {Value} from 'libreact/lib/Value';
import SizerStream from '../../../atoms/SizerStream';
import {assetStream1 as stream} from '../../../__tests__/mocks/assets';

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
