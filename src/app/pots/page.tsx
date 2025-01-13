import Heading from '@/components/common/Heading'
import Card from '@/components/common/Card'
import PotCategory from '@/components/pages/pots/PotCategory'

const PotsPage = () => {
    return (
        <section>
            <Heading text='Pots' showAddNewBtn showAddNewLabel={'Add new Pot'}/>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                <Card useFullWidth>
                    <PotCategory color={'#277C78'} category={'Savings'} totalSaved='$159.00' percentageSaved={'7.95%'} target={'$2.000'}/>
                </Card>
                <Card useFullWidth>
                    <PotCategory color={'#626070'} category={'Concert Ticket'} totalSaved='$110.00' percentageSaved={'73.3%'} target={'$150'}/>
                </Card>
                <Card useFullWidth>
                    <PotCategory color={'#82C9D7'} category={'Gift'} totalSaved='$40.00' percentageSaved={'66.6%'} target={'$60'}/>
                </Card>
                <Card useFullWidth>
                    <PotCategory color={'#F2CDAC'} category={'New Laptop'} totalSaved='$159.00' percentageSaved={'1.0%'} target={'$1.000'}/>
                </Card>
                <Card useFullWidth>
                    <PotCategory color={'#826CB0'} category={'Holiday'} totalSaved='$159.00' percentageSaved={'36.8%'} target={'$1.440'}/>
                </Card>
            </div>
        </section>
    );
}

export default PotsPage;