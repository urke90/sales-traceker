import React from 'react';

import { mergeAndOverrideTWclasses } from '../../util/tw-merge';
import { formatNumberToCurrency } from '../../util/income-data';

import DollarIcon from '../../assets/icons/DollarIcon';

// extracted like this for better visibility since there will be many classes and will be merged with twmerge lib
const defaultInputClasses = [
    'block',
    'w-full',
    'p-2.5',
    'text-sm',
    'text-gray-900',
    'border',
    'bg-gray-50',
    'outline-none',
    'appearance-none'
];

const Input = ({
    hasIcon,
    isValid,
    isTouched,
    customClasses = '',
    onBlur,
    onChange,
    type = 'text',
    value
}) => {
    const invalidInputClasses =
        !isValid && isTouched ? 'text-red-500 border-red-500' : '';
    const iconClasses = hasIcon ? 'pl-10' : '';

    const className = mergeAndOverrideTWclasses(
        defaultInputClasses,
        invalidInputClasses,
        iconClasses,
        customClasses
    );

    return (
        <>
            <div className="relative">
                {hasIcon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <DollarIcon
                            customClasses={`${
                                !isValid && isTouched ? 'text-red-500' : ''
                            }`}
                        />
                    </div>
                )}
                <input
                    type={type}
                    id="search"
                    className={className}
                    placeholder="e.g. 12 000"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value === 0 ? '' : value}
                    required
                />
            </div>
            {!isValid && isTouched && (
                <p className="text-red-500 mb-3 mt-1">Invalid number</p>
            )}
        </>
    );
};

export default Input;
