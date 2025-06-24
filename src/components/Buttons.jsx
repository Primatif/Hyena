import React from 'react';
import { brandColors } from '../data/colors.js';
import { typography } from '../data/typography.js';
import { spacing } from '../data/spacing.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

const Buttons = () => {
    const snippets = {
        primary: (
            <ul>
                <li><strong>Purpose:</strong> The primary button is used for the most important call to action on a page.</li>
                <li><strong>Tokens Used:</strong>
                    <ul>
                        <li><strong>Typography:</strong> <code>typography.button</code></li>
                        <li><strong>Padding:</strong> <code>spacing.sm</code> (vertical), <code>spacing.lg</code> (horizontal)</li>
                        <li><strong>Background:</strong> <code>brandColors.SecondaryAccent</code></li>
                        <li><strong>Text Color:</strong> <code>brandColors.PrimaryBackground</code></li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> A base style object combines typography and spacing tokens. The primary button style overrides colors.</li>
            </ul>
        ),
        secondary: (
            <ul>
                <li><strong>Purpose:</strong> Used for secondary, less critical actions.</li>
                <li><strong>Tokens Used:</strong>
                    <ul>
                        <li><strong>Typography:</strong> <code>typography.button</code></li>
                        <li><strong>Padding:</strong> <code>spacing.sm</code> (vertical), <code>spacing.lg</code> (horizontal)</li>
                        <li><strong>Border:</strong> <code>1px solid brandColors.GrayMid</code></li>
                        <li><strong>Text Color:</strong> <code>brandColors.PrimaryText</code></li>
                    </ul>
                </li>
            </ul>
        ),
        destructive: (
            <ul>
                <li><strong>Purpose:</strong> Reserved for actions that result in data loss or other irreversible consequences.</li>
                <li><strong>Tokens Used:</strong>
                    <ul>
                        <li><strong>Typography:</strong> <code>typography.button</code></li>
                        <li><strong>Padding:</strong> <code>spacing.sm</code> (vertical), <code>spacing.lg</code> (horizontal)</li>
                        <li><strong>Background:</strong> <code>brandColors.PrimaryAccent</code></li>
                        <li><strong>Text Color:</strong> <code>brandColors.PrimaryBackground</code></li>
                    </ul>
                </li>
            </ul>
        ),
        disabled: (
            <ul>
                <li><strong>Purpose:</strong> To indicate that an action is currently unavailable.</li>
                <li><strong>Tokens Used:</strong>
                    <ul>
                        <li><strong>Typography:</strong> <code>typography.button</code></li>
                        <li><strong>Padding:</strong> <code>spacing.sm</code> (vertical), <code>spacing.lg</code> (horizontal)</li>
                        <li><strong>Background:</strong> <code>brandColors.GrayLight</code></li>
                        <li><strong>Text Color:</strong> <code>brandColors.GrayMid</code></li>
                    </ul>
                </li>
            </ul>
        ),
    };

    const baseButtonStyle = {
        ...typography.button,
        padding: `${spacing.sm} ${spacing.lg}`,
        borderRadius: '0.5rem', // Corresponds to rounded-lg
        border: 'none',
        cursor: 'pointer',
    };

    const primaryButtonStyle = {
        ...baseButtonStyle,
        backgroundColor: brandColors.SecondaryAccent,
        color: brandColors.PrimaryBackground,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Corresponds to shadow-md
    };

    const secondaryButtonStyle = {
        ...baseButtonStyle,
        backgroundColor: 'transparent',
        color: brandColors.PrimaryText,
        border: `1px solid ${brandColors.GrayMid}`,
    };

    const destructiveButtonStyle = {
        ...baseButtonStyle,
        backgroundColor: brandColors.PrimaryAccent,
        color: brandColors.PrimaryBackground,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Corresponds to shadow-md
    };

    const disabledButtonStyle = {
        ...baseButtonStyle,
        backgroundColor: brandColors.GrayLight,
        color: brandColors.GrayMid,
        cursor: 'not-allowed',
    };

    return (
        <ExampleSection
            title="Buttons"
            commentary="Button styles are designed to create a clear visual hierarchy for user actions. These examples are now fully token-driven, using centralized typography, spacing, and color tokens."
        >
            <div className="space-y-8">
                <WithSnippet snippet={snippets.primary}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <button style={primaryButtonStyle}>Primary Action</button>
                        <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for the main call to action.</p>
                    </div>
                </WithSnippet>
                <WithSnippet snippet={snippets.secondary}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <button style={secondaryButtonStyle}>Secondary Action</button>
                        <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for alternative, less critical actions.</p>
                    </div>
                </WithSnippet>
                <WithSnippet snippet={snippets.destructive}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <button style={destructiveButtonStyle}>Destructive Action</button>
                        <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for actions that cannot be undone.</p>
                    </div>
                </WithSnippet>
                <WithSnippet snippet={snippets.disabled}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <button style={disabledButtonStyle} disabled>Disabled Action</button>
                        <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for actions that are not currently available.</p>
                    </div>
                </WithSnippet>
            </div>
        </ExampleSection>
    );
};

export default Buttons;
