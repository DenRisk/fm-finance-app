import React from 'react';
import Card from '@/components/common/Card'
import TrackingItem from '@/components/common/TrackingItem'
import {useData} from '../../../util/DataContext'
import {formatCurrency} from '../../../util/helper'

const BudgetTracker = () => {

    const data = useData();
    const balance = data?.balance;


    return (
        <div className='grid w-full gap-6 grid-cols-[repeat(auto-fit,minmax(216px,1fr))] my-8'>
            <Card isHighlighted useFullWidth>
                <TrackingItem label='Current Balance' value={formatCurrency(balance?.current, true)} isHighlighted/>
            </Card>
            <Card useFullWidth>
                <TrackingItem label='Income' value={formatCurrency(balance?.income, true)}/>
            </Card>
            <Card useFullWidth>
                <TrackingItem label='Expenses' value={formatCurrency(balance?.expenses, true)}/>
            </Card>
        </div>
    );
};

export default BudgetTracker;