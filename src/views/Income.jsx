import React from 'react';

import { useIncomeContext } from '../hooks/use-income-context';

import IncomeHeader from '../components/income/IncomeHeader';
import IncomeList from '../components/income/IncomeList';

const Income = () => {
    const { incomeType, handleIncomeTypeChange, incomeFrequency, incomes } =
        useIncomeContext();

    return (
        <div className="bg-gray-200">
            <IncomeHeader
                incomeFrequency={incomeFrequency}
                netIncome={incomes[incomeFrequency].net}
            />
            <IncomeList incomes={incomes} />
            <footer>SOME BANNER HERE</footer>
        </div>
    );
};

export default Income;
