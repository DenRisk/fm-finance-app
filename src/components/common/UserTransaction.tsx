import React from 'react';
import Image from 'next/image'

type UserTransactionProps = {
    image: {
        url: string;
        alt: string;
    };
    name: string;
    date: string;
    amount: string;
}

const UserTransaction = ({image, name, date, amount}: UserTransactionProps) => {

    return (
        <div className='flex items-center gap-x-4 w-full py-5'>
            <div className='rounded-full overflow-clip'>
                <Image src={image.url} alt={image.alt} width={40} height={40}/>
            </div>
            <p className='text-4-bold grow'>{name}</p>
            <div>
                <p className={`text-4-bold text-grey-500 mb-2 ${amount[0] === '+' ? 'text-primary-green' : 'text-grey-900'}`}>
                    {amount}
                </p>
                <p className='text-5 text-grey-500'>{date}</p>
            </div>
        </div>
    );
};

export default UserTransaction;