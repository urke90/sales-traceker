import React, { createContext, useCallback, useReducer, useState } from 'react';

import { GROSS, NET } from '../constants/income-type';
import { INCOME_CONTEXT } from '../config/income.config';
import { BLUR_INPUT, CHANGE_VALUE } from '../constants/input-reducer-actions';

import {
    WEEKLY,
    FORTNIGHTLY,
    MONTHLY,
    ANNUALLY
} from '../constants/income-frequency';

const incomeObj = {
    [WEEKLY]: {
        gross: 0,
        tax: 0,
        net: 0
    },
    [FORTNIGHTLY]: {
        gross: 0,
        tax: 0,
        net: 0
    },
    [MONTHLY]: {
        gross: 0,
        tax: 0,
        net: 0
    },
    [ANNUALLY]: {
        gross: 0,
        tax: 0,
        net: 0
    },
    incomeFrequency: WEEKLY,
    incomeType: '',
    tax: 0.4,
    value: 0
};

export const IncomeContext = createContext(INCOME_CONTEXT);

const inputInitState = {
    value: 0,
    isTouched: false,
    isValid: true
};

const inputReducer = (state, action) => {
    switch (action.type) {
        case BLUR_INPUT: {
            return { ...state, isTouched: true };
        }
        case CHANGE_VALUE: {
            const { value } = action.payload;
            let floatValue = parseFloat(value);

            if (value.trim() === '') floatValue = 0;

            const isValid = typeof floatValue === 'number' && floatValue !== 0;

            return { ...state, isValid, value: floatValue };
        }

        default:
            throw new Error('Unsupported action type');
    }
};

// wrapped functions in useCallback and 'value' obj in useMemo for memoization if we should use
const IncomeProvider = ({ children }) => {
    const [incomeType, setIncomeType] = useState('');
    const [incomeFrequency, setIncomeFrequency] = useState(WEEKLY);
    const [inputState, dispatch] = useReducer(inputReducer, inputInitState);

    const {
        isTouched: inputIsTouched,
        isValid: inputIsValid,
        value: inputValue
    } = inputState;

    const formIsValid =
        inputIsValid && !!inputValue && !!incomeFrequency && !!incomeType;

    console.log('inputState U CONTEXTU', inputState);

    const handleIncomeTypeChange = useCallback((val) => {
        setIncomeType(val);
    }, []);

    const handleIncomeFrequencyChange = useCallback((value) => {
        setIncomeFrequency(val);
    }, []);

    const handleChangeInputValue = useCallback((evt) => {
        const value = evt.target.value;
        dispatch({ type: CHANGE_VALUE, payload: { value } });
    }, []);

    const handleOnBlurInput = useCallback(() => {
        dispatch({ type: BLUR_INPUT });
    }, []);

    const ctxValue = {
        incomeType,
        handleIncomeTypeChange,
        incomeFrequency,
        handleIncomeFrequencyChange,
        handleChangeInputValue,
        handleOnBlurInput,
        inputIsTouched,
        inputIsValid,
        inputValue,
        formIsValid
    };

    return (
        <IncomeContext.Provider value={ctxValue}>
            {children}
        </IncomeContext.Provider>
    );
};

export default IncomeProvider;

/**
 * 1. income can be NET or GROSS
 * 2. income frequency can be WEEKLY, FORTNIGHTLY, MONTHLY,, ANNUALLY;
 * 3. switch to INCOME tab after adding income
 */
