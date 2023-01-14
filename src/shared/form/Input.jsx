import React from 'react';

import DollarIcon from '../../assets/icons/DollarIcon';

const Input = ({ hasIcon, isInvalid, isTouched, styles = '' }) => {
    const defaultInputClasses =
        'block w-full p-2.5 text-sm text-gray-900 border bg-gray-50 outline-none';
    const invalidInputClasses = `${
        isInvalid && isTouched ? 'text-red-500 border-red-500' : ''
    }`;
    const hasIconClasses = `${hasIcon ? 'pl-10' : ''}`;

    // * did string concatenation to make sure that there is whitespace between classes
    const fullClassName =
        defaultInputClasses +
        ' ' +
        invalidInputClasses +
        ' ' +
        hasIconClasses +
        ' ' +
        styles;

    return (
        <>
            <div className="relative">
                {hasIcon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <DollarIcon
                            styles={`${
                                isInvalid && isTouched ? 'text-red-500' : ''
                            }`}
                        />
                    </div>
                )}
                <input
                    type="search"
                    id="search"
                    className={fullClassName}
                    placeholder="e.g. 12 000"
                    required
                />
            </div>
            {isInvalid && isTouched && (
                <p className="text-red-500 mb-3 mt-1">Invalid number</p>
            )}
        </>
    );
};

export default Input;
