import React from 'react';
import ColorDisplayTable from './ColorDisplayTable.jsx';

export default {
  title: 'Molecules/ColorDisplayTable',
  component: ColorDisplayTable,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the color table section',
    },
    description: {
      control: 'text',
      description: 'Optional description text for the color table',
    },
    colors: {
      control: 'object',
      description: 'Array of color objects with name, token, hex, and optional border properties',
    },
  },
};

const Template = (args) => <ColorDisplayTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Brand Colors',
  description: 'Primary colors used throughout the brand identity and design system.',
  colors: [
    {
      name: 'Primary Red',
      token: 'brandColors.PrimaryAccent',
      hex: '#E53E3E',
    },
    {
      name: 'Sky Blue',
      token: 'brandColors.SecondaryAccent',
      hex: '#3182CE',
    },
    {
      name: 'Primary Text',
      token: 'brandColors.PrimaryText',
      hex: '#2D3748',
    },
    {
      name: 'Primary Background',
      token: 'brandColors.PrimaryBackground',
      hex: '#FFFFFF',
      border: true,
    },
  ],
};

export const FunctionalTones = Template.bind({});
FunctionalTones.args = {
  title: 'Functional Color Tones',
  description: 'Semantic colors used for different states and purposes in the interface.',
  colors: [
    {
      name: 'Success',
      token: 'brandColors.Success',
      hex: '#38A169',
    },
    {
      name: 'Warning',
      token: 'brandColors.Warning',
      hex: '#D69E2E',
    },
    {
      name: 'Error',
      token: 'brandColors.Error',
      hex: '#E53E3E',
    },
    {
      name: 'Info',
      token: 'brandColors.Info',
      hex: '#3182CE',
    },
  ],
};

export const GrayScale = Template.bind({});
GrayScale.args = {
  title: 'Gray Scale',
  description: 'Neutral colors for backgrounds, borders, and subtle text elements.',
  colors: [
    {
      name: 'Gray Dark',
      token: 'brandColors.GrayDark',
      hex: '#4A5568',
    },
    {
      name: 'Gray Medium',
      token: 'brandColors.GrayMedium',
      hex: '#A0AEC0',
    },
    {
      name: 'Gray Light',
      token: 'brandColors.GrayLight',
      hex: '#E2E8F0',
    },
    {
      name: 'Secondary Background',
      token: 'brandColors.SecondaryBackground',
      hex: '#F7FAFC',
      border: true,
    },
  ],
};

export const WithBorders = Template.bind({});
WithBorders.args = {
  title: 'Light Colors with Borders',
  description: 'Light background colors that include visible borders for better definition.',
  colors: [
    {
      name: 'Primary Background',
      token: 'brandColors.PrimaryBackground',
      hex: '#FFFFFF',
      border: true,
    },
    {
      name: 'Secondary Background',
      token: 'brandColors.SecondaryBackground',
      hex: '#F7FAFC',
      border: true,
    },
    {
      name: 'Gray Light',
      token: 'brandColors.GrayLight',
      hex: '#E2E8F0',
      border: true,
    },
  ],
};

export const CustomPalette = Template.bind({});
CustomPalette.args = {
  title: 'Custom Color Palette',
  description: 'Example of how to use ColorDisplayTable with custom color data.',
  colors: [
    {
      name: 'Ocean Blue',
      token: 'customColors.oceanBlue',
      hex: '#0077BE',
    },
    {
      name: 'Forest Green',
      token: 'customColors.forestGreen',
      hex: '#228B22',
    },
    {
      name: 'Sunset Orange',
      token: 'customColors.sunsetOrange',
      hex: '#FF6347',
    },
    {
      name: 'Lavender Purple',
      token: 'customColors.lavenderPurple',
      hex: '#9370DB',
    },
  ],
};

CustomPalette.parameters = {
  docs: {
    description: {
      story: 'ColorDisplayTable provides a structured way to document and showcase color palettes with their corresponding design tokens and hex values. Essential for maintaining design consistency across teams.',
    },
  },
};
