import React from 'react';
import Buttons from './Buttons.jsx';

export default {
  title: 'Organisms/Buttons',
  component: Buttons,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Buttons {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'Buttons organism showcases all button variants with comprehensive implementation details, token usage, and visual examples. This organism demonstrates the complete button system for the Primatif design system.',
    },
  },
};
