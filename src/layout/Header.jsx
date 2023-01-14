import React from 'react';

import CalculatorIcon from '../assets/icons/CalculatorIcon';

const Header = () => {
    return (
        <div className="mb-4 flex">
            <CalculatorIcon customClasses="mr-2" />
            <p className="self-end">Income tax calculator</p>
        </div>
    );
};

export default Header;
