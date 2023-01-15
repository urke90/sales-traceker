import React from 'react';

import { INCOME } from '../constants/tabs';

import Button from '../shared/form/Button';
import CalculatorIcon from '../assets/icons/CalculatorIcon';
import DownloadIcon from '../assets/icons/DownloadIcon';

// Download btn added but not sure what extactly should it download so left it without handler
const Header = ({ activeTab }) => {
    const isIncomeTab = activeTab === INCOME;

    return (
        <div
            className={`flex flex-wrap gap-y-[10px] items-center mb-4 ${
                isIncomeTab ? 'justify-between' : ''
            }`}
        >
            <div className="flex items">
                <CalculatorIcon customClasses="mr-2" />
                <p className="">Income tax calculator</p>
            </div>
            <div className="w-full sx:w-[140px]">
                {isIncomeTab && (
                    <Button>
                        Download <DownloadIcon customClasses="ml-2" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Header;
