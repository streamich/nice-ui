import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Input as Component, InputProps} from '.';

const meta: Meta<typeof Component> = {
  title: '2. Inline Block/Input',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Demo: React.FC<InputProps> = (props) => {
  const [value, setValue] = React.useState(props.value);

  return (
    <div>
      <Component label={'My label'} value={value} onChange={value => setValue(value)} {...props} />
      <br />
      <Component value={value} onChange={value => setValue(value)} {...props} />
      <br />
      <Component disabled value={value} onChange={value => setValue(value)} {...props} />
      <br />
      <Component disabled label={'Disabled with label'} value={value} onChange={value => setValue(value)} {...props} />
      <br />
      <Component waiting value={value} onChange={value => setValue(value)} {...props} />
    </div>
  );
};

export const Primary: StoryObj<typeof meta> = {
  args: {
    value: '...',
  },
};

export const Interactive: StoryObj<typeof meta> = {
  render: (args) => <Demo {...args} />,
};

const DemoSizes: React.FC<InputProps> = (props) => {
  const [value, setValue] = React.useState(props.value);

  return (
    <div>
      <Component size={2} label={'My label'} value={value} onChange={value => setValue(value)} {...props} />
      <br />
      <Component size={1} label={'My label'} value={value} onChange={value => setValue(value)} {...props} />
      <br />
      <Component size={0} label={'My label'} value={value} onChange={value => setValue(value)} {...props} />
      <br />
      <Component size={-1} label={'My label'} value={value} onChange={value => setValue(value)} {...props} />
      <br />
      <Component size={-2} label={'My label'} value={value} onChange={value => setValue(value)} {...props} />
      <br />
    </div>
  );
};

export const SizeScale: StoryObj<typeof meta> = {
  render: (args) => <DemoSizes {...args} />,
};
