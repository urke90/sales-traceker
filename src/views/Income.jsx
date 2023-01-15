import React from 'react';

import { useIncomeContext } from '../hooks/use-income-context';

import IncomeHeader from '../components/income/IncomeHeader';
import IncomeList from '../components/income/IncomeList';
import IncomeBanner from '../components/income/IncomeBanner';

const Income = () => {
    const { incomeFrequency, incomes } = useIncomeContext();

    return (
        <>
            <div className="bg-gray-200 mb-4">
                <IncomeHeader
                    incomeFrequency={incomeFrequency}
                    netIncome={incomes[incomeFrequency].net}
                />
                <IncomeList incomes={incomes} />
            </div>

            <IncomeBanner />
        </>
    );
};

export default Income;
