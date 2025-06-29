import React from 'react';
import FormElements from './FormElements.jsx';

export default {
  title: 'Templates/FormElements',
  component: FormElements,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <FormElements {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'FormElements template demonstrates a comprehensive showcase of all standard web form elements with proper styling, states (default, focus, error, disabled), and interactions. This template shows how to build complex forms using design tokens and includes custom components for inputs, checkboxes, radio buttons, and range sliders.',
    },
  },
};
