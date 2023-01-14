import React from 'react';

import Dropdown from '../shared/form/Dropdown';
import Input from '../shared/form/Input';

const IncomeDetails = () => {
    return (
        <div className="border-2 md:max-w-[60%]">
            <p className="mb-2">What is your total income?</p>
            <div className="mb-3 flex flex-wrap">
                <div className="w-full sx:w-[70%]">
                    <Input hasIcon />
                </div>
                <div className="w-full sx:w-[30%]">
                    <Dropdown />
                </div>
            </div>
            <p className="mb-2">Please choose income type</p>
            <div className="mb-3">GROSS BTN NET BTN</div>
            <button>THIS BTN IS TO CALCULATE</button>
        </div>
    );
};

export default IncomeDetails;
