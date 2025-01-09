'use client';
import {usePathname} from 'next/navigation'
import BottomNavLink from '@/components/navigation/BottomNavLink'
import {PageIds} from '../../types/page'


const BottomNavigation = () => {
    const currentPath = usePathname();

    return (
        <ul className='bg-grey-900 px-4 md:px-10 pt-2 flex justify-between gap-x-5'>
            <BottomNavLink
                pageId={PageIds.OVERVIEW}
                iconId='navOverview'
                active={currentPath === PageIds.OVERVIEW}
                label='Overview'
            />

            <BottomNavLink
                pageId={PageIds.TRANSACTIONS}
                iconId='navTransactions'
                active={currentPath === PageIds.TRANSACTIONS}
                label='Transactions'
            />
            <BottomNavLink
                pageId={PageIds.BUDGETS}
                iconId='navBudgets'
                active={currentPath === PageIds.BUDGETS}
                label='Budgets'
            />
            <BottomNavLink
                pageId={PageIds.POTS}
                iconId='navPots'
                active={currentPath === PageIds.POTS}
                label='Pots'
            />
            <BottomNavLink
                pageId={PageIds.BILLS}
                iconId='navBills'
                active={currentPath === PageIds.BILLS}
                label='Recurring Bills'
            />
        </ul>
    );
};

export default BottomNavigation;