import React from 'react'
import HamburgerMenu from '../Common/Hamburger'
import Input from '../register-form/input'
import Selector from '../Common/Selector'
import TextArea from '../Common/TextArea'
import HeroBase from './HeroBase'
import GeneralContactForm from './GeneralContactForm'


type Props = {}

function HeroTopSection({ }: Props) {

    return (
        <>
            <HeroBase
                zuzu1={true}
                zuzu3={true}
                ellipse={true}
                ellipse2={true}
                zuzu1Position={"top-[125px] right-0"}
                zuzu3Position={"top-[250px] right-[350px]"}
                ellipsePosition={"top-[150px] right-[50%] "}
                ellipse2Position={"top-[225px] left-[100px]"}
            />
            <section className=' max-[780px]:w-[100%]  shadow-lg absolute max-[780px]:top-[500px] top-[300px] min-[780px]:right-[50px]  max-[860px]:w-[350px] max-[970px]:w-[400px]  min-[970px]:w-[450px]  bg-white p-3 rounded-3xl'>

                <GeneralContactForm />
            </section>

            <section className=' absolute  flex flex-col max-[860px]:w-[320px] w-[350px] justify-center gap-4 text-black  min-[780px]:bottom-[-110px] max-[780px]:top-[150px] left-5  min-[780px]:shadow-md'>
                <div className=''>
                    <p className=' font-bold text-4xl  text-white'>Feedback And</p>
                    <p className=' font-bold text-4xl  text-white'>Query Section</p>
                </div>
                <span className=' text-sm  text-white'>Feel free to share your thoughts and highlight the requirements that you require.</span>
                <div className=' bg-white flex flex-col p-4 rounded-2xl text-black'>
                    <div className=' w-full flex flex-row items-center justify-between my-2'>
                        <div className=' flex flex-row items-center justify-center gap-2'>
                            <img className=' w-[50px] h-[50px]' src="Mail.png" alt="email" />
                            <p className=' text-md font-bold'>Mail Us</p>
                        </div>
                        <div className=' text-end'>
                            <p className=' text-sm font-bold'>contact@ambuvians.in</p>
                            <p className=' text-sm font-bold'>help@ambuvians.in</p>
                        </div>
                    </div>
                    <hr />
                    <div className=' w-full flex flex-row items-center justify-between my-2'>
                        <div className=' flex flex-row items-center justify-center gap-2'>
                            <img className=' w-[50px] h-[50px]' src="callUs.png" alt="Call" />
                            <p className=' text-md font-bold'>Call Us</p>
                        </div>
                        <div>
                            <p className=' text-sm font-bold'>+91-7505853812</p>
                            <p className=' text-sm font-bold'>+91-8630729931</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default HeroTopSection