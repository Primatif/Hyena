import React from 'react';
import ColorProfile from './ColorProfile.jsx';

export default {
  title: 'Molecules/ColorProfile',
  component: ColorProfile,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    colorProfiles: {
      control: 'object',
      description: 'Array of color objects with color and proportion properties for histogram display',
    },
    swatchColors: {
      control: 'object',
      description: 'Array of color hex values to display as individual swatches',
    },
  },
};

const Template = (args) => <ColorProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorProfiles: [
    { color: '#E53E3E', proportion: 0.4 },
    { color: '#3182CE', proportion: 0.3 },
    { color: '#2D3748', proportion: 0.2 },
    { color: '#E2E8F0', proportion: 0.1 },
  ],
  swatchColors: ['#E53E3E', '#3182CE', '#2D3748', '#E2E8F0'],
};

export const BrandColors = Template.bind({});
BrandColors.args = {
  colorProfiles: [
    { color: '#E53E3E', proportion: 0.35 },
    { color: '#3182CE', proportion: 0.25 },
    { color: '#FFFFFF', proportion: 0.25 },
    { color: '#2D3748', proportion: 0.15 },
  ],
  swatchColors: ['#E53E3E', '#3182CE', '#FFFFFF', '#2D3748', '#4A5568', '#E2E8F0'],
};

export const MonochromaticPalette = Template.bind({});
MonochromaticPalette.args = {
  colorProfiles: [
    { color: '#2D3748', proportion: 0.3 },
    { color: '#4A5568', proportion: 0.25 },
    { color: '#718096', proportion: 0.2 },
    { color: '#A0AEC0', proportion: 0.15 },
    { color: '#E2E8F0', proportion: 0.1 },
  ],
  swatchColors: ['#2D3748', '#4A5568', '#718096', '#A0AEC0', '#E2E8F0', '#F7FAFC'],
};

export const AnalogousPalette = Template.bind({});
AnalogousPalette.args = {
  colorProfiles: [
    { color: '#E53E3E', proportion: 0.3 },
    { color: '#FD7F2B', proportion: 0.25 },
    { color: '#F6E05E', proportion: 0.2 },
    { color: '#68D391', proportion: 0.15 },
    { color: '#4FD1C7', proportion: 0.1 },
  ],
  swatchColors: ['#E53E3E', '#FD7F2B', '#F6E05E', '#68D391', '#4FD1C7', '#63B3ED'],
};

export const HighContrastPalette = Template.bind({});
HighContrastPalette.args = {
  colorProfiles: [
    { color: '#000000', proportion: 0.4 },
    { color: '#FFFFFF', proportion: 0.3 },
    { color: '#E53E3E', proportion: 0.2 },
    { color: '#3182CE', proportion: 0.1 },
  ],
  swatchColors: ['#000000', '#FFFFFF', '#E53E3E', '#3182CE'],
};

export const OnlySwatches = Template.bind({});
OnlySwatches.args = {
  colorProfiles: [
    { color: '#E53E3E', proportion: 1.0 },
  ],
  swatchColors: ['#E53E3E', '#3182CE', '#38A169', '#D69E2E', '#805AD5', '#DD6B20'],
};

export const Loading = Template.bind({});
Loading.args = {
  colorProfiles: null,
  swatchColors: null,
};

Loading.parameters = {
  docs: {
    description: {
      story: 'ColorProfile visualizes color distribution through both histogram bars and individual swatches, providing an intuitive way to understand color usage patterns and palettes.',
    },
  },
};
