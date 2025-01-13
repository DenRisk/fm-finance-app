'use client'

import Button from '@/components/common/Button'

type HeadingProps = {
    text: string;
    showAddNewBtn?: boolean;
    showAddNewLabel?: string;
};

export default function Heading({text, showAddNewBtn, showAddNewLabel}: HeadingProps) {
    return (
        <header className='w-full min-h-14 flex justify-between items-center mb-8'>
            <h1 className='text-1'>{text}</h1>
            {
                showAddNewBtn && (
                    <Button type={'button-primary'} onClick={() => {
                    }}>
                        <span>+</span>
                        <span>{showAddNewLabel}</span>
                    </Button>
                )
            }
        </header>
    );
}
