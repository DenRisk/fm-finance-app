import React from 'react';
import CategoryTracker from '@/components/common/CategoryTracker'
import {Pot} from '../../../types/data'
import {formatCurrency} from '../../../util/helper'


type PotsCategoriesProps = {
    categories: Pot[] | undefined;
}

const PotsCategories = ({categories}: PotsCategoriesProps) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                categories?.map((category) => (
                    <CategoryTracker key={category.name} category={category.name} value={formatCurrency(category.total)} color={category.theme}/>
                ))
            }
        </div>
    );
};

export default PotsCategories;