import React from 'react';

const RecurringBillsListHeader = () => {
    return (
        <div className='hidden md:grid text-5 py-3 border-b border-solid border-grey-100 text-grey-500 grid-cols-[auto_120px_100px] gap-6 mt-6'>
            <div>Bill Title</div>
            <div>Due Date</div>
            <div className='text-right'>Amount</div>
        </div>
    );
};

export default RecurringBillsListHeader;