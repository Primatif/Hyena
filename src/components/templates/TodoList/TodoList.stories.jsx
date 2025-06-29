import React from 'react';
import TodoList from './TodoList.jsx';

export default {
  title: 'Templates/TodoList',
  component: TodoList,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'TodoList template demonstrates a clean task management interface with priority indicators, completion states, and semantic color coding. This template showcases proper use of design tokens for priority colors (high=error, medium=warning, low=info) and includes custom checkbox components with completion states.',
    },
  },
};
