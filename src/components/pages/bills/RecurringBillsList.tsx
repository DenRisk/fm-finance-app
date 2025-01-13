import React from 'react';
import BillDetailItem from '@/components/pages/bills/BillDetailItem'

const RecurringBillsList = () => {
    return (
        <div className='divide-y divide-grey-100'>
            <BillDetailItem state='default' amount={'$100'} name={'Spark Electric Solutions'} period={'monthly'} dayCount={'2'} image={{url: '/images/avatars/spark-electric-solutions.jpg', alt: ''}}/>
            <BillDetailItem state='soon' amount={'$100'} name={'Spark Electric Solutions'} period={'monthly'} dayCount={'2'} image={{url: '/images/avatars/spark-electric-solutions.jpg', alt: ''}}/>
            <BillDetailItem state='paid' amount={'$100'} name={'Spark Electric Solutions'} period={'monthly'} dayCount={'2'} image={{url: '/images/avatars/spark-electric-solutions.jpg', alt: ''}}/>
        </div>
    );
};

export default RecurringBillsList;