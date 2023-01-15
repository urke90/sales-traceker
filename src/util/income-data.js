// calculates totalTax and net income based on gross income and tax fraction
export const calculateNetIncome = (grossIncome, taxFraction) => {
    const tax = grossIncome * taxFraction;
    const net = grossIncome - grossIncome * taxFraction;

    return { net, tax };
};

// calculate totalTax and groos income based on net income and tax fraction
export const calculateGrossIncome = (netIncome, taxFraction) => {
    const gross = netIncome / (1 - taxFraction);
    const tax = gross - netIncome;

    return { gross, tax };
};
