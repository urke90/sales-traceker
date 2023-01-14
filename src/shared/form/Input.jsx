import React from 'react';

import { mergeAndOverrideTWclasses } from '../../util/tw-merge';

import DollarIcon from '../../assets/icons/DollarIcon';

const defaultInputClasses = [
    'block',
    'w-full',
    'p-2.5',
    'text-sm',
    'text-gray-900',
    'border',
    'bg-gray-50',
    'outline-none'
];

const Input = ({
    hasIcon,
    isInvalid,
    isTouched,
    customClasses = '',
    onBlur,
    onChange
}) => {
    const invalidInputClasses =
        isInvalid && isTouched ? 'text-red-500 border-red-500' : '';
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
                                isInvalid && isTouched ? 'text-red-500' : ''
                            }`}
                        />
                    </div>
                )}
                <input
                    type="search"
                    id="search"
                    className={className}
                    placeholder="e.g. 12 000"
                    required
                    onBlur={onBlur}
                    onChange={onChange}
                />
            </div>
            {isInvalid && isTouched && (
                <p className="text-red-500 mb-3 mt-1">Invalid number</p>
            )}
        </>
    );
};

export default Input;
