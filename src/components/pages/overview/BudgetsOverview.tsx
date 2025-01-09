import React from 'react';
import CategoryTracker from '@/components/common/CategoryTracker'
import {PageIds} from '../../../types/page'
import SubPageLink from '@/components/navigation/SubPageLink';

const BudgetsOverview = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <SubPageLink title='Budgets' pageId={PageIds.BUDGETS}/>
            <div className='flex flex-col gap-y-8 items-start md:flex-row py-8'>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-1 w-full md:w-fit'>
                    <CategoryTracker category='Entertainment' value='$50.00' color='#277C78'/>
                    <CategoryTracker category='Bills' value='$75.00' color='#82C9D7'/>
                    <CategoryTracker category='Dining Out' value='$750.00' color='#F2CDAC'/>
                    <CategoryTracker category='Personal Care' value='$100.00' color='#626070'/>
                </div>
            </div>
        </div>
    );
};

export default BudgetsOverview;