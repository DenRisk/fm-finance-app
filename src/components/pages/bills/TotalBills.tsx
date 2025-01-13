import React from 'react';
import Icon from '@/components/common/Icon'

type TotalBillsProps = {
    totalBills: string;
}

const TotalBills = ({totalBills}: TotalBillsProps) => {
    return (
        <div>
            <Icon id={'bills'} pointer={false}/>
            <div className='mt-8'>
                <p className='text-4 mb-2'>Total Bills</p>
                <div className='text-1'>{totalBills}</div>
            </div>
        </div>
    );
};

export default TotalBills;