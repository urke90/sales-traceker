import React from 'react';

import { GROSS, NET } from '../constants/income-type';
import { useIncomeContext } from '../hooks/use-income-context';

import Dropdown from '../shared/form/Dropdown';
import Input from '../shared/form/Input';
import Button from '../shared/form/Button';
import ArrowRightIcon from '../assets/icons/ArrowRightIcon';

const IncomeDetails = () => {
    const {
        incomeType,
        inputIsTouched,
        inputIsValid,
        inputValue,
        formIsValid,
        handleIncomeTypeChange,
        handleChangeInputValue,
        handleOnBlurInput,
        handleSubmitIncome
    } = useIncomeContext();

    return (
        <form onSubmit={handleSubmitIncome}>
            <p className="mb-2">What is your total income?</p>
            <div className="mb-3 flex flex-wrap ">
                <div className="w-full sx:w-[70%]">
                    <Input
                        type="number"
                        hasIcon
                        onBlur={handleOnBlurInput}
                        onChange={handleChangeInputValue}
                        value={inputValue}
                        isValid={inputIsValid}
                        isTouched={inputIsTouched}
                    />
                </div>
                <div className="w-full sx:w-[30%]">
                    <Dropdown />
                </div>
            </div>
            <p className="mb-2">Please choose income type.</p>
            <div className="mb-3 flex gap-[10px]">
                <Button
                    type="button"
                    outlined={incomeType !== GROSS}
                    onClick={() => handleIncomeTypeChange(GROSS)}
                >
                    Gross Income
                </Button>
                <Button
                    type="button"
                    outlined={incomeType !== NET}
                    onClick={() => handleIncomeTypeChange(NET)}
                >
                    Net Income
                </Button>
            </div>
            <Button
                type="submit"
                customClasses="rounded"
                disabled={!formIsValid}
            >
                <div className="inline-flex">
                    Calculate <ArrowRightIcon customClasses="ml-2" />
                </div>
            </Button>
        </form>
    );
};

export default IncomeDetails;
