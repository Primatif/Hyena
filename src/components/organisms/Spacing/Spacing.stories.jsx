import React from 'react';
import Spacing from './Spacing.jsx';

export default {
  title: 'Organisms/Spacing',
  component: Spacing,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Spacing {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'Spacing organism demonstrates the standardized spacing scale based on a 4px base unit and responsive breakpoints. This organism provides the foundation for consistent visual rhythm and responsive design patterns in the Primatif design system.',
    },
  },
};
