import React from 'react';

const Layout = () => {
    return (
        <div className="container max-w-[90%] md:max-w-[80%] lg:max-w-[70%] absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]">
            <div className="border-2">HERE ARE TABS</div>
            <div className="border-2 p-5 ">
                <header className="mb-3">THIS IS CONTAINER HEADER</header>
                <div>Here will be VIEWS depending on selected tab</div>
            </div>
        </div>
    );
};

export default Layout;
