import React from 'react';
import InternalReport from './InternalReport.jsx';

export default {
  title: 'Templates/InternalReport',
  component: InternalReport,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <InternalReport {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'InternalReport template demonstrates a comprehensive business report layout with data visualizations, metrics cards, and status tables. This template showcases proper use of design tokens for semantic data representation and includes custom chart components (BarChart and DonutChart) with SVG-based visualizations.',
    },
  },
};
