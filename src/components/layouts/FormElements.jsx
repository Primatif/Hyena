import React, { useState } from 'react';
import { brandColors } from '../../data/colors.js';
import { typography } from '../../data/typography.js';
import { WithSnippet } from '../WithSnippet.jsx';

const FormElements = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A comprehensive showcase of all standard web form elements, demonstrating their styling, states, and usage within a structured layout.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li>The main container has a <code>SecondaryBackground</code>, <code>rounded-lg</code> corners, a <code>shadow-lg</code>, and a <code>GrayLight</code> border.</li>
                    <li>A responsive grid system (<code>grid-cols-1 md:grid-cols-2</code>) is used to organize form controls, with <code>gap-6</code> for spacing.</li>
                    <li>Labels are styled as <code>block text-sm font-medium mb-1</code> with <code>GrayDark</code> text color.</li>
                </ul>
            </li>
            <li><strong>Styling & States:</strong>
                <ul>
                    <li><strong>Input/Textarea:</strong>
                        <ul>
                            <li><strong>Default State:</strong> <code>GrayLight</code> border, <code>PrimaryBackground</code> background.</li>
                            <li><strong>Focus State:</strong> Border color changes to <code>PrimaryAccent</code>, and a <code>box-shadow</code> of <code>0 0 0 2px ${brandColors.PrimaryAccent}40</code> is applied.</li>
                            <li><strong>Error State:</strong> Border and label color change to <code>ErrorRed</code>.</li>
                            <li><strong>Disabled State:</strong> Background becomes <code>GrayLight</code> with a <code>cursor-not-allowed</code> style.</li>
                        </ul>
                    </li>
                    <li><strong>Checkbox/Radio:</strong>
                        <ul>
                            <li>Custom-styled controls. The selected state uses <code>SecondaryAccent</code> for the background and border. Unselected uses <code>GrayMid</code> for the border.</li>
                            <li>A checkmark icon for the checkbox and an inner circle for the radio button appear in the selected state.</li>
                        </ul>
                    </li>
                    <li><strong>Range Slider:</strong>
                        <ul>
                            <li>The track is styled with <code>SecondaryAccent</code>.</li>
                            <li>The thumb is custom-styled using <code>::-webkit-slider-thumb</code> and <code>::-moz-range-thumb</code> pseudo-elements, with a <code>GrayDark</code> background and a circular shape.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><strong>Button Usage:</strong>
                <ul>
                    <li><strong>Primary Action:</strong> Solid <code>SecondaryAccent</code> background, white text, and a <code>shadow-md</code>.</li>
                    <li><strong>Secondary Action:</strong> Transparent background with a <code>GrayMid</code> border and <code>PrimaryText</code> color.</li>
                    <li><strong>Destructive Action:</strong> Solid <code>PrimaryAccent</code> background, white text, and a <code>shadow-md</code>.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>The component uses React's <code>useState</code> hook to manage the focus state of inputs, dynamically applying styles.</li>
                    <li>Custom styles for the range slider thumb are injected via a <code>&lt;style&gt;</code> tag, demonstrating how to handle complex pseudo-element styling within a React component.</li>
                    <li>The component is composed of smaller, reusable sub-components (<code>Input</code>, <code>Textarea</code>, <code>Checkbox</code>, <code>Radio</code>) for modularity and clarity.</li>
                </ul>
            </li>
        </ul>
    );

    const sliderThumbStyles = `
        input[type=range].custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: ${brandColors.GrayDark};
            cursor: pointer;
            border-radius: 50%;
            margin-top: -6px; /* Center thumb on track */
        }

        input[type=range].custom-slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: ${brandColors.GrayDark};
            cursor: pointer;
            border-radius: 50%;
        }
    `;

    const Input = ({ label, type = 'text', placeholder, defaultValue, disabled, error }) => {
        const [isFocused, setIsFocused] = useState(false);
        return (
            <div>
                <label className="block text-sm font-medium mb-1" style={{ color: error ? brandColors.ErrorRed : brandColors.GrayDark }}>{label}</label>
                <input 
                    type={type} 
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`mt-1 block w-full p-2 border rounded-md transition-all duration-200 ${disabled ? 'cursor-not-allowed' : ''}`}
                    style={{
                        borderColor: error ? brandColors.ErrorRed : (isFocused ? brandColors.PrimaryAccent : brandColors.GrayLight),
                        boxShadow: isFocused ? `0 0 0 2px ${brandColors.PrimaryAccent}40` : 'none',
                        backgroundColor: disabled ? brandColors.GrayLight : brandColors.PrimaryBackground,
                        color: brandColors.PrimaryText
                    }}
                />
                {error && <p className="text-xs mt-1" style={{color: brandColors.ErrorRed}}>{error}</p>}
            </div>
        );
    };
    
    const Textarea = ({ label, placeholder }) => {
        const [isFocused, setIsFocused] = useState(false);
        return (
            <div>
                <label className="block text-sm font-medium mb-1" style={{color: brandColors.GrayDark}}>{label}</label>
                <textarea 
                    rows="4" 
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="mt-1 block w-full p-2 border rounded-md transition-all duration-200"
                    style={{
                        borderColor: isFocused ? brandColors.PrimaryAccent : brandColors.GrayLight,
                        boxShadow: isFocused ? `0 0 0 2px ${brandColors.PrimaryAccent}40` : 'none',
                        backgroundColor: brandColors.PrimaryBackground,
                        color: brandColors.PrimaryText
                    }}
                ></textarea>
            </div>
        );
    };

    const Checkbox = ({ label, checked }) => (
        <div className="flex items-center cursor-pointer">
            <div className="w-5 h-5 rounded flex-shrink-0 mr-2 flex items-center justify-center border-2 transition-all duration-200" style={{borderColor: checked ? brandColors.SecondaryAccent : brandColors.GrayMid, backgroundColor: checked ? brandColors.SecondaryAccent : 'transparent'}}>
                {checked && <svg className="w-3 h-3" fill={brandColors.PrimaryBackground} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>}
            </div>
            <span style={{color: brandColors.PrimaryText}}>{label}</span>
        </div>
    );

    const Radio = ({ label, checked }) => (
        <div className="flex items-center cursor-pointer">
            <div className="w-5 h-5 rounded-full flex-shrink-0 mr-2 flex items-center justify-center border-2 transition-all duration-200" style={{borderColor: checked ? brandColors.SecondaryAccent : brandColors.GrayMid}}>
                {checked && <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: brandColors.SecondaryAccent}}></div>}
            </div>
            <span style={{color: brandColors.PrimaryText}}>{label}</span>
        </div>
    );

    return (
        <WithSnippet snippet={snippet}>
            <style>{sliderThumbStyles}</style>
            <div>
                <h5 className="font-medium mb-2 text-gray-600">Form Elements</h5>
                <div className="rounded-lg shadow-lg p-6 space-y-8" style={{backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}`}}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Default Input" placeholder="Enter text here..." />
                        <Input label="Input with Value" defaultValue="An existing value" />
                        <Input label="Disabled Input" placeholder="Cannot be edited" disabled />
                        <Input label="Error Input" defaultValue="invalid.entry" error="Please enter a valid value." />
                    </div>

                    <Textarea label="Textarea" placeholder="Share your thoughts..." />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                             <label className="block text-sm font-medium mb-1" style={{color: brandColors.GrayDark}}>Select an Option</label>
                            <select className="mt-1 block w-full p-2 border rounded-md" style={{borderColor: brandColors.GrayLight, backgroundColor: brandColors.PrimaryBackground, color: brandColors.PrimaryText}}>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" style={{color: brandColors.GrayDark}}>Checkboxes</label>
                            <div className="space-y-2 mt-2">
                                <Checkbox label="Accept Terms" checked={true}/>
                                <Checkbox label="Subscribe" checked={false}/>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" style={{color: brandColors.GrayDark}}>Radio Group</label>
                            <div className="space-y-2 mt-2">
                                <Radio label="Personal" checked={true}/>
                                <Radio label="Business" checked={false}/>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                            <label className="block text-sm font-medium mb-1" style={{color: brandColors.GrayDark}}>Range Slider</label>
                            <input type="range" min="0" max="100" defaultValue="50" className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider" style={{backgroundColor: brandColors.SecondaryAccent}} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" style={{color: brandColors.GrayDark}}>File Upload</label>
                            <button className="w-full p-2 border rounded-md text-sm font-semibold" style={{borderColor: brandColors.GrayLight, color: brandColors.PrimaryText, backgroundColor: brandColors.PrimaryBackground}}>Upload a File</button>
                        </div>
                    </div>

                    <div className="pt-6 border-t flex items-center space-x-4" style={{borderColor: brandColors.GrayLight}}>
                        <button className="px-5 py-2 rounded-lg text-white font-semibold shadow-md" style={{backgroundColor: brandColors.SecondaryAccent}}>Primary Action</button>
                        <button className="px-5 py-2 rounded-lg font-semibold border" style={{color: brandColors.PrimaryText, borderColor: brandColors.GrayMid}}>Secondary Action</button>
                        <button className="px-5 py-2 rounded-lg text-white font-semibold shadow-md" style={{backgroundColor: brandColors.PrimaryAccent}}>Destructive Action</button>
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default FormElements;
