'use client'

import React from 'react';
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive';


type UserTransactionProps = {
    mode: 'overview' | 'list';
    image: {
        url: string;
        alt: string;
    };
    name: string;
    date: string;
    amount: string;
    category?: string;

}

const UserTransaction = ({mode, image, name, date, amount, category}: UserTransactionProps) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    if (mode === 'list' && !isMobile) {
        return (
            <div className='grid grid-cols-[2.5fr_120px_120px_1fr] gap-6 items-center py-4'>
                <div className='flex gap-x-2 items-center'>
                    <div className='rounded-full overflow-clip'>
                        <Image src={image.url} alt={image.alt} width={40} height={40}/>
                    </div>
                    <p className='text-4-bold'>{name}</p>
                </div>
                {
                    category && <p className='text-5 text-grey-500'>{category}</p>
                }
                <p className='text-5 text-grey-500'>{date}</p>
                <p className={`text-4-bold text-grey-500 text-right ${amount[0] === '+' ? 'text-primary-green' : 'text-grey-900'}`}>{amount}</p>
            </div>
        )
    }

    return (
        <div className='flex items-center gap-x-4 w-full py-3'>
            <div className='rounded-full overflow-clip'>
                <Image src={image.url} alt={image.alt} width={40} height={40}/>
            </div>
            <div className='grow flex flex-col gap-y-2'>
                <p className='text-4-bold grow'>{name}</p>
                {
                    category && <p className='text-5 text-grey-500'>{category}</p>
                }
            </div>
            <div>
                <p className={`text-4-bold text-grey-500 mb-1 ${amount[0] === '+' ? 'text-primary-green' : 'text-grey-900'}`}>
                    {amount}
                </p>
                <p className='text-5 text-grey-500'>{date}</p>
            </div>
        </div>
    )
};

export default UserTransaction;