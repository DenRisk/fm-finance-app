'use client'

import React from 'react';
import {PageIds} from '../../types/page'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import { useRouter } from 'next/navigation'


type QuickLinkTitleProps = {
    title: string;
    pageId: PageIds;
}

const SubPageLink = ({title, pageId}: QuickLinkTitleProps) => {
    const router = useRouter()

    const navigate = () => {
        router.push(pageId)
    }

    return (
        <div className='flex justify-between items-center'>
            <h2 className='text-2'>{title}</h2>
            <Button type='button-transparent' onClick={navigate} >
                <span className='text-4'>See Details</span>
                <Icon id='caretRight' pointer={true} useCurrentColor={true}/>
            </Button>
        </div>
    );
};

export default SubPageLink;