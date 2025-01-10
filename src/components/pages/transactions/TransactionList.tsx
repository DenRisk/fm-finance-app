import React from 'react';
import UserTransaction from '@/components/common/UserTransaction'

const TransactionList = () => {
    return (
        <div className='my-6 divide-y divide-grey-100'>
            <UserTransaction mode='list' image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}}
                             name='Emma Richardson' date='19 Aug 2024' amount='+$75.50' category='General'/>
            <UserTransaction mode='list' image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}}
                             name='Emma Richardson' date='19 Aug 2024' amount='+$75.50' category='Bills'/>
            <UserTransaction mode='list' image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}}
                             name='Emma Richardson' date='19 Aug 2024' amount='+$75.50' category='Transportation'/>
            <UserTransaction mode='list' image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}}
                             name='Emma Richardson' date='19 Aug 2024' amount='+$75.50' category='Lifestyle'/>
            <UserTransaction mode='list' image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}}
                             name='Emma Richardson' date='19 Aug 2024' amount='+$75.50' category='General'/>
            <UserTransaction mode='list' image={{url: '/images/avatars/ethan-clark.jpg', alt: ''}}
                             name='Emma Richardson' date='19 Aug 2024' amount='+$75.50' category='Personal Care'/>
        </div>
    );
};

export default TransactionList;