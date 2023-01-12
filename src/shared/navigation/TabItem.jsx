import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

const TabItem = ({ tabId, title }) => {
    const { activeTab, handleChangeTab } = useContext(AppContext);

    const isActive =
        activeTab === tabId
            ? 'text-blue-600 bg-gray-200'
            : 'bg-gray-50 hover:text-gray-600 hover:bg-gray-100';

    return (
        <li
            onClick={() => handleChangeTab(tabId)}
            className={`mr-1 inline-block p-4 cursor-pointer rounded-t-lg ${isActive}`}
            value="income"
            id="income"
        >
            {title}
        </li>
    );
};

export default TabItem;
