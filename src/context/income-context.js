import React, { createContext, useCallback, useReducer, useState } from 'react';

import { inputReducer, inputInitState } from '../reducers/input-reducer';
import { incomeReducer, incomeInitState } from '../reducers/income-reducer';

import { GROSS, NET } from '../constants/income-type';
import { INCOME_CONTEXT } from '../config/income.config';
import { BLUR_INPUT, CHANGE_VALUE } from '../constants/input-reducer-actions';
import { WEEKLY } from '../constants/income-frequency';

export const IncomeContext = createContext(INCOME_CONTEXT);

const IncomeProvider = ({ children }) => {
    const [incomeType, setIncomeType] = useState('');
    const [incomeFrequency, setIncomeFrequency] = useState(WEEKLY);
    const [inputState, dispatchInput] = useReducer(
        inputReducer,
        inputInitState
    );
    const [incomes, dispatchIncomes] = useReducer(
        incomeReducer,
        incomeInitState
    );
    const taxFraction = 0.4;

    const {
        isTouched: inputIsTouched,
        isValid: inputIsValid,
        value: inputValue
    } = inputState;

    const formIsValid =
        inputIsValid && !!inputValue && !!incomeFrequency && !!incomeType;

    const handleIncomeTypeChange = useCallback((val) => {
        setIncomeType(val);
    }, []);

    const handleIncomeFrequencyChange = useCallback((val) => {
        setIncomeFrequency(val);
    }, []);

    const handleChangeInputValue = useCallback((evt) => {
        const value = evt.target.value;
        dispatchInput({ type: CHANGE_VALUE, payload: { value } });
    }, []);

    const handleOnBlurInput = useCallback(() => {
        dispatchInput({ type: BLUR_INPUT });
    }, []);

    const handleAddIncome = () => {
        const type = incomeType === GROSS ? GROSS : NET;

        dispatchIncomes({
            type,
            payload: { inputValue, incomeFrequency, taxFraction }
        });
    };

    const ctxValue = {
        incomeType,
        handleIncomeTypeChange,
        incomeFrequency,
        handleIncomeFrequencyChange,
        handleChangeInputValue,
        handleOnBlurInput,
        handleAddIncome,
        inputIsTouched,
        inputIsValid,
        inputValue,
        taxFraction,
        formIsValid,
        incomes
    };

    return (
        <IncomeContext.Provider value={ctxValue}>
            {children}
        </IncomeContext.Provider>
    );
};

export default IncomeProvider;
