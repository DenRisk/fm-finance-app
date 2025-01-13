import React from 'react';

type BudgetSummaryItemProps = {
    label: string;
    color: string;
    currentValue: string;
    totalValue: string;
}

const BudgetSummaryItem = ({label, color, currentValue, totalValue}: BudgetSummaryItemProps) => {
    return (
        <div className="flex justify-between py-4">
            <div className='flex gap-x-4 items-center'>
                <div style={{backgroundColor: color}} className="w-1 h-full rounded-3xl"></div>
                <p className="text-4 text-grey-500">{label}</p>
            </div>
            <div>
                <span className="text-3 mr-1">{currentValue}</span>
                <span className="text-5 text-grey-500">of {totalValue}</span>
            </div>
        </div>
    );
};

export default BudgetSummaryItem;