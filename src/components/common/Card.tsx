import React from 'react';

type CardProps = {
    isHighlighted?: boolean;
    useFullWidth?: boolean;
    useFullHeight?: boolean;
    children: React.ReactNode;
}

const Card = ({isHighlighted = false, useFullWidth, useFullHeight, children}: CardProps) => {
    return (
        <div
            className={`rounded-3xl p-6 md:p-8 ${isHighlighted ? 'bg-grey-900 text-white' : 'bg-white text-grey-900'} ${useFullWidth ? 'w-full' : 'w-fit'} ${useFullHeight ? 'h-full' : ''}`}>
            {children}
        </div>
    );
};

export default Card;