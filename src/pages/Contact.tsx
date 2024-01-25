
import HeroTopSection from '../components/Contact/HeroTopSection'
import BusinessQuerybottom from '../components/Contact/BusinessQuerybottom'
import Footer2 from '../components/FooterTest'
type Props = {}

function Contact({ }: Props) {

    return (
        <>
       
        <div className='min-h-screen '>
            <main className='w-screen '>

                <div className=' relative min-h-min overflow-x-hidden no-scrollbar '>
                    <HeroTopSection />
                    <BusinessQuerybottom />
                    {/* <Footer2/> */}
                </div>
            </main>
        </div>
        </>
    )
}

export default Contact