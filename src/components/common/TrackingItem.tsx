import React from 'react';
import TextSpinner from '@/components/spinner/TextSpinner'

type TrackingItemProps = {
    label: string;
    value: string | undefined;
    isHighlighted?: boolean;
    spinnerSize?: 'sm' | 'md' | 'lg';
}

const TrackingItem = ({label, value, isHighlighted = false, spinnerSize = "lg"}: TrackingItemProps) => {
    return (
        <div>
            <p className={`text-4 mb-4 ${isHighlighted ? 'text-white' : 'text-grey-500'}`}>{label}</p>
            {
                !value ? <TextSpinner size={spinnerSize} color={isHighlighted ? 'white' : 'black'}/> : <p className='text-1'>{value}</p>
            }
        </div>
    );
};

export default TrackingItem;