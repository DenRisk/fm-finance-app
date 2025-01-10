import React from 'react';

const TransactionTableHeader = () => {
    return (
        <div
            className='hidden md:grid text-5 py-3 border-b border-solid border-grey-100 text-grey-500 grid-cols-[2.5fr_120px_120px_1fr] gap-6 my-6'>
            <div>Recipient / Sender</div>
            <div>Category</div>
            <div>Transaction Date</div>
            <div className='text-right'>Amount</div>
        </div>
    );
};

export default TransactionTableHeader;