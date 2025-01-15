import React from 'react';
import SubPageLink from '@/components/navigation/SubPageLink'
import {PageIds} from '../../../types/page'
import RotateLoader from '@/components/spinner/RotateSpinner'
import TotalSaved from '@/components/pages/overview/TotalSaved'
import PotsCategories from '@/components/pages/overview/PotsCategories'
import {useData} from '../../../util/DataContext'

const PotsOverview = () => {
    const data = useData()
    const pots = data?.pots;
    const totalSaved = pots?.reduce((acc, pot) => acc + pot.total, 0)
    const highlightPots = pots?.slice(0, 4)

    return (
        <div className='flex flex-col gap-y-4'>
            <SubPageLink title='Pots' pageId={PageIds.POTS}/>

            {
                !data && (
                    <div className='flex item-center justify-center p-8'>
                        <RotateLoader/>
                    </div>
                )
            }

            {
                data && (
                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                        <TotalSaved totalSaved={totalSaved}/>
                        <PotsCategories categories={highlightPots}/>
                    </div>
                )
            }
        </div>
    );
};

export default PotsOverview;