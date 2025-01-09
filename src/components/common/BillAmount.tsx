import React from 'react';

type BillAmountProps = {
    label: string;
    amount: string;
    color: string;
}

const BillAmount = ({ label, amount, color }: BillAmountProps) => {
    return (
        <div className="w-full min-h-14 flex items-center">
            <div style={{backgroundColor: color}} className="w-4 h-full rounded-3xl"></div>
            <div className="flex justify-between w-full py-5 px-4 bg-beige-100 relative rounded-lg shadow-overlap">
                <p className="text-4 text-grey-500">{label}</p>
                <p className="text-4-bold text-grey-900">{amount}</p>
            </div>
        </div>
    );
};

export default BillAmount;
