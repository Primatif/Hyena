import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { ExampleSection } from '../../molecules/ExampleSection/ExampleSection.jsx';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';
import Callout from '../../molecules/Callout/Callout.jsx';

const Callouts = () => {
    const snippets = {
        info: (
            <ul>
                <li><strong>Semantic Purpose:</strong> To provide helpful, non-critical tips or contextual information that guides the user.</li>
                <li><strong>Layout & Structure:</strong> A flex container with an icon on the left (<code>flex-shrink-0</code>) and a text block on the right (<code>flex-grow</code>) that contains the title and body.</li>
                <li><strong>Color & Styling (Glassmorphism):</strong>
                    <ul>
                        <li><strong>Background:</strong> A semi-transparent background using <code>hexToRgba(brandColors.InfoBlueLight, 0.3)</code> combined with a <code>backdrop-blur-xl</code> effect.</li>
                        <li><strong>Border:</strong> A soft, semi-transparent border using <code>hexToRgba(brandColors.InfoBlue, 0.5)</code>.</li>
                        <li><strong>Icon & Title:</strong> Both use <code>brandColors.SecondaryAccent</code> to create a strong visual link.</li>
                        <li><strong>Body Text:</strong> Uses a semi-transparent version of <code>brandColors.PrimaryText</code> for a softer look against the blurred background.</li>
                    </ul>
                </li>
                <li><strong>Key Implementation Details:</strong> The component uses a shared <code>Callout</code> structure, with styles dynamically applied based on the <code>type</code> prop. A subtle <code>hover:scale-105</code> transform provides interactive feedback.</li>
            </ul>
        ),
        success: (
            <ul>
                <li><strong>Semantic Purpose:</strong> To confirm a successful action, such as saving data or completing a process.</li>
                <li><strong>Layout & Structure:</strong> Follows the same icon-left, text-right flexbox structure as the info callout.</li>
                <li><strong>Color & Styling (Glassmorphism):</strong>
                    <ul>
                        <li><strong>Background:</strong> Uses <code>hexToRgba(brandColors.SemanticSuccessGreenLight, 0.3)</code> with a <code>backdrop-blur-xl</code>.</li>
                        <li><strong>Border:</strong> Uses <code>hexToRgba(brandColors.SemanticSuccessGreen, 0.5)</code>.</li>
                        <li><strong>Icon & Title:</strong> Both use the strong <code>brandColors.SemanticSuccessGreen</code> to clearly communicate success.</li>
                        <li><strong>Body Text:</strong> Uses semi-transparent <code>brandColors.PrimaryText</code>.</li>
                    </ul>
                </li>
                <li><strong>Key Implementation Details:</strong> Leverages the same dynamic <code>Callout</code> component, with the <code>type="success"</code> prop triggering the green color theme.</li>
            </ul>
        ),
        warning: (
            <ul>
                <li><strong>Semantic Purpose:</strong> To warn users about a potential issue or an action that might have unintended consequences.</li>
                <li><strong>Layout & Structure:</strong> Follows the same icon-left, text-right flexbox structure.</li>
                <li><strong>Color & Styling (Glassmorphism):</strong>
                    <ul>
                        <li><strong>Background:</strong> Uses <code>hexToRgba(brandColors.WarningYellowLight, 0.3)</code> with a <code>backdrop-blur-xl</code>.</li>
                        <li><strong>Border:</strong> Uses <code>hexToRgba(brandColors.WarningYellow, 0.5)</code>.</li>
                        <li><strong>Icon & Title:</strong> Both use yellow tones (<code>brandColors.WarningYellow</code> and a custom darker yellow <code>#e5a000</code> for title contrast) to signal caution.</li>
                        <li><strong>Body Text:</strong> Uses semi-transparent <code>brandColors.PrimaryText</code>.</li>
                    </ul>
                </li>
                <li><strong>Key Implementation Details:</strong> The <code>type="warning"</code> prop activates the yellow color theme for cautionary messaging.</li>
            </ul>
        ),
        danger: (
            <ul>
                <li><strong>Semantic Purpose:</strong> To alert users to a critical error, a failed action, or a destructive operation that cannot be undone.</li>
                <li><strong>Layout & Structure:</strong> Follows the same icon-left, text-right flexbox structure.</li>
                <li><strong>Color & Styling (Glassmorphism):</strong>
                    <ul>
                        <li><strong>Background:</strong> Uses <code>hexToRgba(brandColors.PrimaryAccentLight, 0.3)</code> with a <code>backdrop-blur-xl</code>.</li>
                        <li><strong>Border:</strong> Uses <code>hexToRgba(brandColors.PrimaryAccent, 0.5)</code>.</li>
                        <li><strong>Icon & Title:</strong> Both use the strong <code>brandColors.PrimaryAccent</code> to clearly communicate danger.</li>
                        <li><strong>Body Text:</strong> Uses semi-transparent <code>brandColors.PrimaryText</code>.</li>
                    </ul>
                </li>
                <li><strong>Key Implementation Details:</strong> The <code>type="danger"</code> prop activates the red color theme for critical alerts.</li>
            </ul>
        ),
        usage: (
            <ul>
                <li><strong>Semantic Purpose:</strong> To provide usage guidance, best practices, or contextual help without urgency.</li>
                <li><strong>Layout & Structure:</strong> Follows the same icon-left, text-right flexbox structure.</li>
                <li><strong>Color & Styling (Glassmorphism):</strong>
                    <ul>
                        <li><strong>Background:</strong> Uses <code>hexToRgba(brandColors.NeutralGrayLight, 0.3)</code> with a <code>backdrop-blur-xl</code>.</li>
                        <li><strong>Border:</strong> Uses <code>hexToRgba(brandColors.NeutralGray, 0.5)</code>.</li>
                        <li><strong>Icon & Title:</strong> Both use neutral gray tones to convey a sense of guidance.</li>
                        <li><strong>Body Text:</strong> Uses semi-transparent <code>brandColors.PrimaryText</code>.</li>
                    </ul>
                </li>
                <li><strong>Key Implementation Details:</strong> The <code>type="usage"</code> prop activates the neutral gray color theme, providing a subtle yet clear visual cue for guidance.</li>
            </ul>
        ),
    };

    return (
        <ExampleSection
            title="Callouts"
            commentary="Use callouts to bring attention to important information. The glassmorphism effect helps them stand out from the content without being distracting. Each type has a distinct color and icon to convey its purpose at a glance."
            patternedBackground={true}
        >
            <div className="space-y-8">
                <WithSnippet snippet={snippets.info}>
                    <Callout type="info" title="Informational Tip">
                        This is an informational message. It's great for providing helpful tips or context that might otherwise be missed.
                    </Callout>
                </WithSnippet>
                <WithSnippet snippet={snippets.success}>
                    <Callout type="success" title="Success!">
                        The operation completed successfully. Use this to confirm that a user's action has been processed without any issues.
                    </Callout>
                </WithSnippet>
                <WithSnippet snippet={snippets.warning}>
                     <Callout type="warning" title="Warning">
                        Please be cautious. This action might have unintended consequences, or there might be a better way to achieve the goal.
                    </Callout>
                </WithSnippet>
                <WithSnippet snippet={snippets.danger}>
                    <Callout type="danger" title="Danger Zone">
                        This is a critical alert. This action is not reversible and may result in permanent data loss or security vulnerabilities.
                    </Callout>
                </WithSnippet>
                <WithSnippet snippet={snippets.usage}>
                    <Callout type="usage" title="Usage Guidance">
                        This is a guidance callout. It's perfect for providing best practices, usage philosophy, or additional context that helps users make informed decisions.
                    </Callout>
                </WithSnippet>
            </div>
        </ExampleSection>
    );
};

export { Callout };
export default Callouts;
