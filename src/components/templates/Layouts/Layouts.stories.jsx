import React from 'react';
import Layouts from './Layouts.jsx';

export default {
  title: 'Templates/Layouts',
  component: Layouts,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Layouts {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'Layouts template is a comprehensive showcase of all available layout templates, organized into Print Document Examples and Web App Examples. This template demonstrates the flexibility and consistency of the design system across different contexts and applications.',
    },
  },
};
