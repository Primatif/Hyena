import React from 'react';
import Button from './Button.jsx';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Action',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
    children: 'Delete Item',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="primary" disabled>Disabled</Button>
  </div>
);
