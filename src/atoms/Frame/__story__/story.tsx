import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Frame} from '..';

storiesOf('Atoms|Frame', module)
  .add('Defaults', () => <Frame>Lorep lipsum dolorem...</Frame>)
  .add('With separator', () => (
    <div>
      <Frame>
        Lorep lipsum dolorem...
        <hr />
        more text...
      </Frame>
      <Frame pad={3} bd={3} mar={1}>
        Lorep lipsum dolorem...
        <hr />
        more text...
      </Frame>
    </div>
  ))
  .add('Padding scale', () => (
    <div>
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
        <div key={i}>
          <Frame pad={i as any}>
            <pre>{`<Frame pad={${i}}>`}</pre>
          </Frame>
          <br />
        </div>
      ))}
    </div>
  ))
  .add('Margin scale', () => (
    <div>
      {[-3, -2, -1, 0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i}>
          <Frame mar={i as any} style={{marginTop: 0, marginBottom: 0}}>
            <pre>{`<Frame mar={${i}}>`}</pre>
          </Frame>
          <br />
        </div>
      ))}
    </div>
  ))
  .add('Border scale', () => (
    <div>
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
        <div key={i}>
          <Frame bd={i as any}>
            <pre>{`<Frame bd={${i}}>`}</pre>
          </Frame>
          <br />
        </div>
      ))}
    </div>
  ))
  .add('Shadow scale', () => (
    <div>
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
        <div key={i}>
          <Frame bd={-2} shadow={i as any}>
            <pre>{`<Frame bd={-2} shadow={${i}}>`}</pre>
          </Frame>
          <br />
        </div>
      ))}
    </div>
  ))
  .add('Background scale', () => (
    <div>
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
        <div key={i}>
          <Frame bg={i as any}>
            <pre>{`<Frame bg={${i}}>`}</pre>
          </Frame>
          <br />
        </div>
      ))}
    </div>
  ))
  .add('All scales', () => (
    <div>
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
        <div key={i}>
          <Frame bg={i as any} bd={i as any} shadow={i as any} pad={i as any} mar={i as any}>
            <pre>{`<Frame bg={${i}} bd={${i}} shadow={${i}} pad={${i}} mar={${i}}>`}</pre>
          </Frame>
          <br />
        </div>
      ))}
    </div>
  ));
