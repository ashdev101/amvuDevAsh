import React from 'react'
import InputB from '../../components/Dashboard/Input'
import Selector from '../Common/Selector'
import BusinessContactForm from './BusinessContactForm'

type Props = {}

function BusinessQuerybottom({ }: Props) {

    return (
        <div className=' absolute min-h-max mt-80 max-[780px]:top-[900px] '>

            <section className=' flex flex-row justify-between w-full px-2 md:pl-10 md:pr-10 gap-10 lg:gap-20 mt-10'>
                <section className='max-[880px]:w-[99%] w-[50%]  px-4'>
                    <div className='flex gap-2'>
                        <p className=' text-3xl font-bold '>Business</p>
                        <p className=' text-3xl font-bold text-rose-500'>Queries</p>
                    </div>
                    <span className=' text-sm mt-4'>Whether it's about optimizing operations, refining strategies, or exploring innovative solutions, I'm here to delve into your business queries. Let's navigate the complexities, unravel challenges, and discover pathways to success together.</span>
                    <BusinessContactForm />
                </section>
                <section className='min-w-[450px]  max-[880px]:min-w-max  relative hidden  md:block'>
                    <img src="/RectangleD.png" alt="" className='max-[880px]:w-[250px] w-[320px] h-[600px]  rounded-r-3xl absolute right-0 ' />
                    <img src="/business.png" alt="" className='max-[880px]:w-[500px] w-[500px] h-[550px]  absolute top-10 object-fill object-center ' />
                </section>

            </section>

            <section className=' mt-5 text-sm font-bold pl-8 flex items-start flex-col lg:flex-row lg:items-center justify-between w-screen md:w-[50%] lg:w-[calc(100%-600px)]'>
                <div className=' flex flex-row items-center justify-center gap-2'>
                    <section>
                        <img className=' min-w-[30px] min-h-[35]' src="/call.png" alt="" />
                    </section>
                    <section>
                        <p className='' >Phone</p>
                        <p className=' text-red-500'>7505853812</p>
                        <p className=' text-red-500'>7505853812</p>
                    </section>
                </div>
                <div className=' flex flex-row items-center justify-center gap-2'>
                    <section>
                        <img className=' min-w-[30px] min-h-[35]' src="/FrameY.png" alt="" />
                    </section>
                    <section>
                        <p className=''>ADDRESS</p>
                        <p className=' text-red-500'>4th Floor TBI KIET Group of Institutions <br />Ghaziabad Delhi NCR 201206</p>
                    </section>
                </div>
                <div className=' flex flex-row items-center justify-center gap-2'>
                    <section>
                        <img className=' min-w-[30px] min-h-[35]' src="/FrameX.png" alt="" />
                    </section>
                    <section>
                        <p className=' '>Email</p>
                        <p className=' text-red-500'>contact@ambuvians.in</p>
                        <p className=' text-red-500'>help@ambuvians.in</p>
                    </section>
                </div>

            </section>
        </div>
    )
}

export default BusinessQuerybottom