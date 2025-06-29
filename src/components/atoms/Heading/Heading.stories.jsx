import Heading from './Heading.jsx';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export const H1 = {
  args: {
    level: 1,
    children: 'This is an H1 Heading',
  },
};

export const H2 = {
  args: {
    level: 2,
    children: 'This is an H2 Heading',
  },
};

export const H3 = {
  args: {
    level: 3,
    children: 'This is an H3 Heading',
  },
};

export const H4 = {
  args: {
    level: 4,
    children: 'This is an H4 Heading',
  },
};

export const H5 = {
  args: {
    level: 5,
    children: 'This is an H5 Heading',
  },
};

export const H6 = {
  args: {
    level: 6,
    children: 'This is an H6 Heading',
  },
};

export const AllHeadingLevels = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
    <Heading level={1}>H1 - Main Page Title</Heading>
    <Heading level={2}>H2 - Section Title</Heading>
    <Heading level={3}>H3 - Subsection Title</Heading>
    <Heading level={4}>H4 - Component Title</Heading>
    <Heading level={5}>H5 - Small Section Title</Heading>
    <Heading level={6}>H6 - Caption Title</Heading>
  </div>
);

export const WithCustomStyling = {
  args: {
    level: 2,
    children: 'Custom Styled Heading',
    style: {
      color: '#007bff',
      textAlign: 'center',
      textDecoration: 'underline',
    },
  },
};

export const LongHeading = {
  args: {
    level: 1,
    children: 'This is a very long heading that demonstrates how the heading component handles longer text content and wrapping behavior',
  },
};
