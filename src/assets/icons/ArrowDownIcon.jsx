import React from 'react';

import { mergeAndOverrideTWclasses } from '../../util/tw-merge';

const ArrowDown = ({ customClasses = '' }) => {
    const className = mergeAndOverrideTWclasses('w-4', 'h-4', customClasses);

    return (
        <svg
            className={className}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
            ></path>
        </svg>
    );
};

export default ArrowDown;
