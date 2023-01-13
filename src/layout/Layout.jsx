import React from 'react';

import TabsList from '../shared/navigation/TabsList';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="container max-w-[90%] md:max-w-[80%] lg:max-w-[70%] absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]">
            {children}
        </div>
    );
};

export default Layout;
