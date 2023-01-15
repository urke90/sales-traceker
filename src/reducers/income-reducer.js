import { calculateNetIncome, calculateGrossIncome } from '../util/income-data';
import {
    WEEKLY,
    FORTNIGHTLY,
    MONTHLY,
    ANNUALLY
} from '../constants/income-frequency';
import { GROSS, NET } from '../constants/income-type';

export const incomeInitState = {
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
    }
};

export const incomeReducer = (state, action) => {
    console.log('reducer opalio');
    const { inputValue, incomeFrequency, taxFraction } = action.payload;
    const { gross, tax, net } = { ...state[incomeFrequency] };

    switch (action.type) {
        case GROSS: {
            const newGross = inputValue;
            const { net: newNet, tax: newTax } = calculateNetIncome(
                newGross,
                taxFraction
            );

            return {
                ...state,
                [incomeFrequency]: {
                    ...state[incomeFrequency],
                    gross: gross + newGross,
                    tax: tax + newTax,
                    net: net + newNet
                }
            };
        }
        case NET: {
            const newNet = inputValue;
            const { gross: newGross, tax: newTax } = calculateGrossIncome(
                newNet,
                taxFraction
            );

            return {
                ...state,
                [incomeFrequency]: {
                    ...state[incomeFrequency],
                    gross: gross + newGross,
                    tax: tax + newTax,
                    net: net + newNet
                }
            };
        }
        default:
            throw new Error('Adding income action not supported');
    }
};
