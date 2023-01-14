import React, { createContext, useCallback, useMemo, useState } from 'react';

import { GROSS, NET } from '../constants/income-type';
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
    type: '',
    tax: 0.4,
    income: 0
};

export const IncomeContext = createContext(incomeObj);

// wrapped functions in useCallback and 'value' obj in useMemo for memoization if we should use
const IncomeProvider = ({ children }) => {
    const [incomeType, setIncomeType] = useState('');
    const [incomeFrequency, setIncomeFrequency] = useState(WEEKLY);

    const handleIncomeTypeChange = useCallback((value) => {
        setIncomeType(value);
    }, []);

    const handleIncomeFrequencyChange = useCallback((value) => {
        setIncomeFrequency(value);
    }, []);

    const value = {
        incomeType,
        handleIncomeTypeChange,
        incomeFrequency,
        handleIncomeFrequencyChange
    };

    return (
        <IncomeContext.Provider value={value}>
            {children}
        </IncomeContext.Provider>
    );
};

export default IncomeProvider;

/**
 * 1. income can be NET or GROSS
 * 2. income frequency can be WEEKLY, FORTNIGHTLY, MONTHLY,, ANNUALLY;
 * 3. switch to INCOME tab after adding income
 *
 *
 */
