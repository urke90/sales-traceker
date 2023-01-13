import React from 'react';
import ReactDOM from 'react-dom/client';

import AppProvider from './context/AppContext';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>
);
