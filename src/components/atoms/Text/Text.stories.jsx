import Text from './Text.jsx';

export default {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['body', 'caption', 'muted'],
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export const Default = {
  args: {
    children: 'This is default body text that demonstrates the standard text component styling and appearance.',
  },
};

export const Caption = {
  args: {
    variant: 'caption',
    children: 'This is caption text, typically used for image captions, footnotes, or small labels.',
  },
};

export const Muted = {
  args: {
    variant: 'muted',
    children: 'This is muted text, used for secondary information or less important content.',
  },
};

export const ExtraSmall = {
  args: {
    size: 'xs',
    children: 'Extra small text size',
  },
};

export const Small = {
  args: {
    size: 'sm',
    children: 'Small text size',
  },
};

export const Medium = {
  args: {
    size: 'md',
    children: 'Medium text size (default)',
  },
};

export const Large = {
  args: {
    size: 'lg',
    children: 'Large text size',
  },
};

export const ExtraLarge = {
  args: {
    size: 'xl',
    children: 'Extra large text size',
  },
};

export const AllSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
    <Text size='xs'>Extra Small - Perfect for fine print and legal text</Text>
    <Text size='sm'>Small - Good for captions and secondary information</Text>
    <Text size='md'>Medium - Standard body text for most content</Text>
    <Text size='lg'>Large - Emphasis text and important information</Text>
    <Text size='xl'>Extra Large - Standout text and large callouts</Text>
  </div>
);

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
    <Text variant='body'>
      Body text variant - This is the standard text styling used for main content, articles, and general body copy.
    </Text>
    <Text variant='caption'>
      Caption variant - Used for image captions, form help text, and minor annotations.
    </Text>
    <Text variant='muted'>
      Muted variant - Perfect for secondary information, timestamps, and less prominent content.
    </Text>
  </div>
);

export const LongContent = {
  args: {
    children: 'This is a longer piece of text content that demonstrates how the Text component handles multiple lines, text wrapping, and longer paragraphs. It maintains consistent line height, spacing, and readability even with extended content. This helps show how the component performs in real-world usage scenarios with varying content lengths.',
  },
};

export const WithCustomStyling = {
  args: {
    children: 'Custom styled text with additional properties',
    style: {
      color: '#007bff',
      fontWeight: 'bold',
      textDecoration: 'underline',
    },
  },
};

export const InContext = () => (
  <div style={{ maxWidth: '600px', lineHeight: 1.6 }}>
    <Text size='lg' style={{ fontWeight: 'bold', marginBottom: '1rem', display: 'block' }}>
      Article Title Example
    </Text>
    <Text variant='body' style={{ marginBottom: '1rem', display: 'block' }}>
      This is the main body content of an article or blog post. The Text component provides consistent styling and excellent readability for longer form content.
    </Text>
    <Text variant='muted' style={{ marginBottom: '0.5rem', display: 'block' }}>
      Published on March 15, 2024
    </Text>
    <Text variant='caption'>
      Last updated: March 20, 2024
    </Text>
  </div>
);
