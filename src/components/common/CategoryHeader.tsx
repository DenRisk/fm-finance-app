import React from 'react';
import DotsMenu from '@/components/common/DotsMenu'

type  CategoryHeaderProps = {
    color: string;
    category: string;
}

const CategoryHeader = ({color, category}: CategoryHeaderProps) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-x-4 items-center'>
                <div style={{backgroundColor: color}} className='rounded-full w-4 h-4'></div>
                <h2 className='text-2'>{category}</h2>
            </div>
            <DotsMenu/>
        </div>
    );
};

export default CategoryHeader;