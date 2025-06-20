import React, { useMemo } from 'react';
import tanishLogo from '../images/logo_tanish.png';
import { brandColors } from './data/colors.js';
import ExampleSection from './components/ExampleSection.jsx';
import ColorDisplayTable from './components/ColorDisplayTable.jsx';
import ColorPalette from './components/ColorPalette.jsx';
import CodeBlock from './components/CodeBlock.jsx';
import TextColorUsage from './components/TextColorUsage.jsx';
import Typography from './components/Typography.jsx';
import HeadersAndFooters from './components/HeadersAndFooters.jsx';
import Buttons from './components/Buttons.jsx';
import PatternsAndBackgrounds from './components/PatternsAndBackgrounds.jsx';
import TableFormatting from './components/TableFormatting.jsx';
import { typography } from './data/typography.js';
import { checkeredPatternMedium } from './data/patterns.js';

// Import PDF generation libraries
// Ensure these are loaded in your HTML if running outside this environment
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>



// Helper to convert hex to rgba for tints
const hexToRgba = (hex, alpha) => {
    if (!hex || typeof hex !== 'string') {
        console.warn(`Invalid hex color passed to hexToRgba: ${hex}`);
        return `rgba(128, 128, 128, ${alpha || 1})`; // Return a neutral gray for invalid input
    }
    let r = 0, g = 0, b = 0;
    // Handle 3-digit hex
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // Handle 6-digit hex
    else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};


// --- Helper Components for Style Guide Examples ---





const ResponsiveDiagramContainer = ({ children, idealWidth = 1200, idealHeight = 675, patternedBackground }) => {
    return (
        <div className="w-full relative overflow-hidden rounded-lg p-4"
             style={{
                 paddingTop: `${(idealHeight / idealWidth) * 100}%`,
                 backgroundColor: brandColors.SecondaryBackground, // Base background
                 ...(patternedBackground && {
                     backgroundImage: checkeredPatternMedium,
                     backgroundSize: '25px 25px', // Ensure this matches the SVG size
                     backgroundBlendMode: 'overlay',
                     opacity: 0.95
                 })
             }}>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
};

// Simplified Box, Node, Arrow, Group for demonstration without complex logic
const DemoBox = ({ children, title, bgColor, borderColor, textColor }) => (
    <div className={`border-2 rounded-lg p-2 shadow-sm flex flex-col items-center justify-start
        flex-shrink flex-grow basis-1/5 max-w-[150px]`}
        style={{ backgroundColor: bgColor, borderColor: borderColor }}>
        {title && (
            <h4 className="text-[9px] font-bold text-center mb-1 uppercase tracking-wider px-1 py-0.5 rounded-sm"
                style={{ color: textColor, backgroundColor: hexToRgba(brandColors.PrimaryBackground, 0.7) }}>
                {title}
            </h4>
        )}
        <div className="flex flex-col items-center space-y-1 w-full">
            {children}
        </div>
    </div>
);

const DemoNode = ({ children, icon, bgColor, borderColor, textColor }) => (
    <div className={`flex items-center justify-center p-1 rounded-lg w-full text-center text-[10px] font-semibold text-wrap`}
        style={{ backgroundColor: bgColor, borderColor: borderColor, color: textColor, border: '1px solid' }}>
        {icon && <span className="mr-0.5 text-[12px]">{icon}</span>}
        <span className="flex-grow text-center">{children}</span>
    </div>
);

const DemoArrow = ({ label, direction = 'r', arrowColor }) => {
    const rotations = { r: 'rotate-0', l: 'rotate-180', d: 'rotate-90', u: '-rotate-90' };
    return (
        <div className={`flex flex-col items-center justify-center text-center mx-0.5 flex-shrink-0`}>
            {label && (
                <span className="text-[8px] font-medium px-0.5 py-0.25 rounded-md shadow-sm mb-0.25 text-wrap text-center"
                      style={{ color: arrowColor, backgroundColor: hexToRgba(brandColors.PrimaryBackground, 0.7) }}>
                    {label}
                </span>
            )}
            <div className={`text-base ${rotations[direction]}`} style={{ color: arrowColor }}>→</div>
        </div>
    );
};

const DemoGroup = ({ children, title, borderColor, textColor, bgColor, flexWrap = 'flex-wrap' }) => (
     <div className={`border-2 border-dashed rounded-xl p-2 w-auto flex flex-col items-center justify-center flex-shrink-0`}
        style={{ backgroundColor: bgColor, borderColor: borderColor }}>
        {title && (
            <h3 className="text-[10px] font-semibold mb-2 px-1 py-0.5 rounded-sm"
                style={{ color: textColor, backgroundColor: hexToRgba(brandColors.PrimaryBackground, 0.7) }}>
                {title}
            </h3>
        )}
        <div className={`flex flex-row ${flexWrap} items-center justify-center gap-1`}>
            {children}
        </div>
    </div>
);






const StyleGuideDocument = () => {
    useMemo(() => {
        const robotoLink = document.createElement('link');
        robotoLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
        robotoLink.rel = 'stylesheet';
        document.head.appendChild(robotoLink);

        const bebasNeueLink = document.createElement('link');
        bebasNeueLink.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap';
        bebasNeueLink.rel = 'stylesheet';
        document.head.appendChild(bebasNeueLink);
        
        const latoLink = document.createElement('link');
        latoLink.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap';
        latoLink.rel = 'stylesheet';
        document.head.appendChild(latoLink);
    }, []);




    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8" style={{ backgroundColor: brandColors.PrimaryBackground }}>
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                    <div className="text-center mb-6 border-b pb-6" style={{ borderColor: brandColors.GrayLight }}>
                        <img src={tanishLogo} alt="Primatif Logo" className="h-24 w-auto inline-block" />
                    </div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-3xl font-bold" style={{ ...typography.guideTitle, color: brandColors.PrimaryText }}>PRIMATIF BRAND STYLE GUIDE</h1>
                            <p className="text-lg" style={{ ...typography.subtitle, color: brandColors.PrimaryText }}>
                                A guide to our visual identity.
                            </p>
                        </div>
                    </div>
                    <p className="text-sm mb-6" style={{ color: brandColors.GrayDark }}>
                        This style guide is the foundation for creating all brand communications. It ensures a consistent, professional, and innovative identity across all mediums. These are not strict rules but a framework to empower creativity while maintaining the reliability our brand stands for. Use this as a guide to make informed design decisions.
                    </p>

                    <div id="style-guide-content">
                        <ColorPalette />

                        <Typography />

                        <HeadersAndFooters />

                        <Buttons />

                        <PatternsAndBackgrounds />

                        <TableFormatting />
                        
                        <ExampleSection title="7. Component Examples" commentary="Architectural diagrams are a key part of our technical documentation. These components provide a standardized set of shapes and styles to ensure that all diagrams are consistent, professional, and easy to understand.">
                            <h4 className="font-semibold text-lg mb-3" style={{ color: brandColors.PrimaryText }}>Diagram Elements</h4>
                            <p className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>Key elements used to build architectural diagrams.</p>
                            <ResponsiveDiagramContainer idealWidth={600} idealHeight={200} patternedBackground={true}>
                                <div className="flex items-center justify-center w-full flex-nowrap gap-1">
                                    <DemoBox title="Users" bgColor={brandColors.PrimaryBackground} borderColor={brandColors.PrimaryText} textColor={brandColors.PrimaryText}>
                                        <DemoNode bgColor={hexToRgba(brandColors.PrimaryAccent, 0.1)} borderColor={brandColors.PrimaryAccent} textColor={brandColors.PrimaryText} icon=" ">End User</DemoNode>
                                    </DemoBox>
                                    <DemoArrow label="Data Flow" direction="r" arrowColor={brandColors.PrimaryAccent} />
                                    <DemoGroup title="API Layer" bgColor={hexToRgba(brandColors.SecondaryAccent, 0.1)} borderColor={brandColors.SecondaryAccent} textColor={brandColors.PrimaryText}>
                                        <DemoNode bgColor={hexToRgba(brandColors.SecondaryAccent, 0.1)} borderColor={brandColors.SecondaryAccent} textColor={brandColors.PrimaryText} icon=" ">Secure API</DemoNode>
                                    </DemoGroup>
                                    <DemoArrow label="Connects" direction="r" arrowColor={brandColors.PrimaryAccent} />
                                    <DemoBox title="Database" bgColor={brandColors.PrimaryBackground} borderColor={brandColors.PrimaryText} textColor={brandColors.PrimaryText}>
                                        <DemoNode bgColor={hexToRgba(brandColors.WarningYellow, 0.1)} borderColor={brandColors.WarningYellow} textColor={brandColors.PrimaryText} icon=" ">Azure DB</DemoNode>
                                    </DemoBox>
                                </div>
                            </ResponsiveDiagramContainer>
                        </ExampleSection>
                        
                         <ExampleSection title="8. Spacing & Responsive Design" commentary="A consistent spacing scale creates visual rhythm and harmony. Using multiples of a base unit (4px) ensures that elements are aligned and layouts feel balanced. This is not a strict rule, but a strong guideline to avoid chaotic or inconsistent designs.">
                            <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Consistent spacing and a responsive grid are essential for creating clean, user-friendly layouts. We use a 4px base unit for all spacing and margins.</p>
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                {[[0.5, '2px'], [1, '4px'], [2, '8px'], [4, '16px'], [6, '24px'], [8, '32px'], [12, '48px'], [16, '64px']].map(([unit, px]) => (
                                    <div key={px}>
                                        <div className="h-12 w-full mb-2 rounded" style={{backgroundColor: brandColors.AccentSkyBlue}}></div>
                                        <p className="font-bold text-sm" style={{color: brandColors.PrimaryText}}>{px}</p>
                                        <p className="text-xs" style={{color: brandColors.GrayMid}}>rem({unit / 4})</p>
                                    </div>
                                ))}
                            </div>
                             <h4 className="font-semibold text-lg mt-8 mb-2">Responsive Breakpoints</h4>
                             <p className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>Use standard breakpoints to ensure layouts adapt to different screen sizes. Our breakpoints are mobile-first.</p>
                             <div className="overflow-x-auto rounded-lg border" style={{ borderColor: brandColors.GrayLight }}>
                                <table className="w-full text-left table-auto">
                                    <thead>
                                        <tr style={{backgroundColor: brandColors.SecondaryBackground}}>
                                            <th className="p-3 font-semibold text-sm">Breakpoint</th>
                                            <th className="p-3 font-semibold text-sm">Value</th>
                                            <th className="p-3 font-semibold text-sm">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="border-b" style={{borderColor: brandColors.GrayLight}}><td className="p-3"><code className="bg-gray-200 p-1 rounded">sm</code></td><td className="p-3">640px</td><td className="p-3">For small screens, like mobile phones.</td></tr>
                                        <tr className="border-b" style={{borderColor: brandColors.GrayLight}}><td className="p-3"><code className="bg-gray-200 p-1 rounded">md</code></td><td className="p-3">768px</td><td className="p-3">For medium screens, like tablets.</td></tr>
                                        <tr className="border-b" style={{borderColor: brandColors.GrayLight}}><td className="p-3"><code className="bg-gray-200 p-1 rounded">lg</code></td><td className="p-3">1024px</td><td className="p-3">For large screens, like laptops.</td></tr>
                                        <tr><td className="p-3"><code className="bg-gray-200 p-1 rounded">xl</code></td><td className="p-3">1280px</td><td className="p-3">For extra-large screens, like desktops.</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </ExampleSection>
                        
                        <ExampleSection title="9. Layouts & Examples" commentary="The following examples are not templates to be copied literally, but rather demonstrations of how to apply the principles in this guide to different contexts. The goal is to show how the brand can be both consistent and flexible, whether in a formal document or a modern web application.">
                             <div className="mb-8">
                                <h4 className="font-semibold text-lg mb-2">Print Document Examples</h4>
                                 <div className="space-y-8">
                                    {/* Proposal Cover */}
                                    <div>
                                        <h5 className="font-medium mb-2 text-gray-600">Proposal Cover</h5>
                                        <div className="p-8 shadow-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                                            <div className="text-center">
                                                <div className="font-bold text-4xl mb-4" style={{ ...typography.mainTitle, color: brandColors.PrimaryText }}>PRIMATIF</div>
                                                <h1 className="text-4xl font-bold mb-4" style={{ ...typography.mainTitle, color: brandColors.PrimaryText }}>Enterprise Cloud Migration Strategy</h1>
                                                <p className="text-lg mb-8" style={{ ...typography.bodyText, color: brandColors.GrayDark }}>Prepared for: Acme Corporation</p>
                                                 <div className="w-1/2 h-1 mx-auto" style={{backgroundColor: brandColors.PrimaryAccent}}></div>
                                                <p className="text-sm mt-8" style={{color: brandColors.GrayMid}}>June 20, 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Internal Report */}
                                    <div>
                                         <h5 className="font-medium mb-2 text-gray-600">Internal Report Page</h5>
                                        <div className="p-8 shadow-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                                            <div className="p-4 flex justify-between items-center border-b" style={{borderColor: brandColors.GrayLight}}>
                                                <div className="font-bold text-2xl" style={{ ...typography.headerLogo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                                                <div className="text-sm" style={{color: brandColors.GrayMid}}>Q2 Performance Review</div>
                                            </div>
                                            <div className="py-8">
                                                 <h2 className="text-xl font-bold mb-4 text-gray-700" style={{...typography.subSectionTitle}}>Project Status Overview</h2>
                                                 <p className="text-sm mb-4">This table summarizes the current status of all active projects for the second quarter.</p>
                                                  <div className="overflow-x-auto rounded-lg border" style={{ borderColor: brandColors.PrimaryText }}>
                                                    <table className="w-full text-left table-auto border-collapse">
                                                        <thead>
                                                            <tr style={{ backgroundColor: brandColors.AccentDeepBlue, color: brandColors.PrimaryBackground }}>
                                                                <th className="p-3 font-semibold text-sm uppercase">Item</th>
                                                                <th className="p-3 font-semibold text-sm uppercase">Status</th>
                                                                <th className="p-3 font-semibold text-sm uppercase">Owner</th>
                                                                <th className="p-3 font-semibold text-sm uppercase">Due Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-sm">
                                                            <tr className="border-b" style={{ borderColor: brandColors.GrayLight }}>
                                                                <td className="p-3" style={{color: brandColors.PrimaryText }}>Initial Project Setup</td>
                                                                <td className="p-3">
                                                                    <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.SemanticSuccessGreenLight, color: brandColors.SemanticSuccessGreen }}>✅ Complete</span>
                                                                </td>
                                                                <td className="p-3" style={{color: brandColors.GrayDark }}>Tech Lead</td>
                                                                <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-15</td>
                                                            </tr>
                                                             <tr className="border-b" style={{ backgroundColor: '#FFF8E1', borderColor: brandColors.GrayLight }}>
                                                                <td className="p-3 font-medium" style={{color: brandColors.PrimaryText }}>API Key Provisioning</td>
                                                                <td className="p-3">
                                                                    <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.QuaternaryAccent, color: brandColors.PrimaryText }}>⚠️ In Progress</span>
                                                                </td>
                                                                <td className="p-3" style={{color: brandColors.GrayDark }}>Client IT</td>
                                                                <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-22</td>
                                                            </tr>
                                                             <tr className="border-b" style={{ backgroundColor: '#FFE8EB', borderColor: brandColors.GrayLight }}>
                                                                <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>Database Credentials Update</td>
                                                                <td className="p-3">
                                                                    <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.PrimaryAccentDark, color: brandColors.PrimaryBackground }}>❌ Blocked</span>
                                                                </td>
                                                                <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>Tech Lead</td>
                                                                <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>2025-06-20</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="p-4 text-center mt-8 border-t" style={{borderColor: brandColors.GrayLight}}>
                                                <p className="text-xs" style={{color: brandColors.GrayMid}}>© {new Date().getFullYear()} Primatif | Page 5</p>
                                            </div>
                                        </div>
                                    </div>
                                     {/* Technical Whitepaper */}
                                    <div>
                                         <h5 className="font-medium mb-2 text-gray-600">Technical Whitepaper Page</h5>
                                        <div className="p-8 shadow-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                                             <div className="p-4 flex justify-between items-center border-b" style={{borderColor: brandColors.GrayLight}}>
                                                <div className="font-bold text-2xl" style={{ ...typography.headerLogo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                                                <div className="text-sm" style={{color: brandColors.GrayMid}}>Technical Whitepaper</div>
                                            </div>
                                            <div className="py-8">
                                                <h2 className="text-xl font-bold mb-2 text-gray-700" style={{...typography.subSectionTitle}}>3. Implementing Secure API Endpoints</h2>
                                                <p className="text-base mb-4">The following code demonstrates a basic secure endpoint using Python and Flask. Note the use of the <code className="bg-gray-200 text-sm px-1 rounded">@jwt_required()</code> decorator to protect the route.</p>
                                                <CodeBlock>
{`from flask import Flask
from flask_jwt_extended import jwt_required

app = Flask(__name__)

@app.route('/api/v1/data', methods=['GET'])
@jwt_required()
def get_data():
    # Your secure logic here
    return {"message": "Access to secure data granted."}`}
                                                </CodeBlock>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                            
                             <div className="mt-12">
                                <h4 className="font-semibold text-lg mb-2">Gemini App Examples</h4>
                                <div className="space-y-8">
                                    {/* App Example 1: Chat Interface */}
                                    <div>
                                        <h5 className="font-medium mb-2 text-gray-600">Chat Interface</h5>
                                        <div className="rounded-lg shadow-lg" style={{backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}`}}>
                                            <div className="flex h-96">
                                                <div className="w-1/4 p-4 border-r" style={{backgroundColor: brandColors.PrimaryBackground, borderColor: brandColors.GrayLight}}>
                                                    <div className="font-bold text-xl mb-6" style={{ ...typography.appLogo, color: brandColors.PrimaryText }}>PRIMATIF AI</div>
                                                    <nav><ul>
                                                        <li className="mb-3"><a href="#" className="font-semibold rounded-md p-2 block" style={{backgroundColor: hexToRgba(brandColors.SecondaryAccent, 0.2), color: brandColors.AccentDeepBlue}}>New Chat</a></li>
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
                                    {/* App Example 2: Dashboard */}
                                     <div>
                                        <h5 className="font-medium mb-2 text-gray-600">Data Dashboard</h5>
                                        <div className="rounded-lg shadow-lg p-6" style={{backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}`}}>
                                            <h3 className="text-2xl font-bold mb-4">Project Analytics</h3>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="p-4 bg-white rounded-lg shadow"><h4 className="text-gray-500 text-sm font-bold">Active Projects</h4><p className="text-3xl font-bold" style={{color: brandColors.AccentDeepBlue}}>12</p></div>
                                                <div className="p-4 bg-white rounded-lg shadow"><h4 className="text-gray-500 text-sm font-bold">On-time Completion</h4><p className="text-3xl font-bold" style={{color: brandColors.SemanticSuccessGreen}}>92%</p></div>
                                                <div className="p-4 bg-white rounded-lg shadow"><h4 className="text-gray-500 text-sm font-bold">Critical Alerts</h4><p className="text-3xl font-bold" style={{color: brandColors.PrimaryAccent}}>1</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* App Example 3: Settings */}
                                     <div>
                                        <h5 className="font-medium mb-2 text-gray-600">Settings Page</h5>
                                        <div className="rounded-lg shadow-lg p-6" style={{backgroundColor: brandColors.PrimaryBackground, border: `1px solid ${brandColors.GrayLight}`}}>
                                            <h3 className="text-2xl font-bold mb-4">Application Settings</h3>
                                            <div className="space-y-4">
                                                <div><label className="block text-sm font-medium text-gray-700">API Endpoint</label><input type="text" defaultValue="https://api.primatif.com/v1" className="mt-1 block w-full p-2 border rounded-md" style={{borderColor: brandColors.GrayLight}}/></div>
                                                <div className="flex items-center justify-between"><span className="text-sm font-medium text-gray-700">Enable Beta Features</span><div className="w-12 h-6 rounded-full p-1 cursor-pointer" style={{backgroundColor: brandColors.SemanticSuccessGreen}}><div className="w-4 h-4 rounded-full bg-white shadow-md transform translate-x-6"></div></div></div>
                                                <div className="flex items-center justify-between"><span className="text-sm font-medium text-gray-700">Dark Mode</span><div className="w-12 h-6 rounded-full p-1 cursor-pointer bg-gray-300"><div className="w-4 h-4 rounded-full bg-white shadow-md"></div></div></div>
                                                <div className="pt-4 border-t" style={{borderColor: brandColors.GrayLight}}><button className="px-5 py-2 rounded-lg text-white font-semibold shadow-md" style={{backgroundColor: brandColors.SecondaryAccent}}>Save Changes</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ExampleSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StyleGuideDocument;
