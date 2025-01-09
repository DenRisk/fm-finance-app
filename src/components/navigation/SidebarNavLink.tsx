import React from 'react';
import Icon, {IconIds} from '@/components/common/Icon'
import Link from 'next/link';

type NavItemProps = {
    pageId: string;
    iconId: IconIds;
    label: string;
    active: boolean;
    minimized?: boolean;
}

const SidebarNavLink = ({pageId, iconId, label, active, minimized = true}: NavItemProps) => {
    return (
        <li className={`flex`}>
            <Link href={pageId} className={'w-full'}>
                <div className={`flex-shrink-0 bg-grey-900 w-1 ${active ? 'bg-primary-green' : ''}`}></div>
                <div
                    className={`flex gap-4 items-start gap-y-6 text-grey-300 text-3 rounded-br-xl rounded-tr-xl grow ${minimized ? ' pl-8 pr-4 py-4' : 'px-8 py-4'} ${active ? 'bg-beige-100 text-primary-green' : 'hover:text-white'}`}>
                    <Icon id={iconId} useCurrentColor={true} pointer={true}/>
                    <span
                        className={` transition-all ${minimized ? 'opacity-0 w-0' : 'opacity-100'} ${active ? 'text-grey-900' : ''} text-nowrap`}>{label}</span>
                </div>
            </Link>
        </li>
    );
};

export default SidebarNavLink;