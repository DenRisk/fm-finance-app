import React from 'react';
import UserTransaction from '@/components/common/UserTransaction'

const TransactionList = () => {
    return (
        <div className='divide-y divide-grey-100'>
            <UserTransaction image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}} name='Emma Richardson' date='19 Aug 2024' amount='+$75.50'/>
            <UserTransaction image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}} name='Savory Bites Bistro' date='19 Aug 2024' amount='-$55.50'/>
            <UserTransaction image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}} name='Daniel Carter' date='18 Aug 2024' amount='-$42.30'/>
            <UserTransaction image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}} name='Sun Park' date='17 Aug 2024' amount='+$120.00'/>
            <UserTransaction image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}} name='Urban Services Hub' date='17 Aug 2024' amount='-$65.00'/>
        </div>
    );
};

export default TransactionList;