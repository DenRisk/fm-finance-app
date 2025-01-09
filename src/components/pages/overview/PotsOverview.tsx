import React from 'react';
import SubPageLink from '@/components/navigation/SubPageLink'
import {PageIds} from '../../../types/page'
import TotalSaved from '@/components/pages/overview/TotalSaved'
import PotsCategories from '@/components/pages/overview/PotsCategories'

const PotsOverview = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <SubPageLink title='Pots' pageId={PageIds.POTS}/>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                <TotalSaved/>
                <PotsCategories/>
            </div>
        </div>
    );
};

export default PotsOverview;