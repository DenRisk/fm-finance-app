import React from 'react';

type BillSummaryRowProps = {
    label: string;
    count: number;
    amount: string;
    isHighlighted?: boolean;
}

const BillSummaryRow = ({label, count, amount, isHighlighted}: BillSummaryRowProps) => {
    return (
        <div className='py-3 flex items-center justify-between'>
            <span className={`text-5 ${isHighlighted ? 'text-primary-red' : ' text-grey-500'}`}>{label}</span>
            <span className={`text-5-bold ${isHighlighted ? 'text-primary-red' : ' text-grey-900'}`}>{count} ({amount})</span>
        </div>
    );
};

export default BillSummaryRow;