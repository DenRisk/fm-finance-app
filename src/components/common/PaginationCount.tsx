import React from 'react';

type PaginationCountProps = {
    pageCount: number;
    isActive: boolean;
}

const PaginationCount = ({pageCount, isActive}: PaginationCountProps) => {
    return (
        <button className={`px-4 py-2 text-grey-500 border border-solid rounded-lg border-beige-500 hover:text-grey-900 hover:border-grey-900 flex items-center gap-x-4 ${isActive ? 'bg-grey-900 text-white hover:text-white' : 'bg-white'}`}>
            {pageCount}
        </button>
    );
};

export default PaginationCount;