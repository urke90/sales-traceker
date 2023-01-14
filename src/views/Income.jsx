import React from 'react';

import { useIncomeContext } from '../hooks/use-income-context';

const Income = () => {
    const { incomeType, handleIncomeTypeChange, incomeFrequency } =
        useIncomeContext();
    console.log('incomeFrequency IN INCOME.jsx', incomeFrequency);

    return (
        <div className="bg-emerald-200">
            this is income component (to view all incomes){' '}
        </div>
    );
};

export default Income;
