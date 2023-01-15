import React from 'react';

import IncomeListItem from './IncomeListItem';

const IncomeList = ({ incomes }) => {
    const frequencies = Object.keys(incomes);

    const incomeItems = frequencies.map((frequency) => (
        <IncomeListItem
            key={frequency}
            frequency={frequency}
            incomeValues={incomes[frequency]}
        />
    ));

    return (
        <ul className="p-3 gap-[10px] sx:grid sx:grid-cols-2 md:grid-cols-4">
            {incomeItems}
        </ul>
    );
};

export default IncomeList;
