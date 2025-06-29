import React from 'react';
import Diagrams from './Diagrams.jsx';

export default {
  title: 'Organisms/Diagrams',
  component: Diagrams,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Diagrams {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'Diagrams organism showcases standardized system architecture and workflow diagram components with responsive design, semantic color mapping, and composable diagram elements. This organism demonstrates the foundation for creating professional technical diagrams in the Primatif design system.',
    },
  },
};
