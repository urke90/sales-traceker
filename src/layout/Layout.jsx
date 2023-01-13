import React from 'react';

import TabsList from '../shared/navigation/TabsList';
import Header from './Header';

const Layout = () => {
    return (
        <div className="container max-w-[90%] md:max-w-[80%] lg:max-w-[70%] absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]">
            <TabsList />
            <div className="border-2 p-5">
                <Header />
                <div>Here will be VIEWS depending on selected tab</div>
            </div>
        </div>
    );
};

export default Layout;
