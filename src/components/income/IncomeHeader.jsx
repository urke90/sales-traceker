import React from 'react';

import Dropdown from '../../shared/form/Dropdown';

const IncomeHeader = ({ incomeFrequency, netIncome }) => {
    const frequency = incomeFrequency.toLowerCase();

    return (
        <div className="p-3">
            <p className="text-center mb-2">Your net {frequency} income</p>
            <div className="flex gap-[10px] justify-between">
                <span className="inline-flex bg-blue-600 text-white items-center px-5 sx:px-10 rounded-[15px]">
                    $ {netIncome}
                </span>
                <Dropdown />
            </div>
        </div>
    );
};

export default IncomeHeader;
