import React from 'react';

import { INCOME } from '../constants/tabs';

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
