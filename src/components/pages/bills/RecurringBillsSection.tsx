import React from 'react';
import TotalBills from '@/components/pages/bills/TotalBills'
import Card from '@/components/common/Card'
import RecurringBillsSummary from '@/components/pages/bills/RecurringBillsSummary'
import RecurringBillsTable from '@/components/pages/bills/RecurringBillsTable'
import RecurringBillsFilter from '@/components/pages/bills/RecurringBillsFilter'
import RecurringBillsListHeader from '@/components/pages/bills/RecurringBillsListHeader'
import RecurringBillsList from '@/components/pages/bills/RecurringBillsList'

const RecurringBillsSection = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6'>
            <div className='basis-1/3 flex flex-col md:flex-row lg:flex-col gap-6 '>
                <Card useFullWidth isHighlighted>
                    <TotalBills totalBills={'$384.98'}/>
                </Card>
                <Card useFullWidth>
                    <RecurringBillsSummary/>
                </Card>
            </div>
            <div className={'basis-2/3'}>
                <Card useFullWidth>
                    <RecurringBillsTable>
                        <RecurringBillsFilter/>
                        <RecurringBillsListHeader/>
                        <RecurringBillsList/>
                    </RecurringBillsTable>
                </Card>
            </div>
        </div>
    );
};

export default RecurringBillsSection;