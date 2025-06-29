import React from 'react';
import ChatInterface from './ChatInterface.jsx';

export default {
  title: 'Templates/ChatInterface',
  component: ChatInterface,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ChatInterface {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'ChatInterface template demonstrates a modern AI chat interface with split-panel layout, navigation sidebar, message history, and user input controls. This template showcases proper use of design tokens for colors, typography, and patterns in a conversational interface layout.',
    },
  },
};
