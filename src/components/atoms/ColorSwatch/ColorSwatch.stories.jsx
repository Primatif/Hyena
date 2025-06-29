import ColorSwatch from './ColorSwatch.jsx';
import { brandColors } from '../../../data/colors.js';

export default {
  title: 'Atoms/ColorSwatch',
  component: ColorSwatch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    showBorder: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export const Default = {
  args: {
    color: brandColors.PrimaryAccent,
    size: 'md',
  },
};

export const Small = {
  args: {
    color: brandColors.SecondaryAccent,
    size: 'sm',
  },
};

export const Large = {
  args: {
    color: brandColors.InfoBlue,
    size: 'lg',
  },
};

export const WithBorder = {
  args: {
    color: brandColors.PrimaryBackground,
    size: 'md',
    showBorder: true,
  },
};

export const Interactive = {
  args: {
    color: brandColors.SemanticSuccessGreen,
    size: 'md',
    onClick: () => alert('Color swatch clicked!'),
  },
};

export const BrandColorPalette = () => {
  // Helper to format color names for display
  const formatColorName = (key) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  // Organize colors by category
  const functionalTones = {
    PrimaryText: brandColors.PrimaryText,
    PrimaryBackground: brandColors.PrimaryBackground,
    SecondaryBackground: brandColors.SecondaryBackground,
    GrayDark: brandColors.GrayDark,
    GrayMid: brandColors.GrayMid,
    GrayLight: brandColors.GrayLight,
  };

  const brandColorsPrimary = {
    PrimaryAccent: brandColors.PrimaryAccent,
    PrimaryAccentDarker: brandColors.PrimaryAccentDarker,
    SecondaryAccent: brandColors.SecondaryAccent,
    AccentSkyBlue: brandColors.AccentSkyBlue,
    AccentDeepBlue: brandColors.AccentDeepBlue,
    TertiaryAccent: brandColors.TertiaryAccent,
  };

  const semanticColors = {
    SemanticSuccessGreen: brandColors.SemanticSuccessGreen,
    SemanticSuccessGreenLight: brandColors.SemanticSuccessGreenLight,
    ErrorRed: brandColors.ErrorRed,
    ErrorRedLight: brandColors.ErrorRedLight,
    WarningYellow: brandColors.WarningYellow,
    WarningYellowLight: brandColors.WarningYellowLight,
    InfoBlue: brandColors.InfoBlue,
    InfoBlueLight: brandColors.InfoBlueLight,
  };

  const referenceColors = {
    ReferenceBeige: brandColors.ReferenceBeige,
    ReferenceGold: brandColors.ReferenceGold,
    ReferenceMint: brandColors.ReferenceMint,
    ReferenceAmber: brandColors.ReferenceAmber,
    ReferenceOrange: brandColors.ReferenceOrange,
    ReferenceStone: brandColors.ReferenceStone,
    ReferenceTan: brandColors.ReferenceTan,
    ReferenceTeal: brandColors.ReferenceTeal,
    ReferenceOlive: brandColors.ReferenceOlive,
    ReferenceKhaki: brandColors.ReferenceKhaki,
    ReferenceCopper: brandColors.ReferenceCopper,
    ReferenceCharcoal: brandColors.ReferenceCharcoal,
    ReferenceBrown: brandColors.ReferenceBrown,
    ReferenceSlate: brandColors.ReferenceSlate,
    ReferenceDarkOlive: brandColors.ReferenceDarkOlive,
  };

  const renderColorSection = (title, colors) => (
    <div key={title} style={{ marginBottom: '2rem' }}>
      <h4 style={{ 
        fontSize: '1rem', 
        fontWeight: 'bold', 
        marginBottom: '1rem',
        color: brandColors.PrimaryText 
      }}>
        {title}
      </h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {Object.entries(colors).map(([key, color]) => (
          <div key={key} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '0.5rem',
            minWidth: '120px'
          }}>
            <ColorSwatch color={color} size='md' />
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '0.75rem', 
                fontWeight: '500',
                color: brandColors.PrimaryText 
              }}>
                {formatColorName(key)}
              </div>
              <div style={{ 
                fontSize: '0.625rem', 
                color: brandColors.GrayMid,
                fontFamily: 'monospace' 
              }}>
                {color}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '1000px' }}>
      {renderColorSection('Functional Tones', functionalTones)}
      {renderColorSection('Brand Colors', brandColorsPrimary)}
      {renderColorSection('Semantic Colors', semanticColors)}
      {renderColorSection('Reference Palette', referenceColors)}
    </div>
  );
};

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <ColorSwatch color={brandColors.PrimaryAccent} size='sm' />
      <span style={{ fontSize: '0.75rem' }}>Small</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <ColorSwatch color={brandColors.PrimaryAccent} size='md' />
      <span style={{ fontSize: '0.75rem' }}>Medium</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <ColorSwatch color={brandColors.PrimaryAccent} size='lg' />
      <span style={{ fontSize: '0.75rem' }}>Large</span>
    </div>
  </div>
);
