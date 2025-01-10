import React from 'react';
import Icon from '@/components/common/Icon'

type PaginationDirectionProps = {
    type: 'prev' | 'next';
}

const PaginationDirection = ({type}: PaginationDirectionProps) => {
    return (
        <button className='px-4 py-2 bg-white text-grey-500 rounded-lg border border-solid border-beige-500 hover:text-grey-900 hover:border-grey-900 flex items-baseline gap-x-4'>
            {type == 'prev' &&
                (
                    <>
                        <Icon id='caretLeft' pointer={true} useCurrentColor={true}/>
                        <span>Prev</span>
                    </>
                )
            }
            {type == 'next' &&
                (
                    <>
                        <span>Next</span>
                        <Icon id='caretRight' pointer={true} useCurrentColor={true}/>
                    </>
                )
            }
        </button>
    );
};

export default PaginationDirection;