import React from 'react';
import Card from '@/components/common/Card'
import TransactionTableHeader from '@/components/pages/transactions/TransactionTableHeader'
import TransactionList from '@/components/pages/transactions/TransactionList'
import TransactionFilter from '@/components/pages/transactions/TransactionFilter'
import TransactionPagination from '@/components/pages/transactions/TransactionPagination'

const TransactionTable = () => {
    return (
        <Card useFullWidth>
            <TransactionFilter/>
            <TransactionTableHeader/>
            <TransactionList/>
            <TransactionPagination/>
        </Card>
    );
};

export default TransactionTable;