import React from 'react';
import { INCOME, INCOME_DETAILS } from '../../constants/tabs';

import TabItem from './TabItem';

const TABS_CONFIG = [
    {
        title: 'Income',
        tabId: INCOME
    },
    {
        title: 'Income Details',
        tabId: INCOME_DETAILS
    }
];

const TabsList = () => {
    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            {TABS_CONFIG.length
                ? TABS_CONFIG.map(({ title, tabId }) => (
                      <TabItem key={tabId} title={title} tabId={tabId} />
                  ))
                : null}
        </ul>
    );
};

export default TabsList;
