import React from 'react';
import { brandColors } from '../../data/colors.js';
import { WithSnippet } from '../WithSnippet.jsx';
import { patterns, patternSizes } from '../../data/patterns.js';

const DataDashboard = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A static example of a project analytics dashboard, showcasing key performance indicators (KPIs) and data visualizations like bar and line charts.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li>The main container has a <code>rounded-lg</code> border, <code>shadow-lg</code>, and is styled with <code>SecondaryBackground</code>, a <code>GrayLight</code> border, and the <code>patterns.subtle</code> overlay.</li>
                    <li>The layout uses a <code>space-y-6</code> utility for vertical spacing between sections.</li>
                    <li><strong>KPI Cards:</strong> A <code>grid</code> with <code>grid-cols-3</code> and a <code>gap-4</code> displays the main metrics. Each card has a <code>bg-white</code> background, <code>rounded-lg</code> corners, a <code>shadow</code>, and <code>p-4</code> padding.</li>
                    <li><strong>Chart Section:</strong> A responsive grid (<code>grid-cols-1 md:grid-cols-3</code>) holds the charts. The bar chart occupies one column, and the line chart spans two (<code>col-span-2</code>).</li>
                </ul>
            </li>
            <li><strong>Color & Styling:</strong>
                <ul>
                    <li><strong>KPI Values:</strong> Each metric is color-coded for semantic meaning: <code>AccentDeepBlue</code> for neutral data, <code>SemanticSuccessGreen</code> for positive outcomes, and <code>PrimaryAccent</code> for critical alerts.</li>
                    <li><strong>Bar Chart:</strong> The bars are styled with <code>SecondaryAccent</code> and have a <code>rounded-t-sm</code> shape.</li>
                    <li><strong>Line Chart:</strong> The trend line is drawn using an SVG <code>path</code> with a <code>stroke</code> of <code>PrimaryAccent</code> and a <code>strokeWidth</code> of 2.</li>
                </ul>
            </li>
            <li><strong>Typography:</strong>
                <ul>
                    <li>The main dashboard title ("Project Analytics") is a <code>text-2xl</code> bold heading.</li>
                    <li>KPI card titles are <code>text-sm</code>, <code>font-bold</code>, and colored with <code>text-gray-500</code>.</li>
                    <li>KPI numerical values are large and bold (<code>text-3xl font-bold</code>) for emphasis.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>The bar chart is created using flexbox (<code>flex items-end</code>) and simple <code>div</code> elements with varying heights to represent data.</li>
                    <li>The line chart is an SVG element with a hardcoded <code>path</code>, demonstrating how to integrate vector graphics that use brand colors.</li>
                    <li>The responsive grid for the charts ensures the layout adapts gracefully to different screen sizes.</li>
                </ul>
            </li>
        </ul>
    );

    const BarChart = () => (
        <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="text-gray-500 text-sm font-bold mb-2">Monthly Revenue</h4>
            <div className="flex items-end h-32 space-x-2">
                <div className="w-full h-1/3 rounded-t-sm" style={{backgroundColor: brandColors.SecondaryAccent}}></div>
                <div className="w-full h-2/3 rounded-t-sm" style={{backgroundColor: brandColors.SecondaryAccent}}></div>
                <div className="w-full h-full rounded-t-sm" style={{backgroundColor: brandColors.SecondaryAccent}}></div>
                <div className="w-full h-1/2 rounded-t-sm" style={{backgroundColor: brandColors.SecondaryAccent}}></div>
                <div className="w-full h-3/4 rounded-t-sm" style={{backgroundColor: brandColors.SecondaryAccent}}></div>
            </div>
        </div>
    );

    const LineChart = () => (
        <div className="p-4 bg-white rounded-lg shadow col-span-2">
            <h4 className="text-gray-500 text-sm font-bold mb-2">User Engagement</h4>
            <div className="h-32 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M 0,30 L 20,10 L 40,20 L 60,5 L 80,15 L 100,25" stroke={brandColors.PrimaryAccent} strokeWidth="2" fill="none" />
                </svg>
            </div>
        </div>
    );

    return (
        <WithSnippet snippet={snippet}>
            <div>
                <h5 className="font-medium mb-2 text-gray-600">Data Dashboard</h5>
                <div className="rounded-lg shadow-lg p-6 space-y-6" style={{backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}`, backgroundImage: patterns.subtle, backgroundSize: patternSizes.small}}>
                    <h3 className="text-2xl font-bold">Project Analytics</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-lg shadow"><h4 className="text-gray-500 text-sm font-bold">Active Projects</h4><p className="text-3xl font-bold" style={{color: brandColors.AccentDeepBlue}}>12</p></div>
                        <div className="p-4 bg-white rounded-lg shadow"><h4 className="text-gray-500 text-sm font-bold">On-time Completion</h4><p className="text-3xl font-bold" style={{color: brandColors.SemanticSuccessGreen}}>92%</p></div>
                        <div className="p-4 bg-white rounded-lg shadow"><h4 className="text-gray-500 text-sm font-bold">Critical Alerts</h4><p className="text-3xl font-bold" style={{color: brandColors.PrimaryAccent}}>1</p></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <BarChart />
                        <LineChart />
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default DataDashboard;
