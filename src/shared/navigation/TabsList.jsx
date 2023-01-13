import React from 'react';

const TabsList = ({ children }) => {
    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            {children}
        </ul>
    );
};

export default TabsList;
