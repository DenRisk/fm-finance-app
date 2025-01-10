import Heading from '@/components/common/Heading'
import TransactionTable from '@/components/pages/transactions/TransactionTable'

const TransactionsPage = () => {
    return (
        <section>
            <Heading text='Transactions'/>
            <TransactionTable/>
        </section>
    );
}

export default TransactionsPage;