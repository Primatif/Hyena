import React from 'react';
import { brandColors } from '../../data/colors.js';
import { typography } from '../../data/typography.js';
import { WithSnippet } from '../WithSnippet.jsx';
import { patterns, patternSizes } from '../../data/patterns.js';

const TodoList = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A redesigned static example of a to-do list application.</li>
            <li><strong>Theme:</strong> Clean and spacious light theme focused on clarity.</li>
            <li><strong>Layout:</strong>
                <ul>
                    <li>A distinct header bar with a subtle checkered pattern using <code>SecondaryBackground</code>.</li>
                    <li>A list-based design where each task is a distinct card within the content area.</li>
                </ul>
            </li>
            <li><strong>Colors & Semantics:</strong>
                <ul>
                    <li>Priority is shown with a colored text tag (High, Medium, Low).</li>
                    <li><code>ErrorRed</code> for High priority.</li>
                    <li><code>WarningYellow</code> for Medium priority.</li>
                    <li><code>InfoBlue</code> for Low priority.</li>
                    <li>Completed items are faded out and have a strikethrough to clearly separate them from active tasks.</li>
                </ul>
            </li>
            <li><strong>Icons:</strong> Custom styled checkbox for a more polished look.</li>
        </ul>
    );

    const tasks = [
        { text: 'Finalize Q3 report', priority: 'high', completed: false },
        { text: 'Schedule team meeting', priority: 'medium', completed: false },
        { text: 'Review project mockups', priority: 'high', completed: true },
        { text: 'Update documentation', priority: 'low', completed: false },
    ];

    const priorityStyles = {
        high: { color: brandColors.ErrorRed, name: 'High' },
        medium: { color: brandColors.WarningYellow, name: 'Medium' },
        low: { color: brandColors.InfoBlue, name: 'Low' },
    };

    const CheckboxIcon = ({ completed }) => (
        <div className={`w-6 h-6 rounded-full flex-shrink-0 mr-4 flex items-center justify-center border-2 ${completed ? 'border-transparent' : 'border-gray-300'}`} style={{ backgroundColor: completed ? brandColors.SemanticSuccessGreen : 'transparent' }}>
            {completed && <svg className="w-4 h-4" fill={brandColors.PrimaryBackground} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>}
        </div>
    );

    return (
        <WithSnippet snippet={snippet}>
            <h5 className="font-medium mb-2 text-gray-600">To-Do List</h5>
            <div className="w-full max-w-lg mx-auto rounded-lg shadow-lg" style={{ backgroundColor: brandColors.PrimaryBackground, border: `1px solid ${brandColors.GrayLight}` }}>
                <div 
                    className="flex justify-between items-center p-4 rounded-t-lg" 
                    style={{
                        backgroundColor: brandColors.SecondaryBackground, 
                        backgroundImage: patterns.subtle, 
                        backgroundSize: patternSizes.small, 
                        borderBottom: `1px solid ${brandColors.GrayLight}`
                    }}
                >
                    <h2 className="text-2xl font-bold" style={{ ...typography.mainTitle, color: brandColors.PrimaryText }}>Today's Tasks</h2>
                    <button className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: brandColors.PrimaryAccent, color: brandColors.PrimaryBackground }}>+ New Task</button>
                </div>
                <div className="space-y-4 p-4">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 rounded-lg transition-all duration-200"
                            style={{
                                backgroundColor: task.completed ? brandColors.SecondaryBackground : brandColors.PrimaryBackground,
                                opacity: task.completed ? 0.6 : 1,
                                boxShadow: task.completed ? 'none' : '0 1px 3px 0 rgba(0,0,0,0.1)',
                            }}
                        >
                            <CheckboxIcon completed={task.completed} />
                            <span
                                className="flex-grow font-medium"
                                style={{
                                    color: brandColors.PrimaryText,
                                    textDecoration: task.completed ? 'line-through' : 'none',
                                }}
                            >
                                {task.text}
                            </span>
                            {!task.completed && (
                                <span className="text-xs font-bold uppercase px-2 py-1 rounded-full ml-4" style={{ color: priorityStyles[task.priority].color, backgroundColor: 'rgba(0,0,0,0.05)' }}>
                                    {priorityStyles[task.priority].name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </WithSnippet>
    );
};

export default TodoList;
