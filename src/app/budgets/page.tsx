import Heading from '@/components/common/Heading'
import BudgetsSection from '@/components/pages/budgets/BudgetsSection'

const BudgetsPage = () => {
    return (
        <section className='h-full overflow-y-scroll'>
            <Heading text='Budgets'/>
            <BudgetsSection></BudgetsSection>
        </section>
    );
}

export default BudgetsPage;