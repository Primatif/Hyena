import React from 'react';
import { brandColors } from '../../../data/colors.js';

const ColorDisplayTable = ({ title, description, colors }) => (
    <div className="mb-8">
        <h4 className="text-lg font-bold mb-2" style={{ color: brandColors.PrimaryText }}>{title}</h4>
        {description && <div className="text-sm mb-4" style={{ color: brandColors.PrimaryText }}>{description}</div>}
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

export default ColorDisplayTable;
