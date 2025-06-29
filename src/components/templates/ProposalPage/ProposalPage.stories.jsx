import React from 'react';
import ProposalPage from './ProposalPage.jsx';

export default {
  title: 'Templates/ProposalPage',
  component: ProposalPage,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ProposalPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'ProposalPage template demonstrates a formal business document layout with professional typography, data tables, callout boxes, and cost summaries. This template showcases proper document structure with headers, sections, and semantic color usage for business communications.',
    },
  },
};
