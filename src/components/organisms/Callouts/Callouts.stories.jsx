import React from 'react';
import Callouts from './Callouts.jsx';

export default {
  title: 'Organisms/Callouts',
  component: Callouts,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Callouts {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'Callouts organism showcases all callout types (info, success, warning, danger, usage) with glassmorphism styling, comprehensive implementation details, and token usage. This organism demonstrates the complete callout system for the Primatif design system.',
    },
  },
};
