import React from 'react';
import SearchInput from '@/components/common/SearchInput'
import DropdownInput, {DropDownOption} from '@/components/common/DropdownInput'

const sortOptions: DropDownOption[] = [
    {id: 'latest', label: 'Latest'},
    {id: 'date', label: 'Date'},
    {id: 'amount', label: 'Amount'},
]

const RecurringBillsFilter = () => {
    return (
        <div className='flex justify-between items-center mb-4 md:mb-0'>
            <SearchInput placeholder={'Search bills'}/>
            <DropdownInput options={sortOptions} iconId={'sort'} label={'Sort by'}/>
        </div>
    );
};

export default RecurringBillsFilter;