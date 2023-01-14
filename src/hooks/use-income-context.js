import { useContext } from 'react';

import { IncomeContext } from '../context/income-context';

export const useIncomeContext = () => {
    const incomeCtx = useContext(IncomeContext);

    if (!incomeCtx) {
        throw new Error('Issue with income context');
    }

    return incomeCtx;
};
