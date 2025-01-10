import React from 'react';
import Icon from '@/components/common/Icon'

type SearchInputProps = {
    placeholder: string
}

const SearchInput = ({placeholder}: SearchInputProps) => {
    return (
        <div className='flex gap-x-4 py-3 px-5 text-4 border border-solid border-beige-500 rounded-lg hover:border-grey-500 focus:border-grey-900'>
            <input type='text' className='w-full text-grey-900 placeholder:text-beige-500' placeholder={placeholder}/>
            <Icon id='search'/>
        </div>
    );
};

export default SearchInput;