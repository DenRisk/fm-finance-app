import React from 'react';
import SubPageLink from '@/components/navigation/SubPageLink'
import {PageIds} from '../../../types/page'
import TransactionOverviewList from '@/components/pages/overview/TransactionOverviewList'

const TransactionsOverview = () => {
    return (
        <div className='flex flex-col gap-y-8'>
            <SubPageLink title='Transactions' pageId={PageIds.TRANSACTIONS}/>
            <TransactionOverviewList/>
        </div>
    );
};

export default TransactionsOverview;