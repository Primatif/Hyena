import React from 'react';
import { brandColors } from '../data/colors.js';
import ExampleSection from './ExampleSection.jsx';

const Buttons = () => (
    <ExampleSection 
        title="4. Buttons" 
        commentary="Button styles are designed to create a clear visual hierarchy for user actions. The primary button should be used for the most important action on a page, while secondary and destructive buttons offer clear alternatives."
    >
        <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Buttons are used for primary actions, secondary options, and destructive operations.</p>
         <div className="flex flex-wrap items-center gap-4">
            <div>
                <button className="px-5 py-2 rounded-lg text-white font-semibold shadow-md" style={{backgroundColor: brandColors.SecondaryAccent}}>Primary Action</button>
                <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for the main call to action.</p>
            </div>
             <div>
                <button className="px-5 py-2 rounded-lg font-semibold border" style={{color: brandColors.PrimaryText, borderColor: brandColors.GrayMid}}>Secondary Action</button>
                <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for alternative, less critical actions.</p>
            </div>
             <div>
                <button className="px-5 py-2 rounded-lg text-white font-semibold shadow-md" style={{backgroundColor: brandColors.PrimaryAccent}}>Destructive Action</button>
                <p className="text-xs text-center mt-2" style={{color: brandColors.GrayDark}}>Used for actions that cannot be undone.</p>
            </div>
        </div>
    </ExampleSection>
);

export default Buttons;
