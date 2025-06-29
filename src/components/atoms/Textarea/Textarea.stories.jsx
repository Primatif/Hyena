import Textarea from './Textarea.jsx';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    rows: {
      control: { type: 'number', min: 2, max: 10 },
    },
  },
};

export const Default = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    rows: 4,
  },
};

export const WithError = {
  args: {
    label: 'Comments',
    placeholder: 'Please provide your feedback',
    rows: 3,
    error: 'Comments are required',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This field is disabled',
    rows: 4,
    disabled: true,
  },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '400px' }}>
    <Textarea label="Default Textarea" placeholder="Enter your message..." rows={3} />
    <Textarea label="With Error" placeholder="This has an error" rows={3} error="This field is required" />
    <Textarea label="Large Textarea" placeholder="Larger text area" rows={6} />
    <Textarea label="Disabled Textarea" placeholder="Disabled field" rows={3} disabled />
  </div>
);
