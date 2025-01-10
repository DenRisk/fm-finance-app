import React from 'react';
import SearchInput from '@/components/common/SearchInput'
import DropdownInput from '@/components/common/DropdownInput'

const sortOptions = [
    {id: 'latest', label: 'Latest'},
    {id: 'oldest', label: 'Oldest'},
    {id: 'az', label: 'A to Z'},
    {id: 'za', label: 'Z to A'},
    {id: 'highest', label: 'Highest'},
    {id: 'lowest', label: 'Lowest'},
]

const categoryOptions = [
    {id: 'all', label: 'All Transactions'},
    {id: 'entertainment', label: 'Entertainment'},
    {id: 'bills', label: 'Bills'},
    {id: 'groceries', label: 'Groceries'},
    {id: 'dining', label: 'Dining Out'},
    {id: 'transportation', label: 'Transportation'},
    {id: 'personal', label: 'Personal Care'},
    {id: 'education', label: 'Education'},
    {id: 'lifestyle', label: 'Lifestyle'},
    {id: 'shopping', label: 'Shopping'},
    {id: 'general', label: 'General'},

]

const TransactionFilter = () => {
    return (
        <div className='flex gap-x-6 justify-between'>
            <SearchInput placeholder={'Search transaction'}/>
            <div className='flex gap-x-6'>
                <DropdownInput options={sortOptions} label='Sort by' iconId={'sort'}/>
                <DropdownInput options={categoryOptions} label='Category' iconId={'categoriesFilter'}/>
            </div>
        </div>
    );
};

export default TransactionFilter;