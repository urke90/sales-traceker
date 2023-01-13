import React, { useState, useMemo, useCallback } from 'react';

import { INCOME_DETAILS } from './constants/tabs';
import { TABS_CONFIG } from './config/tabs.config';

import Layout from './layout/Layout';
import Header from './layout/Header';
import TabsList from './shared/navigation/TabsList';
import TabItem from './shared/navigation/TabItem';
import Income from './views/Income';
import IncomeDetails from './views/IncomeDetails';

import './App.css';

const App = () => {
    const [activeTab, setActiveTab] = useState(INCOME_DETAILS);

    const handleChangeTab = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    const tabItems =
        TABS_CONFIG.length > 0
            ? TABS_CONFIG.map(({ tabId, title }) => (
                  <TabItem
                      key={tabId}
                      tabId={tabId}
                      title={title}
                      activeTab={activeTab}
                      onTabChange={handleChangeTab}
                  />
              ))
            : null;

    return (
        <div className="h-screen relative">
            <Layout>
                <TabsList>{tabItems}</TabsList>
                <div className="border-2 p-5">
                    <Header />
                    {activeTab === INCOME_DETAILS ? (
                        <IncomeDetails />
                    ) : (
                        <Income />
                    )}
                </div>
            </Layout>
        </div>
    );
};

export default App;
