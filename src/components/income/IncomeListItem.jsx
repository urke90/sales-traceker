import React from 'react';

const IncomeListItem = ({ frequency, incomeValues }) => {
    // console.log('frequency', frequency);
    console.log('incomeValues', incomeValues);

    const { gross, tax, net } = incomeValues;

    const title = frequency.toLowerCase();

    return (
        <li className="bg-white p-2 mb-2 rounded border-3 sx:mb-0 ">
            <h6 className="bg-gray-200 capitalize text-center mb-1">{title}</h6>
            <p className="mb-1 border-b-2">Gross: {gross}</p>
            <p className="mb-1 border-b-2">Net: {net}</p>
            <p className="mb-1 border-b-2">Tax: {tax}</p>
        </li>
    );
};

export default IncomeListItem;
