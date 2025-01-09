import Heading from '@/components/common/Heading'
import BudgetTracker from '@/components/pages/overview/BudgetTracker'
import Card from '@/components/common/Card'
import PotsOverview from '@/components/pages/overview/PotsOverview'
import TransactionsOverview from '@/components/pages/overview/TransactionsOverview'
import BudgetsOverview from '@/components/pages/overview/BudgetsOverview'
import RecurringBillsOverview from '@/components/pages/overview/RecurringBillsOverview'

export default function Dashboard() {
    return (
        <section>
            <Heading text='Overview'/>
            <BudgetTracker/>
            <div className='grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] xl:grid-rows-3-minmax gap-6 max-w-full mx-auto flex-1 xl:max-h-[calc(100dvh_-_336px)]'>
                <div className='row-span-1'>
                    <Card useFullWidth useFullHeight>
                        <PotsOverview/>
                    </Card>
                </div>
                <div className='row-span-2 h-full'>
                    <Card useFullWidth useFullHeight>
                        <BudgetsOverview/>
                    </Card>
                </div>
                <div className='row-span-2'>
                    <Card useFullWidth useFullHeight>
                        <TransactionsOverview/>
                    </Card>
                </div>
                <div className='row-span-1'>
                    <Card useFullWidth useFullHeight>
                        <RecurringBillsOverview/>
                    </Card>
                </div>
            </div>
        </section>
    );
}
