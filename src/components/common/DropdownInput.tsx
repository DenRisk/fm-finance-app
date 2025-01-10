'use client'

import React, {useState} from 'react';
import Icon, {IconIds} from '@/components/common/Icon'

type DropDownOption = {
    id: string
    label: string,
}

type DropdownInputProps = {
    options: DropDownOption[]
    iconId: IconIds
    defaultOptionId?: string
    label?: string
}

const DropdownInput = ({options, iconId, defaultOptionId, label}: DropdownInputProps) => {
    const [selectedOption, setSelectedOption] = useState<DropDownOption>(options.find(option => option.id === defaultOptionId) || options[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openDropdown = () => {
        setIsOpen(!isOpen);
    }

    const setOption = (option: DropDownOption) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className='relative flex gap-x-2 items-center'>
            {
                label && <span className='hidden md:inline text-4 text-beige-500 text-nowrap'>{label}</span>
            }
            <button
                onClick={openDropdown}
                className='hidden md:flex gap-x-4 py-3 px-5 text-4 border border-solid border-beige-500 rounded-lg hover:border-grey-500 items-center'>
                <div className='grow text-grey-900 placeholder:text-beige-500 text-nowrap text-ellipsis'>
                    {selectedOption.label}
                </div>
                <div className={`${isOpen ? 'rotate-180' : 0}`}>
                    <Icon id='caretDown'/>
                </div>
            </button>

            <button className='block md:hidden' onClick={openDropdown}>
                <Icon id={iconId} pointer={true}/>
            </button>

            <div className={`rounded-lg bg-white shadow-dropdown absolute top-16 right-0 md:left-0 text-nowrap ${isOpen ? 'block' : 'hidden'}`}>
                <ul className='px-5 divide-y divide-grey-100'>
                    {options.map(option => (
                        <li key={option.id}>
                            <button className={`${selectedOption.id === option.id ? 'text-4-bold' : 'text-4'} hover:text-beige-500 py-3 w-full`} onClick={() => setOption(option)}>{option.label}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default DropdownInput;