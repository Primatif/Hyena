import React from 'react';
import { brandColors } from '../data/colors.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

const Buttons = () => {
    const snippets = {
        primary: (
            <ul>
                <li><strong>Purpose:</strong> The primary button is used for the most important call to action on a page. It should have the highest visual weight to guide the user toward the intended action.</li>
                <li><strong>Visual Style:</strong>
                    <ul>
                        <li><strong>Background:</strong> Solid fill using <code>brandColors.SecondaryAccent</code> for high visibility.</li>
                        <li><strong>Text:</strong> White (<code>#FFFFFF</code>) for maximum contrast, styled as <code>font-semibold</code>.</li>
                        <li><strong>Shape & Shadow:</strong> A soft <code>rounded-lg</code> shape with a <code>shadow-md</code> to lift it off the page.</li>
                    </ul>
                </li>
                <li><strong>States (Design Intent):</strong>
                    <ul>
                        <li><strong>Hover:</strong> The background should darken slightly to provide feedback.</li>
                        <li><strong>Active/Pressed:</strong> The shadow should be removed or reduced to indicate it is being pressed.</li>
                        <li><strong>Disabled:</strong> The background should be a muted gray (e.g., <code>GrayLight</code>) with lighter text (e.g., <code>GrayMid</code>) to indicate it's not interactive.</li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> Uses TailwindCSS for padding (<code>px-5 py-2</code>) and shape, with inline styles for colors to ensure adherence to design tokens.</li>
            </ul>
        ),
        secondary: (
            <ul>
                <li><strong>Purpose:</strong> Used for secondary, less critical actions. It provides an alternative to the primary action without competing for attention.</li>
                <li><strong>Visual Style:</strong>
                    <ul>
                        <li><strong>Background:</strong> Transparent, making it a "ghost" button.</li>
                        <li><strong>Text:</strong> Uses <code>brandColors.PrimaryText</code> for readability.</li>
                        <li><strong>Border:</strong> A <code>1px</code> solid border using <code>brandColors.GrayMid</code> provides a clear boundary without high visual weight.</li>
                        <li><strong>Shape:</strong> A soft <code>rounded-lg</code> shape. No shadow.</li>
                    </ul>
                </li>
                <li><strong>States (Design Intent):</strong>
                    <ul>
                        <li><strong>Hover:</strong> The background should fill with a highly transparent version of an accent color (e.g., <code>hexToRgba(brandColors.SecondaryAccent, 0.1)</code>) to indicate interactivity.</li>
                        <li><strong>Active/Pressed:</strong> The background fill should become slightly more opaque.</li>
                        <li><strong>Disabled:</strong> The border and text colors should be muted (e.g., <code>GrayLight</code>) to indicate it's not interactive.</li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> Uses a combination of TailwindCSS and inline styles for border and text color.</li>
            </ul>
        ),
        destructive: (
            <ul>
                <li><strong>Purpose:</strong> Reserved for actions that result in data loss or other irreversible consequences (e.g., "Delete," "Remove"). Its color immediately signals caution.</li>
                <li><strong>Visual Style:</strong>
                    <ul>
                        <li><strong>Background:</strong> Solid fill using <code>brandColors.PrimaryAccent</code> (a semantic red) to communicate danger.</li>
                        <li><strong>Text:</strong> White (<code>#FFFFFF</code>) for high contrast.</li>
                        <li><strong>Shape & Shadow:</strong> A soft <code>rounded-lg</code> shape with a <code>shadow-md</code>, consistent with the primary button.</li>
                    </ul>
                </li>
                <li><strong>States (Design Intent):</strong>
                    <ul>
                        <li><strong>Hover:</strong> The background should darken to a deeper red to provide feedback.</li>
                        <li><strong>Active/Pressed:</strong> The shadow should be removed or reduced.</li>
                        <li><strong>Disabled:</strong> The background should be a muted, lighter red with muted text to indicate it's not interactive.</li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> Structurally identical to the primary button but uses the destructive color token for its background.</li>
            </ul>
        ),
        disabled: (
            <ul>
                <li><strong>Purpose:</strong> To indicate that an action is currently unavailable. The styling ensures it is visually distinct from active buttons and not interactive.</li>
                <li><strong>Visual Style:</strong>
                    <ul>
                        <li><strong>Background:</strong> A muted gray (<code>brandColors.GrayLight</code>) to visually recede and indicate a non-interactive state.</li>
                        <li><strong>Text:</strong> A darker gray (<code>brandColors.GrayMid</code>) that is readable but has lower contrast than active buttons.</li>
                        <li><strong>Shape & Shadow:</strong> A soft <code>rounded-lg</code> shape consistent with other buttons, but with no shadow to appear flat and inactive.</li>
                        <li><strong>Cursor:</strong> The <code>cursor-not-allowed</code> utility is applied to provide an immediate browser-level cue that the button cannot be clicked.</li>
                    </ul>
                </li>
                <li><strong>Implementation:</strong> The button has the <code>disabled</code> HTML attribute, which prevents clicks and focus. Styling is applied via a mix of TailwindCSS and inline styles for colors.</li>
            </ul>
        ),
    };

    return (
    <ExampleSection 
        title="Buttons" 
        commentary="Button styles are designed to create a clear visual hierarchy for user actions. The primary button should be used for the most important action on a page, while secondary and destructive buttons offer clear alternatives."
    >
        <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Buttons are used for primary actions, secondary options, and destructive operations.</p>
         <div className="space-y-8">
            <WithSnippet snippet={snippets.primary}>
                <div className="flex flex-col items-center justify-center h-full">
                    <button className="px-5 py-2 rounded-lg text-white font-semibold shadow-md" style={{backgroundColor: brandColors.SecondaryAccent}}>Primary Action</button>
                    <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for the main call to action.</p>
                </div>
            </WithSnippet>
            <WithSnippet snippet={snippets.secondary}>
                 <div className="flex flex-col items-center justify-center h-full">
                    <button className="px-5 py-2 rounded-lg font-semibold border" style={{color: brandColors.PrimaryText, borderColor: brandColors.GrayMid}}>Secondary Action</button>
                    <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for alternative, less critical actions.</p>
                </div>
            </WithSnippet>
            <WithSnippet snippet={snippets.destructive}>
                 <div className="flex flex-col items-center justify-center h-full">
                    <button className="px-5 py-2 rounded-lg text-white font-semibold shadow-md" style={{backgroundColor: brandColors.PrimaryAccent}}>Destructive Action</button>
                    <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for actions that cannot be undone.</p>
                </div>
            </WithSnippet>
            <WithSnippet snippet={snippets.disabled}>
                 <div className="flex flex-col items-center justify-center h-full">
                    <button disabled className="px-5 py-2 rounded-lg font-semibold cursor-not-allowed" style={{backgroundColor: brandColors.GrayLight, color: brandColors.GrayMid}}>Disabled Action</button>
                    <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for actions that are not currently available.</p>
                </div>
            </WithSnippet>
        </div>
    </ExampleSection>
);
};

export default Buttons;
