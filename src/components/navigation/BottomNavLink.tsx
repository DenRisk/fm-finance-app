import React from 'react';
import Icon, {IconIds} from '@/components/common/Icon'
import Link from 'next/link';

type NavItemProps = {
    pageId: string;
    iconId: IconIds;
    label: string;
    active: boolean;
}

const BottomNavLink = ({pageId, iconId, label, active}: NavItemProps) => {
    return (
        <li className={`flex h-auto items-center justify-center flex-1 w-full `}>
            <Link href={pageId} className='w-full'>
                <div
                    className={`flex flex-col w-full items-center gap-y-2 text-grey-300 text-3 rounded-tl-xl rounded-tr-xl pt-2 pb-3 px-2 justify-center ${active ? 'bg-beige-100 text-primary-green' : 'hover:text-white'}`}>
                    <Icon id={iconId} useCurrentColor={true} pointer={true}/>
                    <span className={`hidden lg:inline ${active ? 'text-grey-900' : ''} text-nowrap`}>{label}</span>
                </div>
                <div className={`bg-grey-900 w-full h-1 ${active ? 'bg-primary-green' : ''}`}></div>
            </Link>
        </li>
    )
        ;
};

export default BottomNavLink;