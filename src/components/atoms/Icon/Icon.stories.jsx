import Icon from './Icon.jsx';
import { brandColors } from '../../../data/colors.js';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'danger', 'usage', 'chevron-right', 'chevron-down', 'user', 'settings'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Info = {
  args: {
    name: 'info',
    size: 'md',
    color: brandColors.InfoBlue,
  },
};

export const Success = {
  args: {
    name: 'success',
    size: 'md',
    color: brandColors.SemanticSuccessGreen,
  },
};

export const Warning = {
  args: {
    name: 'warning',
    size: 'md',
    color: brandColors.WarningYellow,
  },
};

export const Danger = {
  args: {
    name: 'danger',
    size: 'md',
    color: brandColors.ErrorRed,
  },
};

export const Usage = {
  args: {
    name: 'usage',
    size: 'md',
    color: brandColors.NeutralGray,
  },
};

export const Small = {
  args: {
    name: 'info',
    size: 'sm',
    color: brandColors.PrimaryAccent,
  },
};

export const Large = {
  args: {
    name: 'info',
    size: 'lg',
    color: brandColors.PrimaryAccent,
  },
};

export const CustomColor = {
  args: {
    name: 'success',
    size: 'md',
    color: '#ff6b6b',
  },
};

export const AllSemanticIcons = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='info' size='md' color={brandColors.InfoBlue} />
      <span style={{ fontSize: '0.75rem', textAlign: 'center' }}>Info</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='success' size='md' color={brandColors.SemanticSuccessGreen} />
      <span style={{ fontSize: '0.75rem', textAlign: 'center' }}>Success</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='warning' size='md' color={brandColors.WarningYellow} />
      <span style={{ fontSize: '0.75rem', textAlign: 'center' }}>Warning</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='danger' size='md' color={brandColors.ErrorRed} />
      <span style={{ fontSize: '0.75rem', textAlign: 'center' }}>Danger</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='usage' size='md' color={brandColors.NeutralGray} />
      <span style={{ fontSize: '0.75rem', textAlign: 'center' }}>Usage</span>
    </div>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='info' size='sm' color={brandColors.InfoBlue} />
      <span style={{ fontSize: '0.75rem' }}>Small</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='info' size='md' color={brandColors.InfoBlue} />
      <span style={{ fontSize: '0.75rem' }}>Medium</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='info' size='lg' color={brandColors.InfoBlue} />
      <span style={{ fontSize: '0.75rem' }}>Large</span>
    </div>
  </div>
);

export const InContext = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='info' size='sm' color={brandColors.InfoBlue} />
      <span>Informational message with icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='success' size='sm' color={brandColors.SemanticSuccessGreen} />
      <span>Success notification with icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name='warning' size='sm' color={brandColors.WarningYellow} />
      <span>Warning alert with icon</span>
    </div>
  </div>
);
