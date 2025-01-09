import React from 'react';
import SubPageLink from '@/components/navigation/SubPageLink'
import {PageIds} from '../../../types/page'
import TransactionList from '@/components/pages/overview/TransactionList'

const TransactionsOverview = () => {
    return (
        <div className='flex flex-col gap-y-8'>
            <SubPageLink title='Transactions' pageId={PageIds.TRANSACTIONS}/>
            <TransactionList/>
        </div>
    );
};

export default TransactionsOverview;