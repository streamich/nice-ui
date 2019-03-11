import * as React from 'react';
import {storiesOf} from '@storybook/react';
import FormSignIn from '..';
import {InputLine} from '../../../molecules/InputLine';
import {Button} from '../../../molecules/Button';
import {SocialButtons} from '../SocialButtons';
import {T} from '../../../util';
import {Space} from '../../../atoms/Space';

const Form = ({t = T, width}) => (
  <form>
    <div style={{textAlign: 'center'}}>
      <a href="">Login</a>
      {' - '}
      <a href="">Sign up</a>
    </div>
    <InputLine small={width < 400} label={t('E-mail')} />
    <Space padt={width < 500 ? 2 : 4}>
      <InputLine small={width < 400} label={t('Password')} type="password" />
    </Space>
    <Space padt={width < 500 ? 3 : 5}>
      <Button block positive style={{w: '100%'}} size={width < 500 ? 0 : 1}>
        {t('Connect')}
      </Button>
    </Space>
  </form>
);

storiesOf('Organisms|FormSignin', module).add('Basic', () => (
  <FormSignIn
    renderButtons={(width) => <SocialButtons width={width} />}
    renderForm={(width) => <Form width={width} />}
  />
));
