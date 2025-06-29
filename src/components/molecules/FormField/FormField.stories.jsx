import React from 'react';
import FormField from './FormField.jsx';

export default {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the form field',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'textarea', 'select'],
      description: 'The type of input field to render',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    error: {
      control: 'text',
      description: 'Error message to display below the field',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the field',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    options: {
      control: 'object',
      description: 'Array of options for select fields',
    },
  },
};

const Template = (args) => <FormField {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'Full Name',
  type: 'text',
  placeholder: 'Enter your full name',
  helperText: 'This will be displayed on your profile',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email Address',
  type: 'email',
  placeholder: 'your.email@example.com',
  required: true,
  helperText: 'We\'ll use this to send you important updates',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter a secure password',
  required: true,
  helperText: 'Must be at least 8 characters long',
};

export const TextareaField = Template.bind({});
TextareaField.args = {
  label: 'Message',
  type: 'textarea',
  placeholder: 'Enter your message here...',
  helperText: 'Please provide as much detail as possible',
};

export const SelectField = Template.bind({});
SelectField.args = {
  label: 'Country',
  type: 'select',
  placeholder: 'Select your country',
  options: [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
  ],
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email Address',
  type: 'email',
  placeholder: 'your.email@example.com',
  error: 'Please enter a valid email address',
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Account Type',
  type: 'text',
  placeholder: 'Premium Account',
  disabled: true,
  helperText: 'Contact support to change your account type',
};

export const FormFieldShowcase = () => (
  <div className="space-y-6 max-w-md">
    <FormField
      label="Full Name"
      type="text"
      placeholder="Enter your full name"
      required
    />
    <FormField
      label="Email Address"
      type="email"
      placeholder="your.email@example.com"
      required
      helperText="We'll use this to send you updates"
    />
    <FormField
      label="Country"
      type="select"
      placeholder="Select your country"
      options={[
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
      ]}
      required
    />
    <FormField
      label="Message"
      type="textarea"
      placeholder="Enter your message..."
      helperText="Please provide as much detail as possible"
    />
    <FormField
      label="Invalid Email"
      type="email"
      placeholder="example@domain"
      error="Please enter a valid email address"
    />
  </div>
);
FormFieldShowcase.parameters = {
  docs: {
    description: {
      story: 'Complete showcase of FormField molecule with different input types, states, and validation. Demonstrates token-driven styling and atomic component composition.',
    },
  },
};
