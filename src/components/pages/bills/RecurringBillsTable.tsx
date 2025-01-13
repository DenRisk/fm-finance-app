import React from 'react';

type RecurringBillsTableProps = {
    children: React.ReactNode;
}

const RecurringBillsTable = ({children}: RecurringBillsTableProps) => {
    return (
        <>
            {children}
        </>
    );
};

export default RecurringBillsTable;