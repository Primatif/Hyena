import Input from './Input.jsx';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export const Default = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithError = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    error: 'Password must be at least 8 characters',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
  },
};

export const AllTypes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
    <Input label="Text Input" placeholder="Enter text" type="text" />
    <Input label="Email Input" placeholder="Enter email" type="email" />
    <Input label="Password Input" placeholder="Enter password" type="password" />
    <Input label="Number Input" placeholder="Enter number" type="number" />
    <Input label="With Error" placeholder="This has an error" error="This field is required" />
    <Input label="Disabled Input" placeholder="Disabled field" disabled />
  </div>
);
