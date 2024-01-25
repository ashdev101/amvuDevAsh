import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import toast from 'react-hot-toast';
import { OpenPaymentModal } from '../../redux/DonationModalSlice';
import { RefreshOtpMutation } from '../../ApiCalling/mutations';
type Props = {}

function VerifyOtpForDonationModal({ }: Props) {
    const userEnterAttribtuesOfDonation = useSelector((state: RootState) => state.DonationModal)
    console.log(userEnterAttribtuesOfDonation.isOtpModalOpen)
    const mutationResendOtp = RefreshOtpMutation()
    console.log(userEnterAttribtuesOfDonation.OtpToVerify)
    const dispatch = useDispatch();
    const handleSubmitOtp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const otp1 = formData.get('otp1') as string;
        const otp2 = formData.get('otp2') as string;
        const otp3 = formData.get('otp3') as string;
        const otp4 = formData.get('otp4') as string;

        
        // return dispatch(OpenPaymentModal())
        if (`${otp1}${otp2}${otp3}${otp4}` === userEnterAttribtuesOfDonation.OtpToVerify) {
            toast.success("Otp verified successfully pls choose the payment method and amount to donate")
            return dispatch(OpenPaymentModal())
        }
        return toast.error("Invalid otp")
    }

    const handleResendOtp = () => {
        
        if (!userEnterAttribtuesOfDonation.email) return //this cant be true but if we can send the user back to the donation registration  page
        mutationResendOtp.mutate(userEnterAttribtuesOfDonation.email)
    }


    const isVerifyOtpForDonationModalOpen = useSelector((state: RootState) => state.DonationModal.isOtpModalOpen)

    return (
        <>
            {
                isVerifyOtpForDonationModalOpen ?
                    (
                        <div className=' fixed z-[100] bg-white flex items-center justify-center w-screen h-screen'>


                            <main className=' relative flex flex-row justify-center md:gap-2 lg:gap-5 max-w-[90%] max-h-[90%]  border-black  shadow-2xl rounded-3xl'>
                                <div className=' hidden md:block w-[550px] md:h-[480px] lg:h-[550px] '>
                                    <img src="donation.png" alt="donation" className=' w-full h-full object-fill object-center ' />
                                </div>
                                <div className=' w-[550px] flex flex-col md:gap-2 lg:gap-4  justify-start'>
                                    <section>
                                        <img src="logoamb.png" alt="logo" className=' min-w-[150px] min-h-[50px] object-contain object-center' />
                                    </section>
                                    <section className=' w-full items-center justify-center gap-5 text-3xl lg:text-4xl font-bold text-center'>
                                        <span>Ambuvians </span>
                                        <span className=' text-rose-500'>Healthcare</span>
                                    </section>
                                    <section className=' w-full text-center'>
                                        <span className=' w-full font-bold text-sm'>Give a Little, Change a Lot: Donate Today!!</span>
                                    </section>
                                    <section className=' w-full mb-10 lg:mb-10 mt-5 text-center'>
                                        <span className=' font-bold text-3xl lg:text-4xl '>Verify Otp</span>
                                    </section>
                                    <section>

                                        <form onSubmit={handleSubmitOtp} >
                                            <div className="flex flex-col space-y-8 p-5 md:p-0">
                                                <div className="flex flex-row items-center justify-center gap-5 mx-auto w-full max-w-xs">
                                                    <div className=" w-12 h-12  md:w-14 md:h-14 lg:w-16 lg:h-16 ">
                                                        <input name="otp1" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#FD1E08]" type="text" />
                                                    </div>
                                                    <div className=" w-12 h-12  md:w-14 md:h-14 lg:w-16 lg:h-16 ">
                                                        <input name="otp2" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#FD1E08]" type="text" />
                                                    </div>
                                                    <div className=" w-12 h-12  md:w-14 md:h-14 lg:w-16 lg:h-16 ">
                                                        <input name="otp3" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#FD1E08]" type="text" />
                                                    </div>
                                                    <div className=" w-12 h-12  md:w-14 md:h-14 lg:w-16 lg:h-16 ">
                                                        <input name="otp4" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#FD1E08]" type="text" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                                    <p>Didn't recieve code?</p> <a  onClick={handleResendOtp} className="flex flex-row items-center text-[#FD1E08]" >Resend</a>
                                                </div>

                                                <div className="flex items-center justify-center space-y-5">

                                                    <button
                                                        type='submit'
                                                        className="flex flex-row items-center justify-center max-w-[300px] text-center w-full  rounded-xl outline-none py-3 md:py-5 bg-[#FD1E08] border-none text-white text-sm shadow-sm">
                                                        Submit
                                                    </button>



                                                </div>
                                            </div>
                                        </form>

                                    </section>
                                </div>
                                <div className=' absolute  top-[-10px] right-[-10px]'>
                                    <IoMdCloseCircle size={35} className=' text-rose-500 ' />
                                </div>
                            </main>
                        </div>
                    )
                    : null
            }

        </>
    )
}

export default VerifyOtpForDonationModal
