
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
type Props = {}

function ThankuDonation
    ({ }: Props) {
    const [flip, setflip] = useState(true)
    return (
        <>
            <div className=' flex items-center justify-center w-screen h-screen'>


                <main className=' relative flex flex-row justify-center md:gap-2 lg:gap-5 max-w-[90%] max-h-[90%]  border-black  shadow-2xl rounded-3xl'>
                    <div className=' hidden md:block w-[550px] md:h-[480px] lg:h-[550px] '>
                        <img src="donation.png" alt="donation" className=' w-full h-full object-fill object-center ' />
                    </div>
                    <div className=' w-[550px] px-3'>

                        {
                            flip
                                ? (<div className='w-full h-full py-6 px-4 sm:px-10  rounded-xl md:py-3  md:px-4  lg:px-14 overflow-hidden'>
                                    <div className=' relative w-full h-[550px]  py-14 px-6 sm:px-10 md:h-full md:py-6 lg:py-10 md:px-6 lg:px-8 rounded-3xl [background:linear-gradient(180deg,rgb(195.91,142.2,142.2)_0%,rgba(255,255,255,0.79)_100%)]'>
                                        <p className=" w-full h-full flex flex-col  [font-family:'Poppins-SemiBold',Helvetica] font-normal text-black text-sm sm:text-[14px] tracking-[0] leading-[normal]">
                                            <span className="font-semibold mb-3">
                                                Dear ,<br />
                                            </span>
                                            <span className="[font-family:'Poppins-LightItalic',Helvetica] font-light italic">
                                                We wanted to take a moment to express our heartfelt gratitude for your incredibly generous donation to our
                                                medical cause. Your support is a testament to your compassion and belief in making a tangible difference. Your
                                                contribution will not only impact lives but also inspire hope and healing. Thank you for being a beacon of
                                                kindness and support.
                                                <br />
                                            </span>
                                            <span className="font-semibold">
                                                <br />
                                                With sincerest appreciation, <br />
                                                Ambuvians Healthcare
                                            </span>
                                        </p>

                                        <img src="blood.png" alt="" className=' absolute bottom-[-15px] right-[-10px]  lg:right-[-40px] w-[250px] h-[200px] lg:w-[350px] lg:h-[300px]' />
                                        <img onClick={() => setflip(!flip)} src="MOREdONA.png" alt="view" className=" absolute bottom-[15px] lg:bottom-[25px] right-0 w-[40px] h-[40px] " />
                                    </div>
                                </div>)

                                : (<div className='w-full h-full py-6 px-4 sm:px-10  rounded-xl md:py-3  md:px-4  lg:px-14 overflow-hidden'>
                                    <div className=' relative w-full h-[550px]   py-14 px-6 sm:px-10 md:h-full md:py-6 lg:py-10 md:px-6 lg:px-8 rounded-3xl [background:linear-gradient(180deg,rgb(195.91,142.2,142.2)_0%,rgba(255,255,255,0.79)_100%)]'>
                                        <div className=" w-full my-3">
                                            <img src="certificate.png" alt="your_certificate" className=" mx-auto w-[220px] h-[170px] object-fill object-center" />
                                        </div>
                                        <p className=" my-3 w-full text-center text-sm font-bold ">Thank you for donating. We have sent the certificate to the registered mail.</p>
                                        <div className=" w-full flex fle-row items-center justify-center gap-2">
                                            <img src="FacebookOct.png" alt="" className=" w-[40px] h-[40px]" />
                                            <img src="FacebookOct.png" alt="" className=" w-[40px] h-[40px]" />
                                            <img src="FacebookOct.png" alt="" className=" w-[40px] h-[40px]" />
                                            <img src="FacebookOct.png" alt="" className=" w-[40px] h-[40px]" />
                                        </div>

                                        <div className=' mt-6 w-full flex flex-col lg:flex-row items-center justify-center gap-4'>
                                            <img src="/GooglePlay.png" alt="Google Play" className='cursor-pointer w-[120px] h-[40px] object-contain' />
                                            <img src="/AppStore.png" alt="App Store" className='cursor-pointer w-[120px] h-[40px] object-contain' />
                                        </div>
                                    </div>
                                </div>)
                        }

                    </div>
                    <div className=' absolute  top-[-10px] right-[-10px]'>
                        <IoMdCloseCircle size={35} className=' text-rose-500 ' />
                    </div>
                </main>
            </div>
        </>
    )
}

export default ThankuDonation
