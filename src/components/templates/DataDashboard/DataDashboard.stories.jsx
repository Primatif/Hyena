import React from 'react';
import DataDashboard from './DataDashboard.jsx';

export default {
  title: 'Templates/DataDashboard',
  component: DataDashboard,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <DataDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'DataDashboard template demonstrates a project analytics dashboard with KPI cards and data visualizations. This template showcases responsive grid layouts, chart components, and proper use of design tokens for data visualization and dashboard interfaces.',
    },
  },
};
