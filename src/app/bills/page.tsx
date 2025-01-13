import Heading from '@/components/common/Heading'
import RecurringBillsSection from '@/components/pages/bills/RecurringBillsSection'

const BillsPage = () => {
    return (
        <section>
            <Heading text='Recurring Bills'/>
            <RecurringBillsSection/>
        </section>
    );
}

export default BillsPage;