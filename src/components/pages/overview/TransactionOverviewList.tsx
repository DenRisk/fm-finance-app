import React from 'react';

type TransactionOverviewListProps = {
    children: React.ReactNode;
}

const TransactionOverviewList = ({children}: TransactionOverviewListProps) => {
    return (
        <div className='divide-y divide-grey-100'>
            {children}
        </div>
    );
};

export default TransactionOverviewList;