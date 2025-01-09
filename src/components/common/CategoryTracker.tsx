import React from 'react';

type CategoryTrackerProps = {
    category: string;
    value: string;
    color: string;
}

const CategoryTracker = ({category, value, color}: CategoryTrackerProps) => {
    return (
        <div className='flex'>
            <div style={{ backgroundColor: color }} className='w-1 h-full rounded-lg mr-4 shrink-0'></div>
            <div>
                <p className='text-grey-500 text-5 mb-2'>{category}</p>
                <p className='text-4-bold'>{value}</p>
            </div>
            
        </div>
    );
};

export default CategoryTracker;