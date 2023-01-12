import React, { createContext, useState } from 'react';

import { INCOME_DETAILS } from '../constants/tabs';

export const AppContext = createContext({
    incomes: [],
    tax: 0.4,
    activeTab: INCOME_DETAILS,
    handleChangeTab: () => {}
});

/**
 * Will hold state only for tabs change
 */
const AppProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(INCOME_DETAILS);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    const value = {
        activeTab,
        handleChangeTab
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
