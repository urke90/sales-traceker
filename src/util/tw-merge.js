import { twMerge } from 'tailwind-merge';

// prev classes will be overridden by classes added at the end and will be removed
export const mergeAndOverrideTWclasses = (...args) => {
    return twMerge(...args);
};
