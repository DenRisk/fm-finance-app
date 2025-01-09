import React from 'react';
import CategoryTracker from '@/components/common/CategoryTracker'

const PotsCategories = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <CategoryTracker category='Savings' value='$159' color='#277C78'/>
            <CategoryTracker category='Gift' value='$40' color='#82C9D7'/>
            <CategoryTracker category='Concert Ticket' value='$110' color='#626070'/>
            <CategoryTracker category='New Laptop' value='$10' color='#F2CDAC'/>
        </div>
    );
};

export default PotsCategories;