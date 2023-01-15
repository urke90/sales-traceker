import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="container max-w-[90%] md:max-w-[50%] lg:max-w-[50%] absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]">
            {children}
        </div>
    );
};

export default Layout;
