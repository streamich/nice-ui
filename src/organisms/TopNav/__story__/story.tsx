import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {TopNav} from '..';
import {Toggle} from 'libreact/lib/Toggle';
import {Checkbox} from '../../../molecules/Checkbox';
import {LogoInteractive} from '../../../atoms/LogoInteractive';
import {Space} from '../../../atoms/Space';
import Burger from '../Burger';

storiesOf('Organisms|TopNav', module)
  .add('Default', () => (
    <div>
      <div style={{width: 100, height: 100, background: 'red'}} />
      <TopNav>Hello world!</TopNav>
    </div>
  ))
  .add('open=', () => (
    <div>
      <div style={{width: 100, height: 100, background: 'red'}} />
      <TopNav open>Hello world!</TopNav>
    </div>
  ))
  .add('Toggle', () => (
    <Toggle>
      {({on, toggle}) => (
        <div>
          <div style={{width: 100, height: 100}} />
          <Checkbox on={on} onChange={toggle} />
          <TopNav open={on}>Hello world!</TopNav>
        </div>
      )}
    </Toggle>
  ))
  .add('Scroll', () => (
    <div>
      <div style={{width: 100, height: 3000, background: 'red'}} />
      <TopNav open>Hello world!</TopNav>
    </div>
  ))
  .add('With logo', () => (
    <div>
      <div style={{width: 100, height: 3000, background: 'red'}} />
      <TopNav open>
        <Space padt={2} padl={3}>
          <LogoInteractive />
        </Space>
      </TopNav>
    </div>
  ));

storiesOf('Organisms|TopNav/Burger', module).add('Default', () => (
  <Burger style={{border: '1px solid red', width: 64, height: 64}} />
));
