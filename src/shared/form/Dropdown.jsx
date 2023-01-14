import React, { useState } from 'react';

import { FREQUENCIES } from '../../config/frequency.config';

import ArrowDown from '../../assets/icons/ArrowDown';
import DropdownItem from './DropdownItem';

/**
 * TODO frequencies should be added through props to have dynamic dropdown component
 */

const Dropdown = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleToggleDropdown = () => setIsOpened((prevOpened) => !prevOpened);

    return (
        <div className="relative">
            <button
                className="text-white border border-gray-500 bg-gray-500 hover:bg-gray-800 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={handleToggleDropdown}
            >
                Monthly
                <ArrowDown />
            </button>
            {isOpened && (
                <div className="absolute z-10 divide-y w-auto bg-white divide-gray-100 rounded shadow">
                    <ul
                        className="py-1 text-sm text-gray-700"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        {FREQUENCIES.length > 0
                            ? FREQUENCIES.map(({ title, value }) => (
                                  <DropdownItem
                                      key={value}
                                      title={title}
                                      value={value}
                                  />
                              ))
                            : null}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
