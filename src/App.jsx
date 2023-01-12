import React from 'react';

import AppProvider from './context/AppContext';
import Layout from './layout/Layout';

import './App.css';

const App = () => {
    return (
        <div className="h-screen relative">
            <AppProvider>
                <Layout />
            </AppProvider>
        </div>
    );
};

export default App;
