import React from 'react';
import Typography from './Typography.jsx';

export default {
  title: 'Organisms/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'Typography organism showcases the complete typographic system including font families (Bebas Neue, Lato, Monospace), token tables for font sizes and weights, typographic scale examples, and text color usage guidelines. This organism demonstrates the foundation of textual hierarchy for the Primatif design system.',
    },
  },
};
