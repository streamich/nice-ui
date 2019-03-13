import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {theme} from '../theme';

const Color: any = ({color, name, invert}) => (
  <div
    style={{
      width: 100,
      lineHeight: '50px',
      textAlign: 'center',
      background: color,
      fontFamily: 'monospace',
      color: invert ? 'black' : 'white',
    }}
  >
    {name}
  </div>
);

const ColoBlock: any = ({colors, name, invert}) => (
  <div style={{float: 'left', padding: 10, width: 100, overflow: 'hidden'}}>
    <Color invert={invert} name={name + '[0]'} color={colors[0]} />
    <Color invert={invert} name={name + '[1]'} color={colors[1]} />
    <Color invert={invert} name={name + '[2]'} color={colors[2]} />
  </div>
);

storiesOf('Util|Theme', module).add('Colors', () => (
  <div>
    <ColoBlock name="color1" colors={theme.color1} />
    <ColoBlock name="color2" colors={theme.color2} />
    <ColoBlock name="color3" colors={theme.color3} />
    <ColoBlock name="color4" colors={theme.color4} />
    <ColoBlock name="color5" colors={theme.color5} />
    <ColoBlock name="color6" colors={theme.color6} />

    <div style={{clear: 'both'}} />

    <hr />

    <div style={{float: 'left', padding: 10, width: 100, overflow: 'hidden'}}>
      <Color name="black" color={theme.black} />
      <Color name="steel" color={theme.steel} />
      <Color name="slate" color={theme.slate} />
      <Color name="silver" color={theme.silver} />
    </div>

    <ColoBlock invert name="smoke" colors={theme.smoke} />
    <ColoBlock invert name="snow" colors={theme.snow} />

    <div style={{float: 'left', padding: 10, width: 100, overflow: 'hidden'}}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <Color key={i} name={`grey[${i}]`} invert={i > 5} color={theme.grey[i]} />
      ))}
    </div>

    <div style={{float: 'left', padding: 10, width: 100, overflow: 'hidden'}}>
      <Color name="blue" color={theme.blue} />
      <Color name="positive" color={theme.positive} />
      <Color name="negative" color={theme.negative} />
      <Color name="warning" color={theme.warning} />
    </div>

    <div style={{clear: 'both'}} />
  </div>
));
