import React from 'react';

import { mergeAndOverrideTWclasses } from '../../util/tw-merge';

// classes that will always be appled
const defaultClasses = [
    'text-white',
    'border',
    'border-blue-600',
    'bg-blue-600',
    'hover:bg-blue-800',
    'font-medium',
    'text-sm',
    'px-3',
    'py-1.5',
    'sx:px-4',
    'sx:py-2.5',
    'inline-flex',
    'justify-center',
    'w-full',
    'rounded disabled:bg-gray-400',
    'disabled:text-gray-700',
    'disabled:border-gray-400',
    'disabled:cursor-not-allowed'
];

// classes if btn is outlined
const outlinedClassNames = [
    'text-blue-600',
    'bg-white',
    'hover:bg-blue-600',
    'hover:text-white'
];

const Button = ({
    children,
    onClick,
    type = 'button',
    customClasses = '',
    outlined,
    disabled
}) => {
    const outlinedClasses = outlined ? outlinedClassNames : '';

    const className = mergeAndOverrideTWclasses(
        defaultClasses,
        outlinedClasses,
        customClasses
    );

    return (
        <button
            className={className}
            type={type}
            onClick={onClick ? onClick : () => {}}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
