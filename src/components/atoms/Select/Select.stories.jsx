import Select from './Select.jsx';

export default {
  title: 'Atoms/Select',
  component: Select,
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
  },
};

const simpleOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const objectOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export const Default = {
  args: {
    label: 'Choose an Option',
    options: simpleOptions,
    placeholder: 'Select an option...',
  },
};

export const WithError = {
  args: {
    label: 'Framework',
    options: objectOptions,
    placeholder: 'Choose a framework',
    error: 'Please select a framework',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Select',
    options: simpleOptions,
    placeholder: 'This is disabled',
    disabled: true,
  },
};

export const WithDefaultValue = {
  args: {
    label: 'Pre-selected Option',
    options: objectOptions,
    defaultValue: 'react',
  },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
    <Select label="Basic Select" options={simpleOptions} placeholder="Choose one..." />
    <Select label="Object Options" options={objectOptions} placeholder="Select framework..." />
    <Select label="With Error" options={simpleOptions} error="This field is required" />
    <Select label="Pre-selected" options={objectOptions} defaultValue="vue" />
    <Select label="Disabled Select" options={simpleOptions} disabled />
  </div>
);
