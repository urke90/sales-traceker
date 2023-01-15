import React from 'react';

import { INCOME } from '../constants/tabs';

// const bla = "container max-w-[90%] md:max-w-[50%] lg:max-w-[50%] absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]"

const Layout = ({ children, activeTab }) => {
    const className =
        activeTab === INCOME
            ? 'md:max-w-[90%] lg:max-w-[80%]'
            : 'md:max-w-[50%] lg:max-w-[50%]';

    return (
        <div className={`container max-w-[90%] ${className}`}>{children}</div>
    );
};

export default Layout;
