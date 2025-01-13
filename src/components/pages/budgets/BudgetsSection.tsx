import React from 'react';
import Card from '@/components/common/Card'
import BudgetSummaryItem from '@/components/pages/budgets/BudgetSummaryItem'
import BudgetCategory from '@/components/pages/budgets/BudgetCategory'

const userTransactions = [
    {
        image: {url: '/images/avatars/ethan-clark.jpg', alt: ''},
        name: 'Emma Richardson',
        date: '19 Aug 2024',
        amount: '-$75.50'
    },
    {
        image: {url: '/images/avatars/ethan-clark.jpg', alt: ''},
        name: 'Emma Richardson',
        date: '19 Aug 2024',
        amount: '-$75.50'
    },
    {
        image: {url: '/images/avatars/ethan-clark.jpg', alt: ''},
        name: 'Emma Richardson',
        date: '19 Aug 2024',
        amount: '-$75.50'
    }
]

const BudgetsSection = () => {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] xl:grid-rows-[fit-content(100%)_auto] gap-6'>
            <Card useFullWidth>
                <h2 className='text-2 mb-4'>Spending Summary</h2>
                <div className='divide-y divide-grey-100'>
                    <BudgetSummaryItem label='Entertainment' currentValue='$15.00' totalValue='$50.00' color='#277C78'/>
                    <BudgetSummaryItem label='Bills' currentValue='$150.00' totalValue='$750.00' color='#82C9D7'/>
                    <BudgetSummaryItem label='Dining Out' currentValue='$133.00' totalValue='$75.00' color='#F2CDAC'/>
                    <BudgetSummaryItem label='Personal Care' currentValue='$40.00' totalValue='$100.00'
                                       color='#696868'/>
                </div>
            </Card>
            <div className='flex flex-col gap-y-6 row-span-2'>
                <Card useFullWidth>
                    <BudgetCategory color={'#277C78'} category={'Entertainment'} maxBudget={'$50.00'} spent={'$15.00'} remaining={'$35.00'} transactions={userTransactions}/>
                </Card>
                <Card useFullWidth>
                    <BudgetCategory color={'#82C9D7'} category={'Bills'} maxBudget={'$750.00'} spent={'$150.00'} remaining={'600.00'} transactions={userTransactions}/>
                </Card>
                <Card useFullWidth>
                    <BudgetCategory color={'#F2CDAC'} category={'Dining Out'} maxBudget={'$75.00'} spent={'$133.75'} remaining={'$0'} transactions={userTransactions}/>
                </Card>
                <Card useFullWidth>
                    <BudgetCategory color={'#626070'} category={'Personal Care'} maxBudget={'$100.00'} spent={'$40.00'} remaining={'$60.00'} transactions={userTransactions}/>
                </Card>
            </div>
        </div>
    );
};

export default BudgetsSection;