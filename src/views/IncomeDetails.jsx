import React from 'react';

import Dropdown from '../shared/form/Dropdown';

const IncomeDetails = () => {
    return (
        <div className="border-2 md:max-w-[50%]">
            <p className="mb-2">What is your total income?</p>
            <div className="mb-3">
                <Dropdown />
            </div>
            <p className="mb-2">Please choose income type</p>
            <div className="mb-3">GROSS BTN NET BTN</div>
            <button>THIS BTN IS TO CALCULATE</button>
        </div>
    );
};

export default IncomeDetails;
