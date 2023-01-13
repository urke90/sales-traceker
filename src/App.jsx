import React, { useContext } from 'react';

import { AppContext } from './context/AppContext';
import { INCOME_DETAILS } from './constants/tabs';

import Layout from './layout/Layout';
import Header from './layout/Header';
import TabsList from './shared/navigation/TabsList';
import Income from './views/Income';
import IncomeDetails from './views/IncomeDetails';

import './App.css';

const App = () => {
    const { activeTab } = useContext(AppContext);

    return (
        <div className="h-screen relative">
            <Layout>
                <TabsList />
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
