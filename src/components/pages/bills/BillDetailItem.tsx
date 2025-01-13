import React from 'react';
import Image from 'next/image'
import Icon from '@/components/common/Icon'

type BillDetailItemProps = {
    image: {
        url: string;
        alt: string;
    };
    name: string;
    period: 'monthly' | 'weekly';
    dayCount: string;
    state: 'soon' | 'paid' | 'default';
    amount: string;
}

const BillDetailItem = ({image, name, period, state, dayCount, amount}: BillDetailItemProps) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-[auto_120px_100px] gap-x-6 items-center py-5 gap-y-2'>

            <div className='flex items-center col-span-2 md:col-span-1 gap-x-2'>
                <div className='rounded-full overflow-clip'>
                    <Image src={image.url} alt={image.alt} width={40} height={40}/>
                </div>
                <p className='text-4-bold'>{name}</p>
            </div>

            {
                state === 'soon' && (
                    <div className='flex gap-x-2 items-center'>
                        <p className='text-5 text-grey-500'>{period === 'weekly' ? 'Weekly' : 'Monthly'}-{dayCount}</p>
                        <Icon id={'billDue'} pointer={false}/>
                    </div>
                )
            }

            {
                state === 'paid' && (
                    <div className='flex gap-x-2 items-center'>
                        <p className='text-5 text-primary-green'>{period === 'weekly' ? 'Weekly' : 'Monthly'}-{dayCount}</p>
                        <Icon id={'billPaid'} pointer={false}/>
                    </div>
                )
            }

            {
                state === 'default' && (
                    <p className='text-5 text-grey-500'>{period === 'weekly' ? 'Weekly' : 'Monthly'}-{dayCount}</p>
                )
            }

            <div className='text-4-bold text-right'>{amount}</div>
        </div>
    );
};

export default BillDetailItem;