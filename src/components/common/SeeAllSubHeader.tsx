'use client'

import React from 'react';
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'

const SeeAllSubHeader = () => {
    return (
        <div className='mb-5 text-grey-500 flex justify-between items-center text-4'>
            <h3 className='text-3 text-grey-900'>Latest Spending</h3>
            <Button type={'button-transparent'} onClick={event => console.log(event)}>
                <span>See All</span>
                <Icon id={'caretRight'} pointer={true} useCurrentColor={true}/>
            </Button>
        </div>
    );
};

export default SeeAllSubHeader;