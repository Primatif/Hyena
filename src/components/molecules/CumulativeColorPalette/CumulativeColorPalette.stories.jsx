import React from 'react';
import CumulativeColorPalette from './CumulativeColorPalette.jsx';

export default {
  title: 'Molecules/CumulativeColorPalette',
  component: CumulativeColorPalette,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    imageProfiles: {
      control: 'object',
      description: 'Array of image profile objects containing swatch colors to aggregate',
    },
  },
};

const Template = (args) => <CumulativeColorPalette {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageProfiles: [
    {
      name: 'Brand Image 1',
      swatchColors: ['#E53E3E', '#3182CE', '#2D3748', '#E2E8F0', '#4A5568'],
    },
    {
      name: 'Brand Image 2',
      swatchColors: ['#E53E3E', '#38A169', '#D69E2E', '#805AD5', '#F7FAFC'],
    },
    {
      name: 'Brand Image 3',
      swatchColors: ['#3182CE', '#2D3748', '#DD6B20', '#9F7AEA', '#68D391'],
    },
  ],
};

export const LargeDataset = Template.bind({});
LargeDataset.args = {
  imageProfiles: [
    {
      name: 'Photo Set 1',
      swatchColors: ['#E53E3E', '#C53030', '#9B2C2C', '#742A2A', '#822727'],
    },
    {
      name: 'Photo Set 2',
      swatchColors: ['#3182CE', '#2C5AA0', '#2A69AC', '#1E4A8C', '#2B6CB0'],
    },
    {
      name: 'Photo Set 3',
      swatchColors: ['#38A169', '#2F855A', '#276749', '#22543D', '#25855A'],
    },
    {
      name: 'Photo Set 4',
      swatchColors: ['#D69E2E', '#B7791F', '#975A16', '#744210', '#A16207'],
    },
    {
      name: 'Photo Set 5',
      swatchColors: ['#805AD5', '#6B46C1', '#553C9A', '#44337A', '#5B21B6'],
    },
    {
      name: 'Photo Set 6',
      swatchColors: ['#DD6B20', '#C05621', '#9C4221', '#7C2D12', '#B45309'],
    },
  ],
};

export const MinimalColors = Template.bind({});
MinimalColors.args = {
  imageProfiles: [
    {
      name: 'Monochrome Image',
      swatchColors: ['#000000', '#FFFFFF', '#808080'],
    },
    {
      name: 'Brand Colors Only',
      swatchColors: ['#E53E3E', '#3182CE'],
    },
  ],
};

export const SimilarColors = Template.bind({});
SimilarColors.args = {
  imageProfiles: [
    {
      name: 'Red Variations',
      swatchColors: ['#E53E3E', '#E74C3C', '#DC2626', '#EF4444', '#F87171', '#FCA5A5'],
    },
    {
      name: 'Blue Variations',
      swatchColors: ['#3182CE', '#2563EB', '#1D4ED8', '#3B82F6', '#60A5FA', '#93C5FD'],
    },
  ],
};

export const NoData = Template.bind({});
NoData.args = {
  imageProfiles: null,
};

export const EmptyProfiles = Template.bind({});
EmptyProfiles.args = {
  imageProfiles: [
    {
      name: 'Empty Profile 1',
      swatchColors: [],
    },
    {
      name: 'Empty Profile 2',
      swatchColors: null,
    },
  ],
};

export const BrandPalette = Template.bind({});
BrandPalette.args = {
  imageProfiles: [
    {
      name: 'Primary Brand Assets',
      swatchColors: ['#E53E3E', '#3182CE', '#FFFFFF', '#2D3748', '#F7FAFC'],
    },
    {
      name: 'Secondary Brand Assets',
      swatchColors: ['#38A169', '#D69E2E', '#805AD5', '#DD6B20', '#E2E8F0'],
    },
    {
      name: 'Marketing Materials',
      swatchColors: ['#E53E3E', '#3182CE', '#4A5568', '#A0AEC0', '#CBD5E0'],
    },
  ],
};

BrandPalette.parameters = {
  docs: {
    description: {
      story: 'CumulativeColorPalette aggregates swatch colors from multiple image profiles and displays the most distinct colors, helping identify dominant color themes across a collection of brand assets.',
    },
  },
};
