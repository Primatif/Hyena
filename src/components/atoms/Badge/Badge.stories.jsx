import Badge from './Badge.jsx';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export const Default = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Info = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Small = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Badge',
  },
};

export const Large = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Badge',
  },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
    <Badge variant='default'>Default</Badge>
    <Badge variant='success'>Success</Badge>
    <Badge variant='warning'>Warning</Badge>
    <Badge variant='error'>Error</Badge>
    <Badge variant='info'>Info</Badge>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
    <Badge size='sm'>Small</Badge>
    <Badge size='md'>Medium</Badge>
    <Badge size='lg'>Large</Badge>
  </div>
);
