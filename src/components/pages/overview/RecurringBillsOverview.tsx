import React from 'react';
import {PageIds} from '../../../types/page'
import SubPageLink from '@/components/navigation/SubPageLink';
import BillAmount from '@/components/common/BillAmount'

const RecurringBillsOverview = () => {
    return (
        <div className='flex flex-col gap-y-8'>
            <SubPageLink title='Recurring Bills' pageId={PageIds.BILLS}/>
            <div className='grid gap-3'>
                <BillAmount label='Paid Bills' amount='$190.00' color='#277C78'/>
                <BillAmount label='Total Upcoming' amount='$194.98' color='#F2CDAC'/>
                <BillAmount label='Due Soon' amount='$59.98' color='#82C9D7'/>
            </div>
        </div>
    );
};

export default RecurringBillsOverview;