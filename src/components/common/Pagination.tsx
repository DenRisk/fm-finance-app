import React from 'react';
import PaginationDirection from '@/components/common/PaginationDirection'
import PaginationCount from '@/components/common/PaginationCount'

const Pagination = () => {
    return (
        <div className='flex justify-between items-center'>
            <PaginationDirection type={'prev'}/>
            <div className='flex gap-x-2 items-center'>
                <PaginationCount pageCount={1} isActive={true}/>
                <PaginationCount pageCount={2} isActive={false}/>
                <PaginationCount pageCount={3} isActive={false}/>
                <PaginationCount pageCount={4} isActive={false}/>
                <PaginationCount pageCount={5} isActive={false}/>
            </div>
            <PaginationDirection type={'next'}/>
        </div>
    );
};

export default Pagination;