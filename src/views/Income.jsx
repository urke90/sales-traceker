import React from 'react';

import { useIncomeContext } from '../hooks/use-income-context';

import IncomeHeader from '../components/income/IncomeHeader';

const Income = () => {
    const { incomeType, handleIncomeTypeChange, incomeFrequency, incomes } =
        useIncomeContext();
    console.log('incomes IN INCOME.jsx', incomes);
    console.log('incomeFrequency IN INCOME.jsx', incomeFrequency);

    return (
        <div className="bg-blue-200 p-3">
            <IncomeHeader
                incomeFrequency={incomeFrequency}
                netIncome={incomes[incomeFrequency].net}
            />
            <main>MAIN PART WITH INCOMES</main>
            <footer>SOME BANNER HERE</footer>
        </div>
    );
};

export default Income;
