import React from 'react';
import { brandColors } from '../../data/colors.js';
import { typography } from '../../data/typography.js';
import { WithSnippet } from '../WithSnippet.jsx';
import { patterns, patternSizes } from '../../data/patterns.js';

const PersonalBanking = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A static example of a personal banking dashboard, demonstrating how to display financial information clearly using semantic colors and a clean layout.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li>A main container with a <code>max-w-md</code>, <code>rounded-lg</code> corners, a <code>shadow-lg</code>, and a <code>GrayLight</code> border.</li>
                    <li><strong>Balance Section:</strong> A centered header displaying the total balance, using the <code>mainTitle</code> typography style. It is separated by a <code>border-b</code>.</li>
                    <li><strong>Quick Actions:</strong> A row of three buttons for common actions like 'Transfer' and 'Pay Bills', arranged with <code>flex justify-around</code>.</li>
                    <li><strong>Transaction List:</strong> A vertically stacked list (<code>ul</code> with <code>space-y-4</code>) of recent transactions, introduced by a <code>subTitle</code>.</li>
                </ul>
            </li>
            <li><strong>Color & Styling Semantics:</strong>
                <ul>
                    <li><strong>Actions:</strong> Action buttons use a solid <code>InfoBlue</code> background with <code>PrimaryBackground</code> (white) text for high visibility.</li>
                    <li><strong>Credits (Incoming):</strong> Transactions of type 'credit' are styled with <code>SemanticSuccessGreen</code> for the amount text. The icon background is <code>SemanticSuccessGreenLight</code>.</li>
                    <li><strong>Debits (Outgoing):</strong> Transactions of type 'debit' are styled with <code>ErrorRed</code> for the amount text. The icon background is <code>ErrorRedLight</code>.</li>
                    <li><strong>Transaction Items:</strong> Each list item has a <code>SecondaryBackground</code> to visually group it.</li>
                </ul>
            </li>
            <li><strong>Typography:</strong>
                <ul>
                    <li>The main balance uses the <code>mainTitle</code> style from <code>typography.js</code>.</li>
                    <li>The 'Recent Transactions' heading uses the <code>subTitle</code> style.</li>
                    <li>A clear hierarchy is established with <code>font-semibold</code> for transaction descriptions and <code>text-sm</code> for secondary details like the company name.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>The transaction list is dynamically rendered by mapping over a <code>transactions</code> data array.</li>
                    <li><strong>Conditional styling is crucial:</strong> The colors and text content change based on the <code>type</code> property ('credit' or 'debit') of each transaction object. This is a core pattern for displaying financial data.</li>
                    <li>Transaction amounts are formatted to two decimal places and prefixed with a '+' or '-' sign.</li>
                    <li>Icons are simple text characters placed within a colored, circular container, which provides a strong visual cue for the transaction type.</li>
                </ul>
            </li>
        </ul>
    );

    const transactions = [
        { icon: '↓', description: 'Direct Deposit', company: 'Work Inc.', amount: 2500.00, type: 'credit' },
        { icon: '↑', description: 'Grocery Store', company: 'SuperMart', amount: -75.50, type: 'debit' },
        { icon: '↑', description: 'Streaming Service', company: 'WatchIt', amount: -15.99, type: 'debit' },
        { icon: '↓', description: 'Refund', company: 'Online Store', amount: 54.99, type: 'credit' },
    ];

    return (
        <WithSnippet snippet={snippet}>
            <h5 className="font-medium mb-2 text-gray-600">Personal Banking</h5>
            <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: brandColors.PrimaryBackground, border: `1px solid ${brandColors.GrayLight}` }}>
                <div className="text-center border-b" style={{ borderColor: brandColors.GrayLight, backgroundImage: patterns.subtle, backgroundSize: patternSizes.small }}>
                    <div className="py-6">
                        <p className="text-sm mb-1">
                            <span className="bg-white/80 px-2 py-1 rounded" style={{ color: brandColors.GrayMid }}>Total Balance</span>
                        </p>
                        <h2 className="text-4xl font-bold" style={{ ...typography.mainTitle, color: brandColors.PrimaryText }}>$5,420.50</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex justify-around mb-6">
                        <button className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: brandColors.InfoBlue, color: brandColors.PrimaryBackground }}>Transfer</button>
                        <button className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: brandColors.InfoBlue, color: brandColors.PrimaryBackground }}>Pay Bills</button>
                        <button className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: brandColors.InfoBlue, color: brandColors.PrimaryBackground }}>Deposit</button>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4" style={{ ...typography.subTitle, color: brandColors.PrimaryText }}>Recent Transactions</h3>
                        <ul className="space-y-4">
                            {transactions.map((tx, index) => (
                                <li key={index} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: brandColors.SecondaryBackground }}>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: tx.type === 'credit' ? brandColors.SemanticSuccessGreenLight : brandColors.ErrorRedLight, color: tx.type === 'credit' ? brandColors.SemanticSuccessGreen : brandColors.ErrorRed }}>
                                            {tx.icon}
                                        </div>
                                        <div>
                                            <p className="font-semibold" style={{ color: brandColors.PrimaryText }}>{tx.description}</p>
                                            <p className="text-sm" style={{ color: brandColors.GrayMid }}>{tx.company}</p>
                                        </div>
                                    </div>
                                    <div className="font-bold" style={{ color: tx.type === 'credit' ? brandColors.SemanticSuccessGreen : brandColors.ErrorRed }}>
                                        {tx.type === 'credit' ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default PersonalBanking;
