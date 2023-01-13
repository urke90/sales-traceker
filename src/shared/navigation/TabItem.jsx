import React from 'react';

const TabItem = ({ tabId, title, onTabChange, activeTab }) => {
    const isActive =
        activeTab === tabId
            ? 'text-blue-600 bg-gray-200'
            : 'bg-gray-50 hover:text-gray-600 hover:bg-gray-100';

    return (
        <li
            onClick={() => onTabChange(tabId)}
            className={`mr-1 inline-block p-4 cursor-pointer rounded-t-lg ${isActive}`}
            value="income"
            id="income"
        >
            {title}
        </li>
    );
};

export default TabItem;
