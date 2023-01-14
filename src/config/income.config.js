import {
    WEEKLY,
    FORTNIGHTLY,
    MONTHLY,
    ANNUALLY
} from '../constants/income-frequency';

export const INCOME_CONTEXT = {
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
    value: 0
};
