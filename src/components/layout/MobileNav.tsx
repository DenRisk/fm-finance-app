import React from 'react';
import Link from 'next/link';

const MobileNav = () => {

    return (
        <div>
            <Link href="/">
                Dashboard
            </Link>
            <Link href="/transactions">
                Transactions
            </Link>
            <Link href="/budgets">
                Budgets
            </Link>
            <Link href="/pots">
                Pots
            </Link>
            <Link href="/bills">
                Bills
            </Link>
        </div>
    );
};

export default MobileNav;