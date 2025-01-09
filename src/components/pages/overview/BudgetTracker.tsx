import React from 'react';
import Card from '@/components/common/Card'
import TrackingItem from '@/components/common/TrackingItem'

const BudgetTracker = () => {
    return (
        <div className='grid w-full gap-6 grid-cols-[repeat(auto-fit,minmax(216px,1fr))] my-8'>
            <Card isHighlighted useFullWidth>
                <TrackingItem label='Current Balance' value='$4,836.00' isHighlighted/>
            </Card>
            <Card useFullWidth>
                <TrackingItem label='Income' value='$3,814.25'/>
            </Card>
            <Card useFullWidth>
                <TrackingItem label='Expenses' value='$1,700.50'/>
            </Card>
        </div>
    );
};

export default BudgetTracker;