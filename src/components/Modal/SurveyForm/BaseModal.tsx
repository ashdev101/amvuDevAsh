import React from 'react'
import { IoClose } from 'react-icons/io5'

type Props = {
    bgImageSrc: string
    currentStep: number
    onClose: () => void
    question: string
    instruction: string
    body: React.ReactNode
    footerButton: React.ReactNode
}

const array = [1, 2, 3, 4, 5, 6, 7, 8]

function BaseModalForSurvey({ bgImageSrc, currentStep, onClose, question, instruction, body, footerButton }: Props) {
    return (
        <main className='bg-slate-300 flex items-center justify-center w-screen h-screen'>
            <div className=' w-[620px] h-full border relative'>
                <img src={bgImageSrc} alt="" className=' w-full h-[60%] absolute top-0 object-fill ' />
                <div className=' absolute bottom-0 w-full h-[400px] items-center rounded-3xl justify-between flex flex-col bg-[#D9D9D9] px-8 py-3'>
                    {/* progress bar */}
                    <div className=' w-full flex flex-row items-center justify-between'>
                        <div className=' w-full flex flex-row items-center gap-1'>
                            {
                                array.map(item => (
                                    <div key={item} className={`w-[calc(85%/10)] py-[2px] rounded-xl ${currentStep <= item -1 ? "bg-slate-200" : "bg-slate-500"}`}></div>
                                ))
                            }
                        </div>

                        <div onClick={onClose}>
                        <IoClose size={25} />
                        </div>
                    </div>
                    <p className=' w-full font-bold text-lg text-center'>
                        {question}
                        <br />
                        {instruction ? <span className=' text-sm text-bold text-rose-500 text-start'>* if yes please specify</span> : null}
                    </p>

                    {
                        body
                    }


                    <div className=' flex flex-row  gap-3 items-center justify-between  w-full '>
                        <img src="logoamb.png" alt="" className=' w-[100px] sm:w-[125px] h-[inherit]' />
                        <div className=' flex flex-row items-center justify-center gap-3'>

                            {
                                footerButton
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default BaseModalForSurvey