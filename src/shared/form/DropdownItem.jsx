import React from 'react';

const DropdownItem = ({ title, onFrequencyChange, value, isActive }) => {
    return (
        <li
            className={`block cursor-pointer px-4 py-2 ${
                isActive ? 'bg-blue-300 hover:none' : 'hover:bg-gray-100'
            }`}
            onClick={() => onFrequencyChange(value)}
        >
            {title}
        </li>
    );
};

export default DropdownItem;
