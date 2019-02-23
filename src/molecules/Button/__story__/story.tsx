import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SpinnerCircle from '../../../atoms/SpinnerCircle';
import GoogleIcon from '../../../atoms/icons/svg/Google';
import {theme} from '../../../theme';
import {Button} from '..';

storiesOf('Molecules|Button', module)
  .add('Basic', () => <Button attr={{onClick: action('onClick')}}>Click me!</Button>)
  .add('Primary', () => (
    <div>
      <Button primary>Primary</Button>
      <br />
      <br />
      <Button positive>Positive</Button>
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <Button size={-2}>XS</Button>
      <br />
      <br />
      <Button size={-1}>S</Button>
      <br />
      <br />
      <Button size={0}>M</Button>
      <br />
      <br />
      <Button size={1}>L</Button>
      <br />
      <br />
      <Button size={2}>XL</Button>
    </div>
  ))
  .add('With icon', () => (
    <div>
      <Button size={-2} icon={<SpinnerCircle size={0} />}>
        XS
      </Button>
      <br />
      <br />
      <Button size={-1} icon={<SpinnerCircle size={0} />}>
        S
      </Button>
      <br />
      <br />
      <Button size={0} icon={<SpinnerCircle size={0} />}>
        M
      </Button>
      <br />
      <br />
      <Button size={1} icon={<SpinnerCircle size={0} />}>
        L
      </Button>
      <br />
      <br />
      <Button size={2} icon={<SpinnerCircle size={0} />}>
        XL
      </Button>
      <br />
      <br />
      <Button positive size={0} icon={<SpinnerCircle size={0} />}>
        Click me!
      </Button>
    </div>
  ))
  .add('Icon only', () => (
    <div>
      <Button size={-2} icon={<SpinnerCircle size={0} />} />
      <br />
      <br />
      <Button size={-1} icon={<SpinnerCircle size={0} />} />
      <br />
      <br />
      <Button size={0} icon={<SpinnerCircle size={0} />} />
      <br />
      <br />
      <Button size={1} icon={<SpinnerCircle size={0} />} />
      <br />
      <br />
      <Button size={2} icon={<SpinnerCircle size={0} />} />
    </div>
  ))
  .add('[lite]', () => <Button lite>Click me!</Button>)
  .add('[outline]', () => (
    <Button outline primary>
      Click me!
    </Button>
  ))
  .add('[ghost]', () => <Button ghost>Click me!</Button>)
  .add('[disabled]', () => <Button disabled>Click me!</Button>)
  .add('[loading]', () => (
    <div>
      <Button loading>Click me!</Button>
      <br />
      <br />
      <Button loading primary>
        Click me!
      </Button>
      <br />
      <br />
      <Button loading positive>
        Click me!
      </Button>
      <br />
      <br />
    </div>
  ))
  .add('Custom color', () => (
    <div>
      <Button color="red">Red</Button>
      <br />
      <br />
      <Button color={theme.positive}>Positive</Button>
      <br />
      <br />
      <Button color={theme.negative}>Negative</Button>
      <br />
      <br />
      <Button color={theme.warning}>Warning</Button>
    </div>
  ))
  .add('Branded', () => (
    <Button ghost color="#DD4B39" icon={<GoogleIcon size={20} />} onClick={action('onClick')}>
      Google
    </Button>
  ))
  .add('Custom width', () => (
    <Button primary style={{width: '90%'}}>
      Custom
    </Button>
  ))
  .add('[block]', () => <Button block>Block button</Button>)
  .add('[href=]', () => (
    <div>
      <Button href="http://example.com">Link anchor</Button>
      <br />
      <br />
      <Button href="http://example.com" primary>
        Link anchor
      </Button>
      <br />
      <br />
      <Button href="http://example.com" positive>
        Link anchor
      </Button>
      <br />
      <br />
      <Button href="http://example.com" ghost>
        Link anchor
      </Button>
      <br />
      <br />
      <Button href="http://example.com" loading>
        Link anchor
      </Button>
      <br />
      <br />
    </div>
  ));
