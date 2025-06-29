import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { ExampleSection } from '../../molecules/ExampleSection/ExampleSection.jsx';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';
import Button from '../../atoms/Button/Button.jsx';

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



    return (
        <ExampleSection
            title="Buttons"
            commentary="Button styles are designed to create a clear visual hierarchy for user actions. These examples are now fully token-driven, using centralized typography, spacing, and color tokens."
        >
            <div className="space-y-8">
                <WithSnippet snippet={snippets.primary}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <Button variant="primary">Primary Action</Button>
                        <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for the main call to action.</p>
                    </div>
                </WithSnippet>
                <WithSnippet snippet={snippets.secondary}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <Button variant="secondary">Secondary Action</Button>
                        <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for alternative, less critical actions.</p>
                    </div>
                </WithSnippet>
                <WithSnippet snippet={snippets.destructive}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <Button variant="destructive">Destructive Action</Button>
                        <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Reserved for actions with irreversible consequences.</p>
                    </div>
                </WithSnippet>
                <WithSnippet snippet={snippets.disabled}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <Button variant="primary" disabled>Disabled Action</Button>
                        <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Indicates unavailable actions.</p>
                    </div>
                </WithSnippet>
            </div>
        </ExampleSection>
    );
};

export default Buttons;
