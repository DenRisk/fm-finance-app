import React from 'react';
import CategoryHeader from '@/components/common/CategoryHeader'
import CategoryTracker from '@/components/common/CategoryTracker'
import UserTransaction from '@/components/common/UserTransaction'
import SeeAllSubHeader from '@/components/common/SeeAllSubHeader'

type BudgetCategoryProps = {
    color: string;
    category: string;
    maxBudget: string;
    spent: string;
    remaining: string;
    transactions:
        {
            image: {
                url: string;
                alt: string;
            };
            name: string;
            date: string;
            amount: string;
        }[]

}

const beige = '#F8F4F0'

const BudgetCategory = ({color, category, maxBudget, spent, remaining, transactions}: BudgetCategoryProps) => {
    return (
        <div>
            <CategoryHeader color={color} category={category}/>
            <p className='text-grey-500 text-4 my-5'>Maximum of {maxBudget}</p>
            <div className='grid grid-cols-2 mb-5'>
                <CategoryTracker category='Spent' value={spent} color={color}/>
                <CategoryTracker category='Remaining' value={remaining} color={beige}/>
            </div>
            <div className='bg-beige-100 rounded-[12px] p-5'>
                <SeeAllSubHeader/>
                <div className='divide-y divide-grey-300'>
                    {
                        transactions.map((transaction, index) => (
                            <UserTransaction key={index} mode='overview' image={transaction.image}
                                             name={transaction.name} date={transaction.date}
                                             amount={transaction.amount}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BudgetCategory;