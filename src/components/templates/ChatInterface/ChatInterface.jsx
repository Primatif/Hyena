import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';
import { hexToRgba } from '../../../data/utils.js';
import { patterns, patternSizes } from '../../../data/patterns.js';

const ChatInterface = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A static example of a modern AI chat interface, demonstrating a split-panel layout, message history, and user input controls.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li>A main container with a <code>rounded-lg</code> border and <code>shadow-lg</code>, using <code>SecondaryBackground</code>.</li>
                    <li>A flexible (<code>flex</code>) split-panel layout with a fixed height of <code>h-96</code>.</li>
                    <li><strong>Left Navigation Panel (25% width):</strong>
                        <ul>
                            <li>Styled with <code>PrimaryBackground</code> and the <code>patterns.subtle</code> overlay for texture.</li>
                            <li>A <code>border-r</code> separates it from the content area, using <code>GrayLight</code>.</li>
                            <li>Contains the app logo and navigation links. Padding is <code>p-4</code>.</li>
                        </ul>
                    </li>
                    <li><strong>Right Content Panel (75% width):</strong>
                        <ul>
                            <li>Contains the message display area and the text input form.</li>
                            <li>Uses flexbox with <code>flex-col</code> to stack the message area above the input form.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><strong>Color & Styling:</strong>
                <ul>
                    <li><strong>Navigation:</strong> The active link ('New Chat') has a background of <code>SecondaryAccent</code> at 80% opacity (<code>hexToRgba(brandColors.SecondaryAccent, 0.8)</code>) and text color <code>AccentDeepBlue</code>. Inactive links use <code>GrayDark</code>.</li>
                    <li><strong>Message Bubbles:</strong> User messages have an <code>AccentSkyBlue</code> background. AI responses have a <code>PrimaryBackground</code> with a <code>GrayLight</code> border. Both have <code>rounded-lg</code> corners.</li>
                    <li><strong>Input Area:</strong> The text input has a <code>GrayLight</code> border. The 'Send' button uses <code>SecondaryAccent</code> for its background and <code>PrimaryBackground</code> for the text color.</li>
                </ul>
            </li>
            <li><strong>Typography:</strong>
                <ul>
                    <li>The app title "PRIMATIF AI" uses the <code>appLogo</code> style from <code>typography.js</code>.</li>
                    <li>Navigation links use <code>font-semibold</code>.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>The <code>hexToRgba</code> utility function is used to apply transparency to the active navigation link's background color, ensuring it blends with the patterned background.</li>
                    <li>The layout relies heavily on Tailwind CSS for spacing, flexbox, and borders, combined with inline styles for token-based colors and typography.</li>
                </ul>
            </li>
        </ul>
    );

    return (
        <WithSnippet snippet={snippet}>
            <div>
                <h5 className="font-medium mb-2 text-gray-600">Chat Interface</h5>
                <div className="rounded-lg shadow-lg" style={{backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}`}}>
                    <div className="flex h-96">
                        <div className="w-1/4 p-4 border-r" style={{backgroundColor: brandColors.PrimaryBackground, borderColor: brandColors.GrayLight, backgroundImage: patterns.subtle, backgroundSize: patternSizes.small}}>
                            <div className="font-bold text-xl mb-6" style={{ ...typography.appLogo, color: brandColors.PrimaryText }}>PRIMATIF AI</div>
                            <nav><ul>
                                <li className="mb-3"><a href="#" className="font-semibold rounded-md p-2 block" style={{backgroundColor: hexToRgba(brandColors.SecondaryAccent, 0.8), color: brandColors.AccentDeepBlue}}>New Chat</a></li>
                                <li className="mb-3"><a href="#" className="font-semibold p-2 block" style={{color: brandColors.GrayDark}}>History</a></li>
                                <li className="mb-3"><a href="#" className="font-semibold p-2 block" style={{color: brandColors.GrayDark}}>Settings</a></li>
                            </ul></nav>
                        </div>
                        <div className="w-3/4 p-6 flex flex-col">
                            <div className="flex-grow overflow-y-auto">
                                <div className="flex justify-end mb-4"><div className="rounded-lg p-3" style={{backgroundColor: brandColors.AccentSkyBlue}}><p className="text-sm" style={{color: brandColors.PrimaryText}}>Explain cloud migration benefits.</p></div></div>
                                <div className="flex justify-start mb-4"><div className="rounded-lg p-3" style={{backgroundColor: brandColors.PrimaryBackground}}><p className="text-sm" style={{color: brandColors.PrimaryText}}>Cloud migration offers cost savings, scalability, and enhanced security.</p></div></div>
                            </div>
                            <div className="mt-4"><div className="relative">
                                <input type="text" placeholder="Ask Primatif AI..." className="w-full p-3 pr-12 rounded-lg border-2" style={{borderColor: brandColors.GrayLight}}/>
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md" style={{backgroundColor: brandColors.SecondaryAccent}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.789 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                                </button>
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default ChatInterface;
