import React from 'react';
import SubPageLink from '@/components/navigation/SubPageLink'
import {PageIds} from '../../../types/page'
import TransactionOverviewList from '@/components/pages/overview/TransactionOverviewList'
import {useData} from '../../../util/DataContext'
import UserTransaction from '@/components/common/UserTransaction'
import {formatCurrency, formatDate} from '../../../util/helper'

const TransactionsOverview = () => {
    const data = useData()
    const transactions = data?.transactions;
    const highlightTransactions = transactions?.slice(0, 5)

    return (
        <div className='flex flex-col gap-y-8'>
            <SubPageLink title='Transactions' pageId={PageIds.TRANSACTIONS}/>
            <TransactionOverviewList>
                {
                    highlightTransactions?.map((transaction, index) => (
                        <UserTransaction
                            key={index}
                            mode={'overview'}
                            image={{url: transaction.avatar, alt: 'Avatar'}}
                            name={transaction.name}
                            date={formatDate(transaction.date)}
                            amount={formatCurrency(transaction.amount)}
                        />
                    ))
                }
            </TransactionOverviewList>
        </div>
    );
};

export default TransactionsOverview;