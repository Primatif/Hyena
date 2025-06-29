import React from 'react';
import CodeBlock from './CodeBlock.jsx';

export default {
  title: 'Molecules/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Code content to display in the block',
    },
  },
};

const Template = (args) => <CodeBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `const example = {
  color: brandColors.PrimaryText,
  backgroundColor: brandColors.PrimaryBackground,
  fontSize: typography.body.fontSize
};`,
};

export const HTMLExample = Template.bind({});
HTMLExample.args = {
  children: `<div className="p-4 rounded-lg" 
     style={{ 
       backgroundColor: brandColors.PrimaryBackground,
       color: brandColors.PrimaryText 
     }}>
  <h2 style={typography.sectionHeader}>Section Title</h2>
  <p>Content with proper token usage</p>
</div>`,
};

export const CSSExample = Template.bind({});
CSSExample.args = {
  children: `.component {
  background-color: var(--primary-background);
  color: var(--primary-text);
  border: 1px solid var(--gray-light);
  border-radius: 0.5rem;
  padding: 1rem;
}`,
};

export const JavaScriptExample = Template.bind({});
JavaScriptExample.args = {
  children: `import { brandColors, typography } from '../data';

const Component = ({ title, children }) => (
  <div style={{
    backgroundColor: brandColors.PrimaryBackground,
    color: brandColors.PrimaryText,
    ...typography.body
  }}>
    <h2 style={typography.sectionHeader}>{title}</h2>
    {children}
  </div>
);

export default Component;`,
};

export const JSONExample = Template.bind({});
JSONExample.args = {
  children: `{
  "primaryText": "#2D3748",
  "primaryBackground": "#FFFFFF",
  "primaryAccent": "#E53E3E",
  "secondaryAccent": "#3182CE",
  "grayLight": "#E2E8F0",
  "grayDark": "#4A5568"
}`,
};

export const ShortSnippet = Template.bind({});
ShortSnippet.args = {
  children: `brandColors.PrimaryAccent`,
};

ShortSnippet.parameters = {
  docs: {
    description: {
      story: 'CodeBlock handles both short code snippets and longer code examples with proper syntax preservation and token-based styling.',
    },
  },
};
