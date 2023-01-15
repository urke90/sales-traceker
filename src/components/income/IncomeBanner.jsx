import React from 'react';

import Button from '../../shared/form/Button';
import HouseIcon from '../../assets/icons/HouseIcon';

// Button has no onClick handler since not sure what should it do
const IncomeBanner = () => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between bg-blue-100 py-5 px-3 rounded border-r-4 border-blue-600">
            <HouseIcon customClasses="text-blue-600 mb-2 md:mb-0" />
            <p className="mb-4 md:mb-0">Compare lenders and get your finance</p>
            <div className="max-w-[150px]">
                <Button>Apply now</Button>
            </div>
        </footer>
    );
};

export default IncomeBanner;
