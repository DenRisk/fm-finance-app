import React from 'react';
import Icon from '@/components/common/Icon'
import TrackingItem from '@/components/common/TrackingItem'
import {formatCurrency} from '../../../util/helper'

type TotalSavedProps = {
    totalSaved: number | undefined;
}

const TotalSaved = ({totalSaved}: TotalSavedProps) => {
    return (
        <div className='p-4 bg-beige-100 flex gap-x-4 w-full rounded-xl items-center'>
            <div className='w-10 h-10 flex items-center justify-center'>
                <Icon id='pot' pointer={false} useCurrentColor={false}/>
            </div>
            <TrackingItem label='Total Saved' value={formatCurrency(totalSaved)}/>
        </div>
    );
};

export default TotalSaved;