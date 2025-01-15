import React from 'react';

interface TextSpinnerProps {
    color?: 'white' | 'black';
    size?: 'sm' | 'md' | 'lg';
}

const TextSpinner = ({ color = 'white', size = 'md' }: TextSpinnerProps) => {
    const sizeClasses = {
        sm: 'h-3',
        md: 'h-6',
        lg: 'h-8',
    };

    return (
        <div
            className={`w-2 relative inline-block rounded-sm animate-textLoader ${
                sizeClasses[size]
            } ${color === 'white' ? 'text-white' : 'text-black'}`}
        ></div>
    );
};

export default TextSpinner;
