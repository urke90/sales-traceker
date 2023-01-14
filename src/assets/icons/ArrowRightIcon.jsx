import React from 'react';

import { mergeAndOverrideTWclasses } from '../../util/tw-merge';

const ArrowRightIcon = ({ customClasses = '' }) => {
    const className = mergeAndOverrideTWclasses('w-5', ' h-5', customClasses);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
        </svg>
    );
};

export default ArrowRightIcon;
