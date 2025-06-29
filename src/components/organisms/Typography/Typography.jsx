import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { fonts, typography, fontSizes, fontWeights } from '../../../data/typography.js';
import { ExampleSection } from '../../molecules/ExampleSection/ExampleSection.jsx';
import CodeBlock from '../../molecules/CodeBlock/CodeBlock.jsx';
import TextColorUsage from '../../molecules/TextColorUsage/TextColorUsage.jsx';

const Typography = () => {
    const tokenTable = (title, data, renderExample) => (
        <div className="mb-8">
            <h4 style={{...typography.h3, color: brandColors.PrimaryText, marginBottom: '1rem'}}>{title}</h4>
            <div className="overflow-hidden rounded-lg border" style={{ borderColor: brandColors.GrayLight }}>
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-3 text-left text-sm font-semibold" style={{color: brandColors.GrayDark}}>Token</th>
                            <th className="p-3 text-left text-sm font-semibold" style={{color: brandColors.GrayDark}}>Value</th>
                            <th className="p-3 text-left text-sm font-semibold" style={{color: brandColors.GrayDark}}>Example</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y" style={{ borderColor: brandColors.GrayLight }}>
                        {Object.entries(data).map(([key, value]) => (
                            <tr key={key} className="bg-white">
                                <td className="p-3 whitespace-nowrap" style={{...typography.code, color: brandColors.PrimaryAccent}}>{key}</td>
                                <td className="p-3 whitespace-nowrap" style={{...typography.code, color: brandColors.GrayDark}}>{value}</td>
                                <td className="p-3">{renderExample(key, value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <ExampleSection 
            title="Typography" 
            commentary="Our typographic system establishes a clear visual hierarchy and ensures brand consistency. It is built on a foundation of tokenized font sizes and weights, making it scalable and easy to maintain. Bebas Neue is used for strong, impactful headings, while Lato provides excellent readability for body copy."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h4 style={{...typography.h3, color: brandColors.PrimaryText, marginBottom: '0.5rem'}}>Heading Font</h4>
                    <p style={{fontFamily: fonts.heading, fontSize: fontSizes['4xl'], color: brandColors.PrimaryText}}>Bebas Neue</p>
                    <CodeBlock>fonts.heading</CodeBlock>
                </div>
                <div>
                    <h4 style={{...typography.h3, color: brandColors.PrimaryText, marginBottom: '0.5rem'}}>Body Font</h4>
                    <p style={{fontFamily: fonts.body, fontSize: fontSizes['4xl'], color: brandColors.PrimaryText}}>Lato</p>
                    <CodeBlock>fonts.body</CodeBlock>
                </div>
                <div>
                    <h4 style={{...typography.h3, color: brandColors.PrimaryText, marginBottom: '0.5rem'}}>Code Font</h4>
                    <p style={{fontFamily: fonts.code, fontSize: fontSizes['4xl'], color: brandColors.PrimaryText}}>Monospace</p>
                    <CodeBlock>fonts.code</CodeBlock>
                </div>
            </div>

            {tokenTable('Font Size Tokens', fontSizes, (key, value) => (
                <span style={{ fontSize: value, color: brandColors.PrimaryText }}>Primatif</span>
            ))}

            {tokenTable('Font Weight Tokens', fontWeights, (key, value) => (
                <span style={{ fontWeight: value, fontSize: fontSizes.xl, color: brandColors.PrimaryText }}>Primatif</span>
            ))}

            <div>
                <h3 style={{...typography.h2, color: brandColors.PrimaryText, borderBottom: `1px solid ${brandColors.GrayLight}`, paddingBottom: '0.5rem', marginBottom: '1rem'}}>Typographic Scale</h3>
                <div className="space-y-6">
                    <div>
                        <p style={{...typography.h1, color: brandColors.PrimaryText, marginBottom: 0}}>Page Title (h1)</p>
                        <CodeBlock>{`{
    fontFamily: fonts.heading, // Bebas Neue
    fontSize: fontSizes['5xl'], // 3rem
    fontWeight: fontWeights.bold, // 700
}`}</CodeBlock>
                    </div>
                    <div>
                        <p style={{...typography.h2, color: brandColors.PrimaryText, marginBottom: 0}}>Section Title (h2)</p>
                        <CodeBlock>{`{
    fontFamily: fonts.heading, // Bebas Neue
    fontSize: fontSizes['4xl'], // 2.25rem
    fontWeight: fontWeights.bold, // 700
}`}</CodeBlock>
                    </div>
                    <div>
                        <p style={{...typography.h3, color: brandColors.PrimaryText, marginBottom: 0}}>Component Title (h3)</p>
                        <CodeBlock>{`{
    fontFamily: fonts.heading, // Bebas Neue
    fontSize: fontSizes['2xl'], // 1.5rem
    fontWeight: fontWeights.bold, // 700
}`}</CodeBlock>
                    </div>
                    <div>
                        <p style={{...typography.body, color: brandColors.PrimaryText, fontSize: fontSizes.lg}}>Body Text</p>
                        <CodeBlock>{`{
    fontFamily: fonts.body, // Lato
    fontSize: fontSizes.base, // 1rem
    fontWeight: fontWeights.regular, // 400
}`}</CodeBlock>
                    </div>
                    <div>
                        <p style={{...typography.subtitle, color: brandColors.PrimaryText}}>Subtitle Text</p>
                        <CodeBlock>{`{
    fontFamily: fonts.subtitle, // Lato
    fontSize: fontSizes.lg, // 1.125rem
    fontWeight: fontWeights.regular, // 400
}`}</CodeBlock>
                    </div>
                </div>
            </div>

            <TextColorUsage />
        </ExampleSection>
    );
};

export default Typography;
