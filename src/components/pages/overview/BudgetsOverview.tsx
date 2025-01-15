import React from 'react';
import CategoryTracker from '@/components/common/CategoryTracker'
import {PageIds} from '../../../types/page'
import SubPageLink from '@/components/navigation/SubPageLink';
import {useData} from '../../../util/DataContext'
import {formatCurrency} from '../../../util/helper'

const BudgetsOverview = () => {
    const data = useData()
    const budgets = data?.budgets;
    const highlightBudgets = budgets?.slice(0, 4)

    return (
        <div className='flex flex-col gap-y-5'>
            <SubPageLink title='Budgets' pageId={PageIds.BUDGETS}/>
            <div className='flex flex-col gap-y-8 items-start md:flex-row py-8'>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-1 w-full md:w-fit'>
                    {
                        highlightBudgets?.map(budget => (
                            <CategoryTracker key={budget.category} category={budget.category} value={formatCurrency(budget.maximum)} color={budget.theme}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BudgetsOverview;