import React from 'react';
import TextColorUsage from './TextColorUsage.jsx';

export default {
  title: 'Molecules/TextColorUsage',
  component: TextColorUsage,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <TextColorUsage {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'TextColorUsage demonstrates the proper application of text colors throughout the design system, showing the hierarchy from primary text to secondary, tertiary, disabled states, and link colors with their corresponding design tokens.',
    },
  },
};
