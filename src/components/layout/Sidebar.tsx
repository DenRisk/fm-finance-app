import React from 'react';
import Link from 'next/link';

export const Sidebar = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Dashboard</Link></li>
                <li><Link href="/transactions">Transactions</Link></li>
                <li><Link href="/budgets">Budgets</Link></li>
                <li><Link href="/pots">Pots</Link></li>
                <li><Link href="/bills">Recurring Bills</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;