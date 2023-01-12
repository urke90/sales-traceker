import React from 'react';

const TabItem = ({ isActive, tabId, title, onTabChange }) => {
    console.log('isActive', isActive);
    console.log('tabId', tabId);

    const isActiveTabClass = isActive
        ? 'text-blue-600 bg-gray-300'
        : ' hover:text-gray-600 hover:bg-gray-200';

    return (
        <li
            onClick={() => onTabChange(tabId)}
            className={`mr-1 inline-block p-4 cursor-pointer rounded-t-lg bg-gray-100 ${isActiveTabClass}`}
            value="income"
            id="income"
        >
            {title}
        </li>
    );
};

export default TabItem;
