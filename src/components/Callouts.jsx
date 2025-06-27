import React from 'react';
import { brandColors } from '../data/colors.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

// --- Icon Components ---
const Icon = ({ type }) => {
  const icons = {
    info: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    success: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    warning: (
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    ),
    danger: (
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
      </svg>
    ),
    usage: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    ),
  };
  return icons[type] || null;
};

// Helper to convert hex to rgba
const hexToRgba = (hex, alpha = 1) => {
    if (!hex) return `rgba(0,0,0,${alpha})`;
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// --- Callout Component ---
const Callout = ({ type = 'info', title, children }) => {
  const baseClasses = "w-full p-6 transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-xl rounded-2xl shadow-lg flex items-start space-x-4 border";
  
  const typeStyles = {
    info: {
      container: {
        backgroundColor: hexToRgba(brandColors.InfoBlueLight, 0.3),
        borderColor: hexToRgba(brandColors.InfoBlue, 0.5),
      },
      icon: { color: brandColors.SecondaryAccent },
      title: { color: brandColors.SecondaryAccent },
      text: { color: hexToRgba(brandColors.PrimaryText, 0.7) },
    },
    success: {
      container: {
        backgroundColor: hexToRgba(brandColors.SemanticSuccessGreenLight, 0.3),
        borderColor: hexToRgba(brandColors.SemanticSuccessGreen, 0.5),
      },
      icon: { color: brandColors.SemanticSuccessGreen },
      title: { color: brandColors.SemanticSuccessGreen },
      text: { color: hexToRgba(brandColors.PrimaryText, 0.7) },
    },
    warning: {
      container: {
        backgroundColor: hexToRgba(brandColors.WarningYellowLight, 0.3),
        borderColor: hexToRgba(brandColors.WarningYellow, 0.5),
      },
      icon: { color: brandColors.WarningYellow },
      title: { color: '#e5a000' }, // Using specified darker yellow for contrast
      text: { color: hexToRgba(brandColors.PrimaryText, 0.7) },
    },
    danger: {
      container: {
        backgroundColor: hexToRgba(brandColors.ErrorRedLight, 0.3),
        borderColor: hexToRgba(brandColors.ErrorRed, 0.5),
      },
      icon: { color: brandColors.ErrorRed },
      title: { color: brandColors.ErrorRed },
      text: { color: hexToRgba(brandColors.PrimaryText, 0.7) },
    },
    usage: {
      container: {
        backgroundColor: hexToRgba(brandColors.NeutralGrayLight, 0.3),
        borderColor: hexToRgba(brandColors.NeutralGray, 0.5),
      },
      icon: { color: brandColors.NeutralGray },
      title: { color: brandColors.NeutralGray },
      text: { color: hexToRgba(brandColors.PrimaryText, 0.7) },
    },
  };

  const styles = typeStyles[type];

  return (
    <div className={baseClasses} style={styles.container}>
      <div className="flex-shrink-0" style={styles.icon}>
        <Icon type={type} />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg" style={styles.title}>{title}</h3>
        <div className="mt-1 text-sm" style={styles.text}>
          {children}
        </div>
      </div>
    </div>
  );
};

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
                <li><strong>Key Implementation Details:</strong> The <code>type="warning"</code> prop activates the yellow color theme. Note the custom darker yellow for the title, a specific design choice to ensure readability.</li>
            </ul>
        ),
        danger: (
            <ul>
                <li><strong>Semantic Purpose:</strong> To alert users to a critical error, a failed action, or a destructive operation that cannot be undone.</li>
                <li><strong>Layout & Structure:</strong> Follows the same icon-left, text-right flexbox structure.</li>
                <li><strong>Color & Styling (Glassmorphism):</strong>
                    <ul>
                        <li><strong>Background:</strong> Uses <code>hexToRgba(brandColors.ErrorRedLight, 0.3)</code> with a <code>backdrop-blur-xl</code>.</li>
                        <li><strong>Border:</strong> Uses <code>hexToRgba(brandColors.ErrorRed, 0.5)</code>.</li>
                        <li><strong>Icon & Title:</strong> Both use the strong <code>brandColors.ErrorRed</code> to immediately convey a sense of danger or failure.</li>
                        <li><strong>Body Text:</strong> Uses semi-transparent <code>brandColors.PrimaryText</code>.</li>
                    </ul>
                </li>
                <li><strong>Key Implementation Details:</strong> The <code>type="danger"</code> prop activates the red color theme, providing an unmissable visual cue to the user.</li>
            </ul>
        ),
        usage: (
            <ul>
                <li><strong>Semantic Purpose:</strong> To provide guidance on usage philosophy and best practices.</li>
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
