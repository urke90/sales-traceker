import React from 'react';

const DropdownItem = ({ title }) => {
    return (
        <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {title}
        </li>
    );
};

export default DropdownItem;
