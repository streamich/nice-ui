import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import AvatarBlock from '..';

const img = 'https://avatars1.githubusercontent.com/u/9773803?s=460&v=4';

storiesOf('Molecules|AvatarBlock', module)
  .add('Default', () => (
    <div>
      <AvatarBlock src={img} width={40} name={'Aleksandra "Mama" Petersone'} />
      <br />
      <AvatarBlock width={40} name={'Vadims Daleckis'} />
      <br />
      <AvatarBlock width={40} name={'Gabriga Mohamjes'} subtext={'hello world'} />
      <br />
      <AvatarBlock width={40} name={'John Cena'} subtext={'The Champion of the World'} />
    </div>
  ))
  .add('[square]', () => (
    <div>
      <AvatarBlock square src={img} width={40} name={'Aleksandra "Mama" Petersone'} />
      <br />
      <AvatarBlock square width={40} name={'Vadims Daleckis'} />
      <br />
      <AvatarBlock square width={40} name={'Gabriga Mohamjes'} subtext={'hello world'} />
      <br />
      <AvatarBlock square width={40} name={'John Cena'} subtext={'The Champion of the World'} />
    </div>
  ))
  .add('Small', () => (
    <div>
      <AvatarBlock src={img} width={24} name={'Aleksandra "Mama" Petersone'} />
      <br />
      <AvatarBlock width={24} name={'Vadims Daleckis'} />
      <br />
      <AvatarBlock width={24} name={'Vadims Daleckis'} subtext={'hello world'} />
      <br />
      <AvatarBlock width={24} name={'John Cena'} subtext={'The Champion of the World'} />
    </div>
  ))
  .add('Big', () => (
    <div>
      <AvatarBlock src={img} width={64} name={'Aleksandra "Mama" Petersone'} />
      <br />
      <AvatarBlock width={64} name={'Vadims Daleckis'} />
      <br />
      <AvatarBlock width={64} name={'Vadims Daleckis'} subtext={'hello world'} />
      <br />
      <AvatarBlock width={64} name={'John Cena'} subtext={'The Champion of the World'} />
    </div>
  ))
  .add('Click events', () => (
    <div>
      <AvatarBlock
        src={img}
        name={'Aleksandra "Mama" Petersone'}
        subtext={'This is subtext'}
        onAvatarClick={action('onAvatarClick')}
        onNameClick={action('onNameClick')}
        onSubtextClick={action('onSubtextClick')}
      />
      <br />
      <AvatarBlock
        src={img}
        name={'Aleksandra "Mama" Petersone'}
        subtext={'This is subtext'}
        onClick={action('onClick')}
      />
    </div>
  ))
  .add('Boxed in', () => (
    <div
      style={{
        width: 200,
        height: 300,
        border: '1px solid red',
      }}
    >
      <AvatarBlock src={img} width={40} name={'Aleksandra "Mama" Petersone'} />
      <br />
      <AvatarBlock width={40} name={'Vadims Daleckis'} />
      <br />
      <AvatarBlock width={40} name={'Vadims Daleckis'} subtext={'hello world'} />
      <br />
      <AvatarBlock width={40} name={'John Cena'} subtext={'The Champion of the World'} />
    </div>
  ));
