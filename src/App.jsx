import React, { useState, useCallback } from 'react';

import { INCOME_DETAILS, INCOME } from './constants/tabs';
import { TABS_CONFIG } from './config/tabs.config';

import Layout from './layout/Layout';
import Header from './layout/Header';
import TabsList from './shared/navigation/TabsList';
import TabItem from './shared/navigation/TabItem';
import Income from './views/Income';
import IncomeDetails from './views/IncomeDetails';
import IncomeProvider from './context/income-context';

import './App.css';

// * FOR REFEREBCE, DELETE LATER https://www.loom.com/share/990f857fc0b24a40af6a4e435d7ee4d6

const App = () => {
    // revert back to INCOME_DETAILS after finish with Income component
    const [activeTab, setActiveTab] = useState(INCOME);

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
        <div className="relative flex pt-[50px] sx:h-screen sx:pt-0 justify-center items-center sx:m-auto">
            <Layout activeTab={activeTab}>
                <TabsList>{tabItems}</TabsList>
                <div className="border-2 p-5">
                    <Header />
                    <IncomeProvider>
                        {activeTab === INCOME_DETAILS ? (
                            <IncomeDetails />
                        ) : (
                            <Income />
                        )}
                    </IncomeProvider>
                </div>
            </Layout>
        </div>
    );
};

export default App;
