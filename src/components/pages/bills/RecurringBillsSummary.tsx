import React from 'react';
import BillSummaryRow from '@/components/pages/bills/BillSummaryRow'

const RecurringBillsSummary = () => {
    return (
        <>
            <h3 className='text-3 mb-2'>Summary</h3>
            <div className='divide-y divide-grey-100'>
                <BillSummaryRow label='Paid Bills' count={4} amount={'$190.00'}/>
                <BillSummaryRow label='Total upcoming' count={4} amount={'$194.98'}/>
                <BillSummaryRow label='Due Soon' count={2} amount={'$59.98'} isHighlighted/>
            </div>
        </>
    );
};

export default RecurringBillsSummary;