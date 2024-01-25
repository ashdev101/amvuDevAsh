import React, { MouseEvent, MouseEventHandler } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import PaymentOptions from '../../components/Donation/PaymentOption';
import Input from '../../components/register-form/input';
import { MakePaymentMutation } from '../../ApiCalling/mutations';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
type Props = {}

function PaymentForDonationModal
    ({ }: Props) {
    const [amount, setAmount] = React.useState("");

    const [SelectedPayment, setSelectedPayment] = React.useState("");
    const paymutation = MakePaymentMutation()
    const userEnterAttribtuesOfDonation = useSelector((state: RootState) => state.DonationModal)
    const handlePayment = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        if (SelectedPayment == "") return toast.error("Please select payment option")

        if (amount == "") return toast.error("Please enter amount")

        if (!userEnterAttribtuesOfDonation.email || !userEnterAttribtuesOfDonation.phoneNumber || !userEnterAttribtuesOfDonation.name) return // this cant be true but we can send the user back to the main page of donation registration 
        //this value can come from routing via state
        paymutation.mutate({
            user_id: userEnterAttribtuesOfDonation.email,
            phone: userEnterAttribtuesOfDonation.phoneNumber,
            price: Number(amount),
            name: userEnterAttribtuesOfDonation.name
        })
    }
    return (
        <>
            {
                userEnterAttribtuesOfDonation.isPaymentModalOpen ?
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
                                    <section className=' w-full mb-10 lg:mb-5 mt-5 text-center'>
                                        <span className=' font-bold text-3xl lg:text-4xl '>Payment</span>
                                    </section>


                                    <section className=' flex flex-col items-center justify-center gap-3 '>
                                        <Input value={amount} type="number" name={"amount"} label={'Enter Amount'} isrequired={false} onChange={(e) => setAmount(e.target.value)} />
                                        <div className='min-w-[250px] mt-5'>
                                            <PaymentOptions
                                                imgSrc={'/phonepe.png'}
                                                desc={'Phone Pay'}
                                                active={SelectedPayment}
                                                onClick={() => { setSelectedPayment("Phone Pay") }} />
                                        </div>

                                        <div className=' flex flex-row items-center justify-center gap-5 mt-6 pb-2'>
                                            <button
                                                className="text-white text-sm font-semibold tracking-tight whitespace-nowrap bg-red-600 max-w-[185px]  px-16 py-3 rounded-md"
                                                aria-label="Cancel Button"
                                                role="button"
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                onClick={handlePayment}
                                                className="text-white text-sm font-semibold tracking-tight whitespace-nowrap bg-green-600 max-w-[185px] px-16 py-3 rounded-md"
                                                aria-label="Pay"
                                            >
                                                Pay
                                            </button>
                                        </div>
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

export default PaymentForDonationModal
