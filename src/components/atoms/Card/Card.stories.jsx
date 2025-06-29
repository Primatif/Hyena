import Card from './Card.jsx';

export default {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
    padding: {
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
    children: 'This is a default card with some content inside.',
  },
};

export const Elevated = {
  args: {
    variant: 'elevated',
    children: 'This is an elevated card with enhanced shadow.',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    children: 'This is an outlined card with a visible border.',
  },
};

export const SmallPadding = {
  args: {
    variant: 'default',
    padding: 'sm',
    children: 'Card with small padding.',
  },
};

export const LargePadding = {
  args: {
    variant: 'default',
    padding: 'lg',
    children: 'Card with large padding for more breathing room.',
  },
};

export const WithComplexContent = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 'bold' }}>
          Card Title
        </h3>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
          This card contains more complex content including a title, description, and action elements.
        </p>
        <button style={{ 
          padding: '0.5rem 1rem', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '0.25rem' 
        }}>
          Action Button
        </button>
      </div>
    ),
  },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', maxWidth: '800px' }}>
    <Card variant='default' style={{ width: '200px' }}>Default Card</Card>
    <Card variant='elevated' style={{ width: '200px' }}>Elevated Card</Card>
    <Card variant='outlined' style={{ width: '200px' }}>Outlined Card</Card>
  </div>
);
