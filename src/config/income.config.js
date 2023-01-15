import {
    WEEKLY,
    FORTNIGHTLY,
    MONTHLY,
    ANNUALLY
} from '../constants/income-frequency';

export const INCOME_CONTEXT = {
    [WEEKLY]: {
        id: WEEKLY,
        gross: 0,
        tax: 0,
        net: 0
    },
    [FORTNIGHTLY]: {
        id: FORTNIGHTLY,
        gross: 0,
        tax: 0,
        net: 0
    },
    [MONTHLY]: {
        id: MONTHLY,
        gross: 0,
        tax: 0,
        net: 0
    },
    [ANNUALLY]: {
        id: ANNUALLY,
        gross: 0,
        tax: 0,
        net: 0
    },
    incomeType: '',
    incomeFrequency: WEEKLY,
    taxFraction: 0.4,
    inputIsTouched: false,
    inputIsValid: true, // set this to true so that we don't get invalid input before entering income
    inputValue: 0,
    formIsValid: false
};
