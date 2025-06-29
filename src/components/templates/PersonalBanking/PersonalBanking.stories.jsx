import React from 'react';
import PersonalBanking from './PersonalBanking.jsx';

export default {
  title: 'Templates/PersonalBanking',
  component: PersonalBanking,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <PersonalBanking {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'PersonalBanking template demonstrates a financial dashboard interface with balance display, transaction history, and semantic color coding for financial data. This template showcases proper use of design tokens for financial semantics (success for credits, error for debits) and includes transaction categorization with visual indicators.',
    },
  },
};
