'use client'

import {useState} from 'react';
import SidebarNavLink from '@/components/navigation/SidebarNavLink'
import Logo from '@/components/common/Logo'
import Icon from '@/components/common/Icon'

import {usePathname} from 'next/navigation'
import {PageIds} from '../../types/page'

export const Sidebar = () => {
    const currentPath = usePathname();
    const [minimized, setMinimized] = useState<boolean>(false)

    const toggleMinimizing = () => {
        setMinimized(!minimized)
    }

    return (
        <div
            className={`bg-grey-900 rounded-br-2xl rounded-tr-2xl text-white h-full flex flex-col gap-y-6 pb-6 ${minimized ? 'pr-2 w-24' : 'pr-6 w-80'} transition-all ease-in-out duration-300`}>
            <div className={`h-[102px] ${minimized ? 'pl-[36px] pr-2 py-10' : 'pl-[36px] pr-4 py-10'} flex`}>
                <Logo size={minimized ? 'small' : 'large'}/>
            </div>
            <ul className='flex flex-col flex-grow'>
                <SidebarNavLink
                    pageId={PageIds.OVERVIEW}
                    iconId='navOverview'
                    active={currentPath === PageIds.OVERVIEW}
                    label='Overview'
                    minimized={minimized}
                />
                <SidebarNavLink
                    pageId={PageIds.TRANSACTIONS}
                    iconId='navTransactions'
                    active={currentPath === PageIds.TRANSACTIONS}
                    label='Transactions'
                    minimized={minimized}
                />
                <SidebarNavLink
                    pageId={PageIds.BUDGETS}
                    iconId='navBudgets'
                    active={currentPath === PageIds.BUDGETS}
                    label='Budgets'
                    minimized={minimized}
                />
                <SidebarNavLink
                    pageId={PageIds.POTS}
                    iconId='navPots'
                    active={currentPath === PageIds.POTS}
                    label='Pots'
                    minimized={minimized}
                />
                <SidebarNavLink
                    pageId={PageIds.BILLS}
                    iconId='navBills'
                    active={currentPath === PageIds.BILLS}
                    label='Recurring Bills'
                    minimized={minimized}
                />
            </ul>
            <button
                className={`text-grey-300 flex gap-x-4 items-center ${minimized ? ' pl-8 pr-2 py-4' : 'px-8 py-4'}`}
                onClick={toggleMinimizing}
            >
                <div className={` transition-all ${minimized ? 'rotate-180' : ''}`}>
                    <Icon id='minimize' pointer={true} useCurrentColor={true}/>
                </div>
                <span className={`  transition-all ${minimized ? 'opacity-0 w-0' : 'opacity-100'} text-nowrap`}>Minimize Menu</span>
            </button>
        </div>
    );
};

export default Sidebar;