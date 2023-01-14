import React from 'react';

import { GROSS, NET } from '../constants/income-type';

import Dropdown from '../shared/form/Dropdown';
import Input from '../shared/form/Input';
import Button from '../shared/form/Button';
import ArrowRightIcon from '../assets/icons/ArrowRightIcon';

const IncomeDetails = () => {
    return (
        <div className="border-2 md:max-w-[60%]">
            <p className="mb-2">What is your total income?</p>
            <div className="mb-3 flex flex-wrap ">
                <div className="w-full sx:w-[70%]">
                    <Input hasIcon />
                </div>
                <div className="w-full sx:w-[30%]">
                    <Dropdown />
                </div>
            </div>
            <p className="mb-2">Please choose income type</p>
            <div className="mb-3 flex gap-[10px]">
                <Button type="button" outlined value={GROSS}>
                    Gross Income
                </Button>
                <Button type="button" outlined value={NET}>
                    Net Income
                </Button>
            </div>
            <Button type="submit" customClasses="rounded">
                <div className="inline-flex">
                    Calculate <ArrowRightIcon customStyles="ml-2" />
                </div>
            </Button>
        </div>
    );
};

export default IncomeDetails;
