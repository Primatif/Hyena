import React, { useMemo, useRef, useState } from 'react';
import tanishLogo from '../images/logo_tanish.png';

// Import PDF generation libraries
// Ensure these are loaded in your HTML if running outside this environment
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

// --- Style Guide Colors ---
const brandColors = {
    // Functional Tones
    PrimaryText: '#212121',
    PrimaryBackground: '#FFFFFF',
    SecondaryBackground: '#F3F4F6',
    GrayDark: '#616161',
    GrayMid: '#9E9E9E',
    GrayLight: '#E0E0E0',
    DisabledGray: '#BDBDBD', // Darkened disabled gray

    // Brand Colors (based on user request)
    PrimaryAccent: '#E31937',      // Primatif Red
    PrimaryAccentLight: '#E73B54',   // Primatif Red Light
    PrimaryAccentDark: '#C1152E',    // Primatif Red Dark
    PrimaryAccentDarker: '#5C0411', // Primatif Red Darker
    
    // Updated Blue Palette
    SecondaryAccent: '#53C8ED',    // New main blue (Primatif Sky Blue)
    AccentSkyBlue: '#A0DFF2',      // Lighter, adjusted blue
    AccentDeepBlue: '#0080A4',     // Darker, adjusted blue

    TertiaryAccent: '#08FF08',      // User's Greenscreen Green (for branding)
    QuaternaryAccent: '#FFC300',    // Retained for semantic warning state

    // Semantic-specific colors
    SemanticSuccessGreen: '#2E7D32', // Deeper green for success states
    SemanticSuccessGreenLight: '#E8F5E9',
};

// --- Pattern Definitions ---
const checkeredPatternSmall = `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='5' height='5' fill='%23e0e0e0'/%3E%3Crect x='5' y='5' width='5' height='5' fill='%23e0e0e0'/%3E%3C/svg%3E")`;
const checkeredPatternMedium = `url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='5' height='5' fill='%23e0e0e0'/%3E%3Crect x='5' y='5' width='5' height='5' fill='%23e0e0e0'/%3E%3C/svg%3E")`;
const checkeredPatternLarge = `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='5' height='5' fill='%23e0e0e0'/%3E%3Crect x='5' y='5' width='5' height='5' fill='%23e0e0e0'/%3E%3C/svg%3E")`;

// Helper to convert hex to rgba for tints
const hexToRgba = (hex, alpha) => {
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

const ExampleSection = ({ title, children, commentary }) => (
    <div className="my-6 p-4 rounded-lg" style={{ backgroundColor: brandColors.PrimaryBackground, border: `1px solid ${brandColors.SecondaryBackground}` }}>
        <h3 className="text-xl font-bold mb-3 border-b pb-2" style={{ color: brandColors.PrimaryText, borderColor: brandColors.GrayLight }}>{title}</h3>
        {commentary && <p className="text-sm italic mb-4" style={{color: brandColors.GrayDark}}>{commentary}</p>}
        {children}
    </div>
);

const CodeBlock = ({ children }) => (
    <pre className="bg-gray-800 text-gray-50 p-3 rounded-md overflow-x-auto text-xs my-2">
        <code>{children}</code>
    </pre>
);

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

// Component to display colors in a table
const ColorDisplayTable = ({ title, description, colors }) => (
    <div className="mb-8">
        <h4 className="text-lg font-bold mb-2" style={{ color: brandColors.PrimaryText }}>{title}</h4>
        {description && <p className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>{description}</p>}
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: brandColors.GrayLight }}>
            <table className="w-full text-left table-auto border-collapse">
                <thead>
                    <tr style={{ backgroundColor: brandColors.SecondaryBackground }}>
                        <th className="p-3 font-semibold text-sm uppercase" style={{ color: brandColors.PrimaryText }}>Color</th>
                        <th className="p-3 font-semibold text-sm uppercase" style={{ color: brandColors.PrimaryText }}>Name</th>
                        <th className="p-3 font-semibold text-sm uppercase" style={{ color: brandColors.PrimaryText }}>Token</th>
                        <th className="p-3 font-semibold text-sm uppercase" style={{ color: brandColors.PrimaryText }}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {colors.map(color => (
                        <tr key={color.token} className="border-b last:border-b-0" style={{ borderColor: brandColors.GrayLight }}>
                            <td className="p-3">
                                <div className={`w-full h-8 rounded ${color.border ? 'border' : ''}`} style={{ backgroundColor: color.hex, borderColor: color.border ? brandColors.GrayLight : 'transparent' }}></div>
                            </td>
                            <td className="p-3 font-medium" style={{ color: brandColors.PrimaryText }}>{color.name}</td>
                            <td className="p-3">
                                <code className="bg-gray-200 text-sm px-2 py-1 rounded" style={{ color: brandColors.PrimaryText }}>{color.token}</code>
                            </td>
                             <td className="p-3">
                                <code className="bg-gray-200 text-sm px-2 py-1 rounded" style={{ color: brandColors.PrimaryText }}>{color.hex}</code>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// Component for Text Color Usage
const TextColorUsage = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="mt-6">
            <h4 className="text-lg font-bold mb-2" style={{ color: brandColors.PrimaryText }}>Text Color Usage</h4>
            <p className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>
                To ensure readability and accessibility, use the following colors for text.
            </p>
            <div className="p-4 rounded-lg border" style={{ borderColor: brandColors.GrayLight}}>
                <div className="mb-3">
                    <div className="flex items-center mb-1">
                        <div className="w-4 h-4 rounded-full mr-2" style={{backgroundColor: brandColors.PrimaryText}}></div>
                        <p style={{color: brandColors.PrimaryText}}><b>Primary Text</b> (<code className="text-xs bg-gray-200 p-1 rounded">PrimaryText</code>) - Use for all headings and body copy.</p>
                    </div>
                </div>
                <div className="mb-3">
                     <div className="flex items-center mb-1">
                        <div className="w-4 h-4 rounded-full mr-2" style={{backgroundColor: brandColors.GrayDark}}></div>
                        <p style={{color: brandColors.GrayDark}}><b>Secondary Text</b> (<code className="text-xs bg-gray-200 p-1 rounded">GrayDark</code>) - Use for secondary information or less important details.</p>
                    </div>
                </div>
                 <div className="mb-3">
                     <div className="flex items-center mb-1">
                        <div className="w-4 h-4 rounded-full mr-2" style={{backgroundColor: brandColors.GrayMid}}></div>
                        <p style={{color: brandColors.GrayMid}}><b>Tertiary/Hint Text</b> (<code className="text-xs bg-gray-200 p-1 rounded">GrayMid</code>) - Use for captions, hints, or placeholder text.</p>
                    </div>
                </div>
                 <div className="mb-3">
                     <div className="flex items-center mb-1">
                        <div className="w-4 h-4 rounded-full mr-2 border" style={{backgroundColor: brandColors.DisabledGray, borderColor: brandColors.GrayMid}}></div>
                        <p style={{color: brandColors.GrayMid}}><b>Disabled Text</b> (<code className="text-xs bg-gray-200 p-1 rounded">DisabledGray</code>) - Use for disabled UI elements.</p>
                    </div>
                </div>
                 <div className="pt-3 mt-3 border-t" style={{borderColor: brandColors.GrayLight}}>
                     <h5 className="font-bold mb-2" style={{color: brandColors.PrimaryText}}>Links</h5>
                     <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{backgroundColor: brandColors.PrimaryAccent}}></div>
                        <a href="#" 
                           style={{color: isHovered ? brandColors.PrimaryAccentDark : brandColors.PrimaryAccent, textDecoration: 'underline'}}
                           onMouseEnter={() => setIsHovered(true)}
                           onMouseLeave={() => setIsHovered(false)}
                        >
                            This is an example link.
                        </a>
                    </div>
                    <p className="text-sm mt-1" style={{color: brandColors.GrayDark}}>
                        Links use <code className="text-xs bg-gray-200 p-1 rounded">PrimaryAccent</code> and darken to <code className="text-xs bg-gray-200 p-1 rounded">PrimaryAccentDark</code> on hover.
                    </p>
                </div>
            </div>
        </div>
    );
};


const StyleGuideDocument = () => {
    const contentRef = useRef(null); 

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

    const handleDownloadPdf = async () => {
        const element = contentRef.current;
        if (!element) return;

        if (typeof window.html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
            console.error('html2canvas or jspdf not loaded. Please ensure their script tags are present.');
            alert('PDF generation libraries not loaded. Cannot download PDF.');
            return;
        }

        const pdf = new window.jspdf.jsPDF('p', 'pt', 'legal'); 
        const padding = 40;

        try {
            const clone = element.cloneNode(true);
            const downloadButton = clone.querySelector('#download-pdf-button');
            if (downloadButton) {
                downloadButton.remove();
            }

            const canvas = await window.html2canvas(clone, { 
                scale: 2,
                useCORS: true, 
                windowWidth: clone.scrollWidth,
                windowHeight: clone.scrollHeight, 
            });

            const imgData = canvas.toDataURL('image/png');
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgHeight = (canvas.height * pdf.internal.pageSize.getWidth()) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, pdf.internal.pageSize.getWidth(), imgHeight);
            heightLeft -= pageHeight;
            
            while (heightLeft > 0) {
                position -= pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdf.internal.pageSize.getWidth(), imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('Primatif_Style_Guide.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        }
    };
    
    // Data for the color tables
    const brandColorsData = [
        { name: 'Primatif Red', token: 'PrimaryAccent', hex: brandColors.PrimaryAccent },
        { name: 'Primatif Red Light', token: 'PrimaryAccentLight', hex: brandColors.PrimaryAccentLight },
        { name: 'Primatif Red Dark', token: 'PrimaryAccentDark', hex: brandColors.PrimaryAccentDark },
        { name: 'Primatif Red Darker', token: 'PrimaryAccentDarker', hex: brandColors.PrimaryAccentDarker },
        { name: 'Primatif Sky Blue', token: 'SecondaryAccent', hex: brandColors.SecondaryAccent },
        { name: 'Sky Blue Light', token: 'AccentSkyBlue', hex: brandColors.AccentSkyBlue },
        { name: 'Deep Blue', token: 'AccentDeepBlue', hex: brandColors.AccentDeepBlue },
        { name: 'Green Screen Green', token: 'TertiaryAccent', hex: brandColors.TertiaryAccent },
    ];

    const functionalTonesData = [
        { name: 'Primary Text', token: 'PrimaryText', hex: brandColors.PrimaryText },
        { name: 'Gray Dark', token: 'GrayDark', hex: brandColors.GrayDark },
        { name: 'Gray Mid', token: 'GrayMid', hex: brandColors.GrayMid },
        { name: 'Gray Light', token: 'GrayLight', hex: brandColors.GrayLight },
        { name: 'Secondary Background', token: 'SecondaryBackground', hex: brandColors.SecondaryBackground },
        { name: 'Primary Background', token: 'PrimaryBackground', hex: brandColors.PrimaryBackground, border: true },
    ];
    
    const semanticColorsData = [
        { name: 'Success Green', token: 'SemanticSuccessGreen', hex: brandColors.SemanticSuccessGreen },
        { name: 'Success Green Light', token: 'SemanticSuccessGreenLight', hex: brandColors.SemanticSuccessGreenLight },
        { name: 'Error Red', token: 'ErrorRed', hex: brandColors.PrimaryAccentDark },
        { name: 'Error Red Light', token: 'ErrorRedLight', hex: '#FFE8EB' },
        { name: 'Warning Yellow', token: 'WarningYellow', hex: brandColors.QuaternaryAccent },
        { name: 'Warning Yellow Light', token: 'WarningYellowLight', hex: '#FFF8E1' },
        { name: 'Info Blue', token: 'InfoBlue', hex: brandColors.SecondaryAccent },
        { name: 'Info Blue Light', token: 'InfoBlueLight', hex: '#D1EEF9' },
        { name: 'Disabled Gray', token: 'DisabledGray', hex: brandColors.DisabledGray },
    ];


    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8" style={{ backgroundColor: brandColors.PrimaryBackground }}>
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                    <div className="text-center mb-6 border-b pb-6" style={{ borderColor: brandColors.GrayLight }}>
                        <img src={tanishLogo} alt="Primatif Logo" className="h-24 w-auto inline-block" />
                    </div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-3xl font-bold" style={{ color: brandColors.PrimaryText, fontFamily: 'Bebas Neue, sans-serif' }}>PRIMATIF BRAND STYLE GUIDE</h1>
                            <p className="text-lg" style={{ color: brandColors.PrimaryText, fontFamily: 'Lato, sans-serif' }}>
                                A guide to our visual identity.
                            </p>
                        </div>
                        <button
                            id="download-pdf-button"
                            onClick={handleDownloadPdf}
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-300 flex-shrink-0 ml-4"
                            style={{ backgroundColor: brandColors.GrayLight }}
                            aria-label="Download as PDF"
                            title="Download as PDF"
                        >
                            <div className="w-2 h-2 rounded-full" style={{backgroundColor: brandColors.GrayDark}}></div>
                        </button>
                    </div>
                    <p className="text-sm mb-6" style={{ color: brandColors.GrayDark }}>
                        This style guide is the foundation for creating all brand communications. It ensures a consistent, professional, and innovative identity across all mediums. These are not strict rules but a framework to empower creativity while maintaining the reliability our brand stands for. Use this as a guide to make informed design decisions.
                    </p>

                    <div id="style-guide-content" ref={contentRef}>
                        <ExampleSection title="1. Color Palette" commentary="Our color palette balances professionalism with innovation. The primary colors are bold and confident, while functional tones ensure clarity and readability. Semantic colors provide intuitive user feedback without being distracting.">
                             <ColorDisplayTable 
                                title="Brand Colors"
                                description="The brand colors form the core of our visual identity. They are used for key highlights, important information, and to create a dynamic and recognizable presence."
                                colors={brandColorsData}
                            />
                            <ColorDisplayTable
                                title="Functional Tones"
                                description="The functional tones provide the neutral foundation for our documents, ensuring text is readable and the layout is clean and structured."
                                colors={functionalTonesData}
                            />
                            <ColorDisplayTable
                                title="Semantic Colors"
                                description="Recommended for use in forms, alerts, or any element meant to communicate a state. Color should never be the only means used to convey state information; it must always be accompanied by text or an icon."
                                colors={semanticColorsData}
                            />
                        </ExampleSection>

                        <ExampleSection title="2. Typography" commentary="Typography is key to our brand voice. Bebas Neue provides a strong, modern feel for headlines, while Roboto ensures body text is highly legible and professional. Lato is used for subtitles and intro text to provide a clean, accessible feel that complements the primary fonts.">
                             <p className="mb-4" style={{ color: brandColors.PrimaryText }}>We utilize a combination of fonts to establish a clear visual hierarchy and maintain brand consistency.</p>
                             <h4 className="font-semibold text-lg mb-2">Primary & Logo Font</h4>
                            <p style={{ fontFamily: 'Bebas Neue, sans-serif', color: brandColors.PrimaryText, fontSize: '3rem', fontWeight: 'normal', letterSpacing: '0.05em' }}>PRIMATIF</p>
                            <div className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>
                                <strong style={{ color: brandColors.PrimaryAccent }}>Bebas Neue:</strong> Used for the "PRIMATIF" logo and major section headers.
                                <CodeBlock>{`font-family: 'Bebas Neue', sans-serif;`}</CodeBlock>
                            </div>
                            <h4 className="font-semibold text-lg mt-6 mb-2">Headings</h4>
                            <p style={{ fontFamily: 'Roboto, sans-serif', color: brandColors.PrimaryText, fontSize: '2.25rem', fontWeight: '700' }}>Heading 1 - Roboto Bold</p>
                            <p style={{ fontFamily: 'Roboto, sans-serif', color: brandColors.PrimaryText, fontSize: '1.5rem', fontWeight: '700' }}>Heading 2 - Roboto Bold</p>
                            <p style={{ fontFamily: 'Roboto, sans-serif', color: brandColors.PrimaryText, fontSize: '1.25rem', fontWeight: '700' }}>Heading 3 - Roboto Bold</p>
                            <CodeBlock>{`font-family: 'Roboto', sans-serif; font-weight: 700;`}</CodeBlock>
                             <h4 className="font-semibold text-lg mt-6 mb-2">Body & Subtitle Copy</h4>
                             <p style={{ fontFamily: 'Lato, sans-serif', color: brandColors.GrayDark, fontSize: '1.125rem' }}>This is Lato, used for subtitles and introductory text.</p>
                            <p className="mt-2" style={{ fontFamily: 'Roboto, sans-serif', color: brandColors.PrimaryText, fontSize: '1rem', fontWeight: '400' }}>
                                This is Roboto, our primary font for all paragraph text, ensuring readability and a clean, professional appearance.
                            </p>
                             <CodeBlock>{`font-family: 'Lato', sans-serif; /* For subtitles */ \nfont-family: 'Roboto', sans-serif; /* For body text */`}</CodeBlock>
                            <TextColorUsage />
                        </ExampleSection>

                        <ExampleSection title="3. Headers & Footers" commentary="These components bookend our documents, providing a consistent brand frame. The header is clean and professional, while the footer offers essential contact information in a compact, unobtrusive manner.">
                            <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Headers and Footers provide consistent branding and navigation across all documents.</p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-2">Standard Header</h4>
                                <div className="p-4 flex justify-between items-center rounded-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                                    <div className="font-bold text-2xl" style={{ color: brandColors.PrimaryText, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>PRIMATIF</div>
                                    <div className="text-sm" style={{color: brandColors.GrayMid}}>Document Title</div>
                                </div>
                            </div>
                             <div>
                                <h4 className="font-semibold text-lg mb-2">Standard Footer</h4>
                                <div className="p-4 text-center rounded-lg" style={{backgroundColor: brandColors.GrayDark, color: brandColors.PrimaryBackground}}>
                                    <div className="font-bold text-lg" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>PRIMATIF</div>
                                    <p className="text-xs mt-1" style={{color: brandColors.GrayLight}}> 2025 Primatif | hello@primatif.com</p>
                                </div>
                            </div>
                        </ExampleSection>

                        <ExampleSection title="4. Buttons" commentary="Button styles are designed to create a clear visual hierarchy for user actions. The primary button should be used for the most important action on a page, while secondary and destructive buttons offer clear alternatives.">
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

                        <ExampleSection title="5. Patterns & Backgrounds" commentary="Subtle patterns can add texture and visual interest to otherwise plain backgrounds. The different sizes allow for flexibility, from a fine texture on a small card to a more noticeable pattern on a large hero section.">
                            <p className="mb-4" style={{ color: brandColors.PrimaryText }}>A subtle checkered pattern can be used as an overlay on light backgrounds to add texture. It is available in multiple sizes for different visual effects.</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternSmall, backgroundSize: '10px 10px' }}>
                                    <span className="bg-white/80 px-2 py-1 rounded">Small Pattern</span>
                                </div>
                                 <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternMedium, backgroundSize: '25px 25px' }}>
                                    <span className="bg-white/80 px-2 py-1 rounded">Medium Pattern</span>
                                </div>
                                 <div className="h-48 rounded-lg border border-gray-300 flex items-center justify-center text-sm flex-col" style={{ backgroundImage: checkeredPatternLarge, backgroundSize: '50px 50px' }}>
                                    <span className="bg-white/80 px-2 py-1 rounded">Large Pattern</span>
                                </div>
                            </div>
                        </ExampleSection>

                        <ExampleSection title="6. Table Formatting" commentary="Our table style prioritizes readability. A strong header color provides a clear starting point, while subtle row highlighting guides the eye. Semantic colors can be used within cells to draw attention to specific data points.">
                            <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Tables are powerful tools for presenting structured data. Use color and formatting to create visual hierarchy and convey information clearly. Rows or cells can be styled to highlight status or importance.</p>
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
                                                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.SemanticSuccessGreenLight, color: brandColors.SemanticSuccessGreen }}> Complete</span>
                                            </td>
                                            <td className="p-3" style={{color: brandColors.GrayDark }}>Tech Lead</td>
                                            <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-15</td>
                                        </tr>
                                         <tr className="border-b" style={{ backgroundColor: '#FFF8E1', borderColor: brandColors.GrayLight }}>
                                            <td className="p-3 font-medium" style={{color: brandColors.PrimaryText }}>API Key Provisioning</td>
                                            <td className="p-3">
                                                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.QuaternaryAccent, color: brandColors.PrimaryText }}> In Progress</span>
                                            </td>
                                            <td className="p-3" style={{color: brandColors.GrayDark }}>Client IT</td>
                                            <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-22</td>
                                        </tr>
                                         <tr className="border-b" style={{ backgroundColor: '#FFE8EB', borderColor: brandColors.GrayLight }}>
                                            <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>Database Credentials Update</td>
                                            <td className="p-3">
                                                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.PrimaryAccentDark, color: brandColors.PrimaryBackground }}> Blocked</span>
                                            </td>
                                            <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>Tech Lead</td>
                                            <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>2025-06-20</td>
                                        </tr>
                                        <tr className="border-b" style={{ borderColor: brandColors.GrayLight }}>
                                            <td className="p-3" style={{color: brandColors.PrimaryText }}>User Interface Mockups</td>
                                            <td className="p-3">
                                                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#D1EEF9', color: brandColors.GrayDark }}> Pending Review</span>
                                            </td>
                                            <td className="p-3" style={{color: brandColors.GrayDark }}>Design Team</td>
                                            <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ExampleSection>
                        
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
                                        <DemoNode bgColor={hexToRgba(brandColors.QuaternaryAccent, 0.1)} borderColor={brandColors.QuaternaryAccent} textColor={brandColors.PrimaryText} icon=" ">Azure DB</DemoNode>
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
                                                <div className="font-bold text-4xl mb-4" style={{ color: brandColors.PrimaryText, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>PRIMATIF</div>
                                                <h1 className="text-4xl font-bold mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>Enterprise Cloud Migration Strategy</h1>
                                                <p className="text-lg mb-8" style={{color: brandColors.GrayDark, fontFamily: 'Lato, sans-serif'}}>Prepared for: Acme Corporation</p>
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
                                                <div className="font-bold text-2xl" style={{ color: brandColors.PrimaryText, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>PRIMATIF</div>
                                                <div className="text-sm" style={{color: brandColors.GrayMid}}>Q2 Performance Review</div>
                                            </div>
                                            <div className="py-8">
                                                 <h2 className="text-xl font-bold mb-4 text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>Project Status Overview</h2>
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
                                                <div className="font-bold text-2xl" style={{ color: brandColors.PrimaryText, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>PRIMATIF</div>
                                                <div className="text-sm" style={{color: brandColors.GrayMid}}>Technical Whitepaper</div>
                                            </div>
                                            <div className="py-8">
                                                <h2 className="text-xl font-bold mb-2 text-gray-700" style={{fontFamily: 'Roboto, sans-serif'}}>3. Implementing Secure API Endpoints</h2>
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
                                                    <div className="font-bold text-xl mb-6" style={{ color: brandColors.PrimaryText, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>PRIMATIF AI</div>
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
