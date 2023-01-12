import React, { createContext, useState } from 'react';

export const AppContext = createContext({
    incomes: [],
    tax: 0.4,
    activeTab: 'income-details',
    handleChangeTab: () => {}
});

/**
 * Will hold state only for tabs change
 */
const AppProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('income-details');

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
