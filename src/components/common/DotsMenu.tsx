'use client'

import React, {useState} from 'react';
import Icon from '@/components/common/Icon'

const DotsMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='relative'>
            <button onClick={openDropdown}>
                <Icon id='dots' pointer={true} useCurrentColor={true}/>
            </button>
            <div
                className={`rounded-lg bg-white shadow-dropdown absolute top-8 right-0 text-nowrap ${isOpen ? 'block' : 'hidden'}`}>
                <ul className='px-5 divide-y divide-grey-100'>
                    <li>
                        <button className='text-4 hover:text-beige-500 py-3 w-full`'>Edit Budget</button>
                    </li>
                    <li>
                        <button className='text-4 text-primary-red hover:text-beige-500 py-3 w-full`'>Delete Budget</button>
                    </li>
                </ul>
            </div>

        </div>
    )
        ;
};

export default DotsMenu;