import React, { useState } from 'react';

import { FREQUENCIES } from '../../config/frequency.config';

import ArrowDown from '../../assets/icons/ArrowDown';
import DropdownItem from './DropdownItem';
import Button from './Button';

/**
 * TODO frequencies should be added through props to have dynamic dropdown component
 */

const Dropdown = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleToggleDropdown = () => setIsOpened((prevOpened) => !prevOpened);

    return (
        <div className="relative">
            <Button
                type="button"
                onClick={handleToggleDropdown}
                customClasses="rounded-none"
            >
                <div className="inline-flex items-center">
                    Monthly
                    <ArrowDown customStyles="ml-2" />
                </div>
            </Button>
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
