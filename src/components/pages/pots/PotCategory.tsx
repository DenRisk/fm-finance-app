'use client'

import React from 'react';
import CategoryHeader from '@/components/common/CategoryHeader'
import Button from '@/components/common/Button'

type PotCategoryProps = {
    color: string;
    category: string;
    totalSaved: string;
    percentageSaved: string;
    target: string;
}

const PotCategory = ({color, category, totalSaved, percentageSaved, target}: PotCategoryProps) => {
    return (
        <div>
            <CategoryHeader color={color} category={category} />
            <div className='my-8'>
                <div className='flex items-center justify-between mb-4'>
                    <p className='text-4 text-grey-500'>Total Saved</p>
                    <div className='text-1'>{totalSaved}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-4-bold text-grey-500'>{percentageSaved}</p>
                    <div className='text-4'>Target of {target}</div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <Button type={'button-secondary'} onClick={() => {}}>
                    <span>+</span>
                    <span>Add Money</span>
                </Button>
                <Button type={'button-secondary'} onClick={() => {}}>
                    Withdraw
                </Button>
            </div>
        </div>
    );
};

export default PotCategory;