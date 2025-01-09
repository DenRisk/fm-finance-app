import React from 'react';

type TrackingItemProps = {
    label: string;
    value: string;
    isHighlighted?: boolean;
}

const TrackingItem = ({label, value, isHighlighted = false}: TrackingItemProps) => {
    return (
        <div>
            <p className={`text-4 mb-4 ${isHighlighted ? 'text-white' : 'text-grey-500'}`}>{label}</p>
            <p className='text-1'>{value}</p>
        </div>
    );
};

export default TrackingItem;